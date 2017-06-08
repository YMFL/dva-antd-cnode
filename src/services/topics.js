import request from '../utils/request';

export async function query({tab='all',page,limit,mdrender}) {
  return request(`api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`);
}
export async function details(values) {
  return request(`api/v1/${values}`);
}
