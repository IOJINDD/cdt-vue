  /**
   * 存储localStorage
   */
  export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }

  /**
   * 获取localStorage
   */
  export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name)
  }

  /**
   * 移除localStorage
   */
  export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name)
  }

  /**
   * 删除数组某个元素
   * @param {Array} arr
   * @param {Function} func
   * 用法 :
   *   removeArray(arr, n => n != id)
   *   arr是操作的数组，id是要删除的元素，返回最新的数组
   */
  export const removeArray = (arr, func) => {
    return Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1)
      return acc.concat(val)
    }, []) : []
  }

  /**
   * 数组包含
   * @param {Array} a
   * @param {Array} b
   */
  export const isIncludes = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x)).length == b.length
  }

  /**
   * 获取当前时间
   */
  export const getCurrentTime = () => {
    let now = new Date()
    let year = now.getFullYear() //年
    let month = now.getMonth() + 1 //月
    let day = now.getDate() //日
    let hh = now.getHours() //时
    let mm = now.getMinutes() //分
    let ss = now.getSeconds() //分
    let clock = year + '-'
    if (month < 10)
      clock += '0'
    clock += month + '-'
    if (day < 10)
      clock += '0'
    clock += day + ' '
    if (hh < 10)
      clock += '0'
    clock += hh + ':'
    if (mm < 10) clock += '0'
    clock += mm + ':'
    if (ss < 10) clock += '0'
    clock += ss
    return (clock)
  }

  /**
   * 深度克隆对象
   * @param {Object} obj
   */
  export const deepClone = (obj) => {
    var _tmp, result
    _tmp = JSON.stringify(obj)
    result = JSON.parse(_tmp)
    return result
  }

  /**
   * 树形数据转换
   * @param {*} data
   * @param {*} id
   * @param {*} pid
   */
  export function treeDataTranslate(data, id = 'id', pid = 'parentId') {
    var res = []
    var temp = {}
    for (var i = 0; i < data.length; i++) {
      temp[data[i][id]] = data[i]
    }
    for (var k = 0; k < data.length; k++) {
      if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
        if (!temp[data[k][pid]]['children']) {
          temp[data[k][pid]]['children'] = []
        }
        if (!temp[data[k][pid]]['_level']) {
          temp[data[k][pid]]['_level'] = 1
        }
        data[k]['_level'] = temp[data[k][pid]]._level + 1
        temp[data[k][pid]]['children'].push(data[k])
      } else {
        res.push(data[k])
      }
    }
    return res
  }

  /**
   * 下载excel
   * @param {*} str
   * @param {*} title  标题
   */
  export const tableToExcel = (str, title) => {

    //encodeURIComponent解决中文乱码
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)

    //通过创建a标签实现
    var link = document.createElement("a")
    link.href = uri;

    //对下载的文件命名
    link.download = `${title}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }