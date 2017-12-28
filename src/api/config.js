import axios from 'axios'

let instance = axios.create()
axios.defaults.timeout = 5000
instance.defaults = {
  timeout: 5000,
  baseURL: '/interface',
  proxy: {
    host: 'http://account.test.yurl.vip/interface' 
  }
}


instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })

instance.interceptors.response.use(
  res => {
    if (res.data.error_response) {
      // if (res.data.error_response.sub_code === 'error.account.not_login') {
      //   window.location.href = `/login?no_login=true&redirect_url=${window.location.href}`
      // }
      return Promise.reject(res.data.error_response)
    } else {
      return Promise.resolve(res.data.data)
    }
  },
  err => {
    return Promise.reject({
      message: '网络错误！',
      err: err
    })
  }
)

export default instance
