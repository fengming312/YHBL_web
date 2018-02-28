import * as types from '../types'
import request from '@/api/request'
import { Message } from 'element-ui'
const state = {
  getCheckStatus:null,
  getUserList:null
};

const getters = {
  getCheckStatus: state => state.getCheckStatus,
  getUserList: state => state.getUserList,
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
  getUserList (store, data) {
    let sendData = {
      ...data
    };
    request.homeApi.getUserList(sendData).then(res => {
      if (res.data.message == 'success') {
        store.commit(types.SUCCESS_GET_USERLIST, res.data.data.datas);
      }
    })
  },
};

const mutations = {
  [types.SUCCESS_GET_CHECK_STATUS](store, data) {
    store.getCheckStatus = data;
  },
  [types.SUCCESS_GET_USERLIST](store, data) {
    store.getUserList = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
