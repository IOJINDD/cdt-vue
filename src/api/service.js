import request from '@/utils/request'

// -----------------------------demo模块------------------------ //

/**
 * demo
 * @param {*} params
 */
export function demo(params) {
  return request({
    url: '/demo',
    method: 'post',
    data: params
  })
}