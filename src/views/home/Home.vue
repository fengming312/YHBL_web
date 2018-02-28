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
          <el-table :data="getUserList" border >
            <el-table-column prop="avatarUrl" label="头像" width="70">
              <template slot-scope="scope">
                <img :src="scope.row.avatarUrl" alt="" style="width: 50px;height: 50px;">
              </template>
            </el-table-column>
            <el-table-column prop="nickName" label="昵称"></el-table-column>
            <el-table-column prop="points" label="积分" width="80"></el-table-column>
            <el-table-column prop="money" label="余额" width="80"></el-table-column>
            <el-table-column prop="shareStatus" label="转发状态" :formatter="formatshareStatus" ></el-table-column>
            <el-table-column prop="signStatus" label="签到状态" :formatter="formatsignStatus" ></el-table-column>
            <el-table-column prop="createdAt" label="创建时间" :formatter="formattime" show-overflow-tooltip width="200"></el-table-column>
            <el-table-column prop="updatedAt" label="更新时间" :formatter="formattime" show-overflow-tooltip width="200"></el-table-column>
            <el-table-column prop="gender" label="性别" width="50" :formatter="formatgender" align="center"></el-table-column>
            <el-table-column prop="city" label="城市"></el-table-column>
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="country" label="国家"></el-table-column>
            <el-table-column prop="language" label="语言"></el-table-column>
            <el-table-column prop="openid" label="openid" show-overflow-tooltip></el-table-column>
          </el-table>
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
        value: false,
        dialogData: {
          dialogVisible: false
        }
      }
    },
    computed: {
      ...mapGetters([
        'getCheckStatus',
        'getUserList'
      ]),
    },
    watch: {
      getCheckStatus () {
        if (this.getCheckStatus.tagShow == '1') {
          this.value = false;
        } else {
          this.value = true;
        }
      }
    },
    mounted () {
      this.$store.dispatch('getCheckStatus');
      this.$store.dispatch('getActivityInfo');
      this.$store.dispatch('getUserList');
      eventHub.$on('dialogHide', () => {
        this.dialogData.dialogVisible = false;
      });
    },
    methods: {
      formattime (row) {
        if (row.createdAt) {
          return new Date(row.createdAt).toLocaleString();
        }
        if (row.updatedAt) {
          return new Date(row.updatedAt).toLocaleString();
        }
      },
      formatshareStatus (row) {
        switch (row.shareStatus) {
        case "Y":
          return "已转发";
        case "N":
          return "未转发";
        }
      },
      formatsignStatus (row) {
        switch (row.signStatus) {
        case "Y":
          return "已签到";
        case "N":
          return "未签到";
        }
      },
      formatgender (row) {
        switch (row.gender) {
        case "0":
          return "未知";
        case "1":
          return "男";
        case "2":
          return "女";
        }
      },
      switchHandle (e) {
        if (e) {
          this.$store.dispatch('postCheck', {'tagShow': '2'})
        } else {
          this.$store.dispatch('postCheck', {'tagShow': '1'})
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
      line-height: 80px;
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
