import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("pt");
export const webStore = writable("https://pt.pattern.monster");
