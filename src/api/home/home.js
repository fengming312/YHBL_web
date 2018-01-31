import {
  postCheck
} from '../url.config'

export default {
  postCheck: data => axios.post(postCheck+'postCheck', data),
  getCheckStatus: data => axios.post(postCheck+'getCheck', data),
  updateActivityInfo: data => axios.post(postCheck+'updateActivityInfo', data),
  getActivityInfo: data => axios.post(postCheck+'getActivityInfo', data),
}
