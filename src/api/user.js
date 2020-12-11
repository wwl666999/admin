import request from '../utils/request';

export function login(data) {
    return request({
      url: '../components/page/Login.vue',
      method: 'get',
      params: data
    })
  }