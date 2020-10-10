interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  clear: (name: string) => void;
}

class LocalStorage implements IStorage {
  get = (name: string) => {
    return localStorage.getItem(name);
  };
  set = (name: string, value: string) => {
    localStorage.setItem(name, value);
  };
  clear = (name: string) => {
    localStorage.setItem(name, "");
  };
}

export default LocalStorage;
