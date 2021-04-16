import { exec } from 'child_process';
import util from 'util';
const execute = util.promisify(exec);

const env = process.env;
const constants_path: String = env.KEGUIHome;
let constantsCache: any;

export async function GetConstants() {
    if ( constantsCache ) {
      return constantsCache;
    }
    else {
      const { stdout, stderr } = await execute( `python3 ${constants_path}/static/constants.py`);
      if ( stderr ) {
        console.error( "Could not read constants.py" );
        return {};
      }
      else {
        constantsCache = JSON.parse( stdout );
        return constantsCache;
      }
    }
}