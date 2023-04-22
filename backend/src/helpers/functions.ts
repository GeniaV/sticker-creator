import fs from 'fs';
import path from 'path';

export function clearUploadsFolder() {
  const directory = 'uploads';

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${directory}`);
      return;
    }

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) {
          console.error(`Error deleting file: ${file}`);
        }
      });
    }
  });
}