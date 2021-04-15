import { domain } from './index';
import getDirectoryString from './getDirString';

export default function getDirContent(
  directory: string[],
  success: Function,
  failure: Function,
): void {
  fetch(`${domain}${getDirectoryString(directory)}`)
    .then((res) => {
      if (!res.ok) throw new Error(String(res.status));
      return (res.text());
    })
    .then((res) => {
      // We process the response into a nice array
      let contents = res.replace(/.*/, '')
        .substring(1)
        .replace(/(├── )|(└──) /g, '')
        .split('\n');
      contents.splice(contents.length - 2, 1);
      contents = contents.filter((e) => e);
      if (contents.length === 0) throw new Error('This folder is empty or doesn\'t exist, or you aren\'t allowed to view it!');
      success(contents);
    })
    .catch((err) => {
      failure(err);
    });
}
