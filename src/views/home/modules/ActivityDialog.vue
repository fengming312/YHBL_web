<template>
  <div class="ActivityDialog">
    <el-dialog title="设置活动信息" :visible.sync="dialogData.dialogVisible" width="40%" >
      <el-form ref="form" :model="formData" label-width="80px" class="form">
        <el-form-item label="口令标题">
          <el-input v-model="formData.title" placeholder="请填写淘口令标题"></el-input>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-model="formData.imgUrl" placeholder="请填写图片地址"></el-input>
        </el-form-item>
        <el-form-item label="弹窗宽度">
          <el-input v-model="formData.width" placeholder="请填写弹窗宽度，单位为%"></el-input>
        </el-form-item>
        <el-form-item label="弹窗高度">
          <el-input v-model="formData.height" placeholder="请填写弹窗高度，单位为rpx"></el-input>
        </el-form-item>
        <el-form-item label="弹窗顶高">
          <el-input v-model="formData.mgt" placeholder="请填写弹窗顶高，单位为rpx"></el-input>
        </el-form-item>
        <el-form-item label="展示活动">
          <el-switch
            v-model="formData.show"
            active-text="是"
            inactive-text="否">
          </el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogData.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    props:['dialogData'],
    data () {
      return {
        formData: {
          title: '',
          imgUrl: '',
          width: null,
          height: '',
          mgt: '',
          mgl: '',
          show: false
        }
      }
    },
    methods: {
      onSubmit () {
        this.formData.mgl = -(this.formData.width) / 2;
        this.formData.width = this.formData.width + '%'
        this.formData.mgl = this.formData.mgl + '%'
        this.formData.mgt = this.formData.mgt + 'rpx'
        this.formData.height = this.formData.height + 'rpx'
        console.log(this.formData);
        this.$store.dispatch('updateActivityInfo', this.formData)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ActivityDialog {
  }
</style>
