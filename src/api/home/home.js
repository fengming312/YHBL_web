import {
  postCheck
} from '../url.config'

export default {
  postCheck: data => axios.post(postCheck+'postCheck', data),
  getCheckStatus: data => axios.post(postCheck+'getCheck', data),
}
