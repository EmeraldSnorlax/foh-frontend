import { mdiText, mdiFolder, mdiFileQuestion, mdiFileVideo, mdiFileImage } from '@mdi/js';

export interface FileItem {
  name: string;
  isFolder: boolean;
  iconPath: string;
}

export function resolve(fileName: string): string {
  if (fileName.endsWith('/')) {
    return mdiFolder;
  }

  let extension: string[] | string = fileName.match(/\.[^.]+$/i) ?? ['unknown'];
  [extension] = extension;
  switch (extension) {
    case '.txt':
      return mdiText;
    case '.mkv':
    case '.mp4':
    case '.avi':
    case '.mov':
    case '.webm':
      return mdiFileVideo;
    case '.png':
    case '.jpeg':
    case '.jpg':
    case '.gif':
      return mdiFileImage;
    default:
      return mdiFileQuestion;
  }
}
