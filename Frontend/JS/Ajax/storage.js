const storage = window.localStorage;

const set = (key, value)=>{
  storage.setItem(key, JSON.stringify(value));
}

const get = (key)=>{
  return storage.getItem(JSON.parse(key));
}

const remove = ()=>{
  storage.removeItem(key);
}

const clear = ()=>{
  storage.clear();
}

export{
  set, get, remove, clear
}