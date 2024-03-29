<script context="module">
  export async function load({ page, context }) {
    return { props: { id: page.params.slug } };
  }
</script>

<script>
  import { session } from "$app/stores";
  import Slider from "$components/Slider.svelte";

  export let id;

  let view = $session.configuration.views[id];
  const KE_PID = $session.constants.KE_PID;
  const UNIT_LABEL = $session.constants.PID_UNIT_LABEL;
  const pids = Object.keys(KE_PID);
  const themes = $session.constants.themes || [];
  let theme;
  if (view && view.gauges.length > 0) {
    theme = view.gauges[0].theme;
  }
  // Defining a new view?
  else {
    view = {
      name: "",
      enabled: true,
      default: 0,
      background: "",
      alerts: [],
      dynamic: {},
      gauges: [],
    };
  }

  function normalizeGauges(config = undefined) {
    let temp = config ? config : view;

    if (temp) {
      // Ensure we always have 3 entries in our array
      while (temp.gauges.length < 3) {
        temp.gauges.push({
          theme: undefined,
          unit: undefined,
          pid: undefined,
        });
      }
    }
    return temp;
  }
  view = normalizeGauges();

  function getUnits(node) {
    const pid = node.target.value;
    let pidRegex = /(gauge|dynamic|alert)-(\d+)/;
    let matches = pidRegex.exec(node.target.name);

    let type = matches[1],
      index = matches[2];

    if ( view.gauges[index] && view.gauges[index].pid ) {
      if (type == "gauge") {
        view.gauges[index].pid = pid;
      } else if (type == "alert") {
        view.alerts[index].pid = pid;
      } else if (type == "dynamic") {
        view.dynamic.pid = pid;
      }
    }
    else {
      view.gauges[index] = { 'pid' : pid };
    }

    // find our units for the provided pid
    let unitsSelect = node.srcElement.parentElement.nextSibling.nextSibling.querySelectorAll(
      "[name=units]"
    )[0];
    // Clear our old units from units select input
    let i = 0;
    for (i = 0; i < unitsSelect.options.length; i++) {
      unitsSelect.remove(i);
    }

    if (!pid) {
      unitsSelect.options[0] = new Option("-", "", false, false);
      return;
    }
    // Add our units to our select input
    Object.keys(KE_PID[pid].units).forEach((unit, i) => {
      let label = UNIT_LABEL[unit];

      unitsSelect.options[i] = new Option(label, unit, false, false);
    });
    // Actually set the select value to the first unit
    let currentValue;
    let unit;
    if ( view.gauges[index] ) {
      if (type == "gauge") {
        currentValue = KE_PID[pid].units[view.gauges[index].unit];
        unit = view.gauges[index].unit;
      } else if (type == "alert") {
        currentValue = KE_PID[pid].units[view.alerts[index].unit];
        unit = view.alerts[index].unit;
      } else if (type == "dynamic") {
        currentValue = KE_PID[pid].units[view.dynamic.unit];
        unit = view.dynamic.unit;
      }

      if (currentValue) {
        unitsSelect.value = unit;
      } else {
        unitsSelect.value = unitsSelect.options[0].value;
      }
      unitsSelect.focus();
      unitsSelect.blur();
    }
  }

  function pidChange(node) {
    node.addEventListener("change", getUnits);
    // Set our initial values
    var event = new Event("change");
    node.dispatchEvent(event);

    return {
      destroy() {
        node.removeEventListener("change", getUnits);
      },
    };
  }

  function handleSubmit(event) {
    let configuration = $session.configuration;
    configuration.views[id] = view;

    if (
      configuration.views[id].dynamic &&
      !configuration.views[id].dynamic.pid
    ) {
      configuration.views[id].dynamic = {};
    }

    view.gauges.forEach((gauge, i) => {
      if (gauge.pid) {
        view.gauges[i].theme = theme;
      }
    });

    fetch("/api/config", {
      method: "POST",
      body: JSON.stringify(configuration),
    })
      .then((d) => d.json())
      .then((d) => {
        $session.configuration = d.config;
        view = {};
        view = d.config.views[id];
        theme = view.gauges[0].theme;

        view = normalizeGauges();

        $session.actions = [
          {
            id: $session.count,
            msg: d.message,
            theme: d.ret ? "alert-info" : "alert-warning",
          },
          ...$session.actions,
        ];
      });

      let changeEvent = new Event("change");
      let elements = ['pid-0', 'pid-1', 'pid-2'];
      elements.forEach((element) => {
        let pidInput = document.getElementById(element)
        pidInput.dispatchEvent(changeEvent);
      });
  }

  function addAlert() {
    view.alerts = [
      ...view.alerts,
      {
        message: "",
        op: "",
        priority: "",
        unit: "",
        value: "",
      },
    ];
  }

  function removeAlert(index) {
    let tempArr = view.alerts;
    tempArr.splice(index, 1);

    view.alerts = tempArr;
  }

  function toggleDynamic() {
    view.dynamic.enabled = view.dynamic.enabled ? false : true;
  }
</script>

<div class="col-sm-12 col-sm-8 pb-4">
  {#if view}
    <div id="edit-container" class="container">
      <div class="col-sm-12 order-sm-1">
        <h4 class="mb-3">Editing view #{id}</h4>
        <form on:submit|preventDefault={handleSubmit} class="needs-validation">
          <input type="hidden" value="<%$id%>" name="id" />

          <h4>Basics</h4>
          <hr />

          <div class="basicsContainer">
            <div class="row">
              <div class="col-12">
                <label for="name">View name</label>
                <input
                  bind:value={view.name}
                  name="name"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder=""
                  required
                />
              </div>

              <div class="col-6">
                <label for="background">Background</label>
                <select
                  bind:value={view.background}
                  name="background"
                  class="custom-select form-control d-block w-100"
                  id="background"
                  required
                >
                  <option value="">-</option>
                  {#each ["Black.png", "Blue Purple Gradient.png", "Carbon Fiber.png", "Galaxy.png",  "Digital Camo.png", "Flare.png", "Jellyfish.png", "Red.png"] as background}
                    <option value={background}>{background.replace(/\.png|\.jpg/, '')}</option>
                  {/each}
                </select>
              </div>

              <div class="col-6">
                <label for="theme">Theme</label>
                <select
                  bind:value={theme}
                  name="theme"
                  class="form-control d-block w-100"
                  id="theme"
                  required
                >
                  {#each themes as theme}
                    <option value={theme}>{theme}</option>
                  {/each}
                </select>
              </div>

              <div class="col-12">
                <label for="theme">Vehicle Parameters</label>
                <div class="input-group">
                  {#each Array(3) as _, i}
                    <div class="col-4 pl-1 pr-1">
                      <div class="col-12">
                        <select
                          use:pidChange
                          name="gauge-{i}"
                          bind:value={view.gauges[i].pid}
                          class="mb-2 form-control"
                          id="pid-{i}"
                        >
                          <option value="">-</option>
                          {#each pids as pid}
                            <option value={pid}>
                              {KE_PID[pid].shortDesc
                                ? KE_PID[pid].shortDesc
                                : "Undefined"}
                            </option>
                          {/each}
                        </select>
                      </div>

                      <!-- Units for PID -->
                      <div class="col-12">
                        <select
                          name="units"
                          on:blur={(e) =>
                            view.gauges[i] ? view.gauges[i].unit = e.target.value : view.gauges[i] = { 'unit': e.target.value } }
                          value={view.gauges[i].unit}
                          class="form-control"
                        />
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input
                id="dynamicMinMax"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Show default min/max values or show dynamic values based on observed min max"
                class="form-check-input"
                type="checkbox"
                bind:checked={view.dynamicMinMax}
              />
              <label class="form-check-label" for="dynamicMinMax">
                Observed Min/Max
              </label>
            </div>
          </div>

          <!-- END BASICS -->

          <br />
          <br />
          <h4>Alerts</h4>
          <p>
            Configure custom alerts to appear when a specific parameter
            threshold is met.
          </p>
          <hr />

          <div class="alertsContainer">
            {#each view.alerts as alert, i}
              <div class="alertContainer">
                <div class="input-group">
                  <div class="col-sm-6 col-12 pl-1 pr-1">
                    <label class="label" for="alertMessage">Message</label>
                    <input
                      required
                      bind:value={alert.message}
                      class="value form-control"
                      type="text"
                      name="alertMessage"
                    />
                  </div>

                  <div class="col-sm-3 col-12 pl-1 pr-1">
                    <label class="label" for="alertValue">Value</label>
                    <input
                      required
                      bind:value={alert.value}
                      class="form-control"
                      type="number"
                      name="alertValue"
                    />
                  </div>

                  <div class="col-sm-3 col-12 pl-1 pr-1">
                    <label for="alertOP">Operand</label>
                    <select
                      required
                      bind:value={alert.op}
                      name="alertOP"
                      class="form-control"
                    >
                      <option value="">-</option>
                      {#each ["=", ">", "<", ">=", "<="] as op}
                        <option value={op}>
                          {op}
                        </option>
                      {/each}
                    </select>
                  </div>

                  <div class="col-sm-6 col-12 pl-1 pr-1">
                    <label class="label" for="alertPID">Parameter</label>

                    <select
                      use:pidChange
                      value={alert.pid}
                      name="alert-{i}"
                      class="value form-control pl-1 pr-1"
                      id="alertPID"
                      required
                    >
                      <option value="">-</option>
                      {#each pids as pid}
                        <option value={pid}>
                          {pid
                            ? KE_PID[pid].shortDesc
                              ? KE_PID[pid].shortDesc
                              : "Undefined"
                            : ""}
                        </option>
                      {/each}
                    </select>
                  </div>

                  <div class="col-sm-3 col-12 pl-1 pr-1">
                    <label class="label" for="alertUnit">Unit</label>
                    <select
                      name="units"
                      on:blur={(e) => (alert.unit = e.target.value)}
                      value={alert.unit}
                      class="form-control value"
                      required><option>-</option></select
                    >
                  </div>

                  <div class="col-sm-3 col-12 pl-1 pr-1">
                    <label class="label" for="alertPriority"
                      >Priority <i>(Lower equals higher priority)</i></label
                    >
                    <input
                      required
                      bind:value={alert.priority}
                      class="value form-control"
                      type="number"
                      name="alertPriority"
                    />
                  </div>
                </div>

                <div class="mt-2 text-center">
                  <button
                    on:click={() => {
                      removeAlert(i);
                    }}
                    class="form-control delete"
                    type="button">Delete</button
                  >
                </div>
              </div>
            {/each}

            <div class="col-sm-12 col-auto">
              <button class="form-control" on:click={() => addAlert()}
                >New alert</button
              >
            </div>
          </div>
          <!-- END ALERTS -->

          <br />
          <br />
          <h4>Dynamic</h4>
          <p>Configure when <i>this</i> view should be enabled.</p>
          <hr />

          <div class="dynamicContainer">
            <div class="row">
              <div class="col-sm-3 col-12">
                <svelte:component
                  this={Slider}
                  callback={toggleDynamic}
                  callbackArgs={null}
                  checked={view.dynamic.enabled}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3 col-12">
                <label for="dynamicPID">Parameter</label>

                <select
                  use:pidChange
                  bind:value={view.dynamic.pid}
                  disabled={!view.dynamic.enabled}
                  name="dynamic-{0}"
                  class="form-control"
                  id="dynamicPID"
                  required
                >
                  <option value="">-</option>
                  {#each pids as pid}
                    <option value={pid}>
                      {KE_PID[pid].shortDesc
                        ? KE_PID[pid].shortDesc
                        : "Undefined"}
                    </option>
                  {/each}
                </select>
              </div>

              <div class="col-sm-3 col-12">
                <label class="label" for="dynamicUnit">Unit</label>
                <select
                  name="units"
                  on:blur={(e) => (view.dynamic.unit = e.target.value)}
                  disabled={!view.dynamic.enabled}
                  value={view.dynamic.unit}
                  class="form-control value"
                  required><option>-</option></select
                >
              </div>

              <div class="col-sm-3 col-12">
                <label for="dynamicValue">Value</label>
                <input
                  required
                  bind:value={view.dynamic.value}
                  disabled={!view.dynamic.enabled}
                  class="form-control"
                  type="number"
                  name="dynamicValue"
                />
              </div>

              <div class="col-sm-3 col-12">
                <label for="dynamicOP">Operand</label>
                <select
                  required
                  bind:value={view.dynamic.op}
                  name="dynamicOP"
                  disabled={!view.dynamic.enabled}
                  class="form-control"
                >
                  <option value="">-</option>
                  {#each ["=", ">", "<", ">=", "<="] as op}
                    <option value={op}>
                      {op}
                    </option>
                  {/each}
                </select>
              </div>

              <div class="col-sm-3 col-12">
                <label for="dynamicPriority"
                  >Priority <i>(Lower equals higher priority)</i></label
                >
                <input
                  required
                  bind:value={view.dynamic.priority}
                  disabled={!view.dynamic.enabled}
                  class="form-control"
                  type="number"
                  name="dynamicPriority"
                />
              </div>
            </div>
          </div>

          <hr class="mb-4" />
          <button
            class="btn btn-primary btn-lg btn-block btn-full-width"
            type="submit">Update</button
          >
          <br />
          <br />
        </form>
      </div>
    </div>
  {/if}
</div>

<style>
  .basicsContainer {
    /* padding: 5px;
    border:turquoise;
    border-width: 2px;
    border-style: solid; */
  }

  .alertsContainer {
    /* padding: 5px;
    border:rgb(101, 145, 140);
    border-width: 2px;
    border-style: solid; */
  }

  .alertContainer {
    padding: 5px;
    margin: 5px;
    border-radius: 0.5em;
    border: grey;
    border-width: 1px;
    border-style: solid;
  }

  .dynamicContainer {
    /* padding: 5px;
    border:rgb(104, 232, 104);
    border-width: 2px;
    border-style: solid; */
  }

  .delete {
    background-color: rgb(220, 176, 176);
  }

  .btn-full-width {
    width: 100%;
  }
</style>
