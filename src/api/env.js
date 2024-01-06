const ENV = {
    DEV: 'dev'
  };
  
  const URLs = {
    [ENV.DEV]: '172.16'
  };
  
  // 移除协议的url
  const urlWithoutProtocol = location.href.substring(
    location.protocol.length + 2
  );
  
  const isEnv = env => urlWithoutProtocol.indexOf(URLs[env]) === 0;
  
  function getCurrentEnv() {
    let env = ENV.DEV;
    Object.entries(URLs).some(([_env, url]) => {
      if (urlWithoutProtocol.indexOf(url) === 0) {
        env = _env;
        return true;
      }
      return false;
    });
    return env;
  }
  
  const currentEnv = getCurrentEnv();
  
  /**
   * dev对dev
   * test, production直接对production
   */
  export const isDev = isEnv(ENV.DEV);
  // 对应环境后端接口
  const mapURLs = {
    [ENV.DEV]: '172.16.16.221:8080',
  };
  
  export const baseHost = `http://${mapURLs[currentEnv]}`;
  