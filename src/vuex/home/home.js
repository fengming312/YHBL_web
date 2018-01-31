import * as types from '../types'
import request from '@/api/request'
import { Message } from 'element-ui'
const state = {
  getCheckStatus:null
};

const getters = {
  getCheckStatus: state => state.getCheckStatus,
};

const actions = {
  //提交审核
  postCheck (store, data) {
    let sendData = {
      ...data
    };
    request.homeApi.postCheck(sendData).then(res => {
      if (res.data.message == 'success') {
        Message.success(res.data.data.msg);
      }
    })
  },
  getCheckStatus (store, data) {
    let sendData = {
      ...data
    };
    request.homeApi.getCheckStatus(sendData).then(res => {
      if (res.data.message == 'success') {
        console.log(res.data.data);
        store.commit(types.SUCCESS_GET_CHECK_STATUS, res.data.data);
      }
    })
  },
  updateActivityInfo (store, data) {
    let sendData = {
      ...data
    };
    request.homeApi.updateActivityInfo(sendData).then(res => {
      if (res.data.message == 'success') {
        console.log(res.data.data);
        Message.success(res.data.data.msg);
        eventHub.$emit('dialogHide');
      }
    })
  },
  getActivityInfo (store, data) {
    let sendData = {
      ...data
    };
    request.homeApi.getActivityInfo(sendData).then(res => {
      if (res.data.message == 'success') {
        console.log(res.data.data);
      }
    })
  },
};

const mutations = {
  [types.SUCCESS_GET_CHECK_STATUS](store, data) {
    store.getCheckStatus = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
