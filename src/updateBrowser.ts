/* eslint-disable no-sequences */
import { get } from 'svelte/store';
import getDirContent from './getDirContent';
import * as icon from './icon';
import { directory } from './stores';

function update(err: Function, cb?: Function): void {
  getDirContent(get(directory), (contents: string[]) => {
    let directoryContent: icon.FileItem[];

    // eslint-disable-next-line no-unused-expressions
    contents.forEach((file) => {
      const isFolder = file.endsWith('/');

      directoryContent = [
        ...directoryContent,
        {
          name: file,
          isFolder,
          iconPath: icon.resolve(file),
        },
      ];
      if (cb) cb();
    }),
    (e: string) => {
      err(e);
    };
  });
}

export default update;
