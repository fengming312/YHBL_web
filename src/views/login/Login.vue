<template>
  <div class="Login">
    <div class="login-box">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="手机号">
          <el-input v-model="formData.tel" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-btn" type="primary">登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          tel: '',
          pwd: '',
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .Login {
    background: url("../../assets/images/loginBg.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box {
      width: 400px;
      height: 200px;
      .login-btn {
        width: 80%;
        float: right;
        font-size: 16px;
      }
    }
    .el-form-item__label {
      color: #fff;
    }
  }
</style>
