import { build } from 'vite';
import fs from 'fs';

(async () => {
  try {
    await build();
    fs.writeFileSync('build_output.txt', 'SUCCESS');
  } catch (e) {
    fs.writeFileSync('build_output.txt', e.message + '\n\n' + JSON.stringify(e.errors, null, 2));
  }
})();
