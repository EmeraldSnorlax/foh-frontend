/* eslint-disable import/prefer-default-export */
import { writable } from 'svelte/store';

export const directory = writable([] as string[]);
