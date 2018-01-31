<template>
  <div class="Home">
    <el-container>
      <el-header height="80px">小程序后台管理系统</el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#188DB6"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-row>
            <el-switch
              @change="switchHandle"
              v-model="value"
              active-text="小程序审核中"
              inactive-text="小程序运行中">
            </el-switch>
          </el-row>
          <el-row>
            <el-button type="primary" @click="showActivity" class="activity">设置活动弹窗信息</el-button>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <ActivityDialog :dialogData="dialogData" v-if='dialogData.dialogVisible'></ActivityDialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ActivityDialog from './modules/ActivityDialog'

  export default {
    components: {
      ActivityDialog
    },
    data () {
      return {
        value:false,
        dialogData: {
          dialogVisible:false
        }
      }
    },
    computed: {
      ...mapGetters([
        'getCheckStatus'
      ]),
    },
    watch: {
      getCheckStatus () {
        if (this.getCheckStatus.tagShow == '1') {
          this.value = false;
        }else {
          this.value = true;
        }
      }
    },
    mounted () {
      this.$store.dispatch('getCheckStatus');
      this.$store.dispatch('getActivityInfo');
      eventHub.$on('dialogHide', () => {
        this.dialogData.dialogVisible = false;
      });
    },
    methods:{
      switchHandle (e) {
        if (e) {
          this.$store.dispatch('postCheck',{'tagShow':'2'})
        }else {
          this.$store.dispatch('postCheck',{'tagShow':'1'})
        }
      },
      showActivity () {
        this.dialogData.dialogVisible = true;
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .Home {
    height: 100%;
    .el-header, .el-footer {
      background-color: #015B7D;
      color: #fff;
      text-align: center;
      line-height:80px;
      font-size: 24px;
    }
    .el-aside {
      background-color: #188DB6;
    }
    .el-container {
      height: 100%;
    }
    .activity {
      margin-top: 50px;
    }
  }
</style>
