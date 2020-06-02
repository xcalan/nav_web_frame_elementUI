<!-- Home 下方的主要区域 -->
<!-- 包括侧边栏和右侧主要区域 -->
<template>
    <div class="main_child_container">
        <el-container>
            <!-- 侧边栏 -->
            <el-aside>
              <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <el-menu-item index="/home/home1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">主页1</span>
                </el-menu-item>
                <el-menu-item index="/home/home2">
                  <i class="el-icon-document"></i>
                  <span slot="title">主页2</span>
                </el-menu-item>
                <el-menu-item index="/home/home3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">主页3</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
            <!-- 右侧主体区域 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
    }
  }
</script>

<style scoped>
  /* 导入组件公共样式文件 */
  @import '../../assets/css/main_child.css';
</style>
