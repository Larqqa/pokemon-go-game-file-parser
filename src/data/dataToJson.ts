import { fetchData } from '../utilities';
import * as fs from 'fs';
import * as path from 'path';

(async ()=>{
  const url = 'https://raw.githubusercontent.com/Furtif/POGOProtos/master/GM/v2_GAME_MASTER.json';
  fs.writeFile(
    path.join(__dirname, 'master-file.json'),
    JSON.stringify(await fetchData(url)),
    'utf8', (e)=>console.log(e)
  );
})();