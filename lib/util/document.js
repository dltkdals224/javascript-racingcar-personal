export const $ = selector => {
  return document.querySelector(selector) ?? false;
};
export const $$ = selector => {
  return document.querySelectorAll(selector) ?? false;
};
