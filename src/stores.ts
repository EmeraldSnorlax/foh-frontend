/* eslint-disable import/prefer-default-export */
import { writable } from 'svelte/store';

export const gridStyle = {
  container: 'dark:text-white md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 md:m-4',
  entry: 'p-4 md:border-0 md:text-center md:rounded-lg border-b-2 h-full flex items-center dark:bg-gray-800 border-gray-600 text-center justify-start w-full hover:bg-green-50 bg-gray-200 transition-all hover:shadow-md',
};

export const listStyle = {
  container: 'dark:text-white',
  entry: 'justify-start p-4 border-b-2 h-full flex items-center dark:bg-gray-800 border-gray-600 text-center w-full hover:bg-green-50 bg-gray-200 transition-all hover:shadow-md',
};

export const directory = writable([] as string[]);
export const view = writable({
  mode: 'grid',
  style: gridStyle,
});
