//写入cookie
const set = (name, value, {maxAge, domain, path, secure} = {}) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if(typeof maxAge === 'number') {
    cookieText += `; max-age=${encodeURIComponent(maxAge)}`;
  }

  if(domain) {
    cookieText += `; domain=${domain}`;
  }

  if(path) {
    cookieText += `; path=${path}`;
  }

  if(secure) {
    cookieText += `; secure`;
  }

  document.cookie = cookieText;
};

//通过name获取cookie的值
const get = name => {
  name = encodeURIComponent(name);
  const cookies = document.cookie.split('; ');

  for(const item of cookies) {
    const [key, value] = item.split('=');
    if(key === name) {
      return decodeURIComponent(value);
    }
  }
  return;
}

//根据name、domain和path删除Cookie
const remove = (name, {domain, path}={}) => {
  set(name, '', {domain, path, maxAge: -1});
}


export {
  set,
  get,
  remove
}