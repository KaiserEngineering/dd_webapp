import { writable } from 'svelte/store';

export let config        = writable( {} );
export let constants     = writable( {} );
export let notifications = writable( [] );

export async function getConstants() {
    const res  = await fetch('http://localhost/api/constants');
    const cons = await res.json();

    constants.set(cons);
}

export async function getConfig() {
    const res = await fetch('http://localhost/api/config');
    const conf = await res.json();

    config.set(conf.views);
}

export async function UpdateConfig(current_view, config, id) {
    current_view['id'] = id;
    const res  = await fetch('http://localhost/api/update',
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(current_view)
        }
    );
    const conf = await res.json();

    config.set(conf.config.views);

    return conf.message;
}

export async function UpdateEnable( id ) {
  const res  = await fetch('http://localhost/api/enable',
      {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: id
      }
  );
  const conf = await res.json();
  config.set(conf.config.views);

  return conf.message;
}

export async function DeleteView(id) {
  const res  = await fetch('http://localhost/api/delete',
      {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: id})
      }
  );
  const conf = await res.json();

  config.set(conf.config.views);

  return conf.message;
}
