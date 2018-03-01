import {
  manage
} from '../url.config'

export default {
  postCheck: data => axios.post(manage+'postCheck', data),
  getCheckStatus: data => axios.post(manage+'getCheck', data),
  updateActivityInfo: data => axios.post(manage+'updateActivityInfo', data),
  getActivityInfo: data => axios.post(manage+'getActivityInfo', data),
  getUserList: data => axios.post(manage+'getUserList', data),
  getTixianInfo: data => axios.post(manage+'getAllTixianInfo', data),
  tixianAudit: data => axios.post(manage+'tixianAudit', data),
}
