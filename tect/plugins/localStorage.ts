// create a plugin to save the state of the store in the localStorage
//  and restore it when the app is loaded

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const localStore = {
      get(key: string) {
        const value = localStorage.getItem(key);
        if (value) {
          return JSON.parse(value);
        }
        return null;
      },
      set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
      },
      remove(key: string) {
        localStorage.removeItem(key);
      },
    };
    return {
      provide: {
        localStorage: localStore,
      },
    };
  }
});
