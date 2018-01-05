import axios from './config'

export default {
  /* Account */
  getAccount: () => axios.get('/account'),
  getAvatar: () => axios.get('/account/avatar_image'),
  uploadAvatar: params => axios.post('/account/upload_avatar_image', params),
  modifyUserName: params => axios.put('/account/change_username', params),
  sendVerifyCode: params => axios.post('/account/send_va_code', params),
  bindEmail: params => axios.put('/account/bind_email', params),
  bindMobile: params => axios.put('/account/bind_mobile', params),
  getWechatToken: () => axios.get('/account/token'),
  checkBindWechat: () => axios.get('/account/check_weixin'),
  unbindWechat: () => axios.put('/account/unbind_weixin'),
  modifyPassword: params => axios.put('/account/change_password', params),
  getLoginInfo: (params = {}) => axios.get('/account/login', {params}),
  login: params => axios.post('/account/login', params),
  logout: () => axios.get('/account/logout'),
  sendResetCode: params => axios.post('/account/send_reset_code', params),
  resetPassword: data => axios.post('/account/reset_password', data),
  sendRegistCode: params => axios.post('/account/send_regist_mobile_code', params),
  sendEmailValidate: params => axios.post('/account/resend_regist_email_validate', params),
  regist: params => axios.post('/account/regist', params),
  /* Dashbord */
  getSiteList: () => axios.get('/dashboard'),
  getSitePv: params => axios.get('/dashboard/statistic', {params}),
  ingoreAlarm: id => axios.put('/dashboard/ingore_alarm', id),
  ingoreNotice: id => axios.post('/dashboard/ingore_notice', id),
  hiddenSite: params => axios.put('/dashboard/hidden_store', params),
  removeDomain: params => axios.post('/dashboard/domain_remove', params),
  removeManage: params => axios.put('/dashboard/remove_manage', params),
  revertDomain: params => axios.post('/dashboard/revert_domain', params)
}
