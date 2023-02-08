const storagePrefix = 'auth_';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const storage = {
  getToken: () => {
    return cookie.get('auth_token');
  },
  setToken: (token: any) => {
    // window.sessionStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    cookie.remove(`${storagePrefix}token`);
    cookie.set(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.sessionStorage.removeItem(`${storagePrefix}token`);
    window.sessionStorage.clear();
  },
};

export default storage;
