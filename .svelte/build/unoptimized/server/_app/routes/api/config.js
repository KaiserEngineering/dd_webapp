import { writeFile, readFile } from 'fs/promises';
import fs from 'fs';

const config_path = process.env.KEGUIHome

let configCache;
// Need to add some kind of error handling here
function readConfig() {
  return JSON.parse( fs.readFileSync( `${config_path}/etc/config.json`, function(err, data) {
    if ( err ) {
      console.log('Failed to read config file')
    }
  }));
}

export async function get() {
  if ( configCache ) {
    return configCache;
  }
  else {
    return res = await readFile(`${config_path}/etc/config.json`, 'utf8')
      .then((result) => {
        configCache = JSON.parse( result );
        return configCache;
      })
      .catch(function(error) {
        console.error( error )
        return {};
      });
  }
}

// Use this to update config
export async function post( request ) {
  const newConfig = JSON.parse( request.body );

  return res = await writeFile( `${config_path}/etc/config.json`, JSON.stringify( newConfig, null, 2 ))
  .then(() => {
    configCache = readConfig();
    return { "body" : { "ret": 1, message: "Config updated", config: configCache } };
  })
  .catch(function(error) {
    return { "body" : { "ret": 0, message: "Config failed to update: "+error, config: configCache } };
  });
}

// Right now lets use this for toggling view
export async function put( request ) {
  const id = request.body.id;

  let temp = configCache;
  temp.views[id].enabled = temp.views[id].enabled ? false : true;

  let count = 0;
  for ( key in temp.views ) {
    if ( temp.views[key].enabled ) {
      count = 1;
      break;
    }
  }

  if ( count === 0 ) {
    // Why do I need this? We obviously have some kind of object reference
    // need to look into how JS does refs.
    temp.views[id].enabled = temp.views[id].enabled ? false : true;
    return { "body": { "ret": 0, "views": configCache, message: "Need at least one enabled view" } };
  }
  else {
    return res = await writeFile( `${config_path}/etc/config.json`, JSON.stringify( temp, null, 2 ))
    .then(() => {
      configCache = readConfig();
      return { "body": { "ret": 1, "views": configCache, message: "Config updated" } };
    })
    .catch(function(error) {
      return { "body" : { "ret": 0, message: "Config failed to update", config: configCache } };
    });
  }
}
