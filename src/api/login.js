import Http from '@/utils/http';
// 从全局配置中拿取
const userAPI = process.env.VUE_APP_USER_URL;

//账号密码登录  实例
export const login = parameter =>
  Http.post(userAPI + 'authority/login', {
    plantform: 'pangsky',
    payload: parameter
  });
