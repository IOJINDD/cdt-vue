import {
  Message,
  Confirm
} from 'element-ui'

export function prototypeJS () {
  /**
   * 给 Date添加 时间格式方法
   * @param {string} format
   * 用法 new Date(input).format('yyyy年MM月dd日')
   */
  Date.prototype.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1, // month
      'd+': this.getDate(), // day
      'h+': this.getHours(), // hour
      'm+': this.getMinutes(), // minute
      's+': this.getSeconds(), // second
      'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
      'S': this.getMilliseconds() // millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o)
      {if (new RegExp('(' + k + ')').test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))}
    return format
  }

  /**
   * 给 Function 添加 检测状态码
   * @param {string} res
   * @param {Function} callBack
   *
    用法：Function.CheckCode(res, () => {
        })
   */
  Function.prototype.CheckCode = function (res, callBack) {
    if (res && res.code == 200) {
      Message({
        message: res.msg || '操作成功',
        type: 'success'
      })
      callBack()
    } else {
      Message({
        message: res.msg,
        type: 'error'
      })
    }
  }
}
