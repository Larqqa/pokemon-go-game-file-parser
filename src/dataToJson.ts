import * as fs from 'fs';
import { fetchData, makeFile } from './utilities';

const url = 'https://raw.githubusercontent.com/Furtif/POGOProtos/master/GM/v2_GAME_MASTER.json';

(async () => {
  if (!fs.existsSync('lib')){
    fs.mkdirSync('lib');
  }

  if (!fs.existsSync('lib/master-file')){
    makeFile(
      'lib/master-file.json',
      await fetchData(url)
    );
  }
})();