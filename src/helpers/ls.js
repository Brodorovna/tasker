export const ls = {
  set: (source, value) => {
    return localStorage.setItem(source, JSON.stringify(value));
  },
  get: (source) => {
    return JSON.parse(localStorage.getItem(source)) || [];
  },
};
