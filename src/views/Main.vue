<!-- App内的Main组件，在这里面写主体内容，避免App.vue中内容过多 -->
<!--包括顶部导航和下方主体内容-->

<template>
    <div id='main_container'>
        <el-container>
            
            <!-- 顶部导航 -->
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                    <el-menu-item index="/home">主页</el-menu-item>
                    <el-menu-item index="/create">创作</el-menu-item>
                    <el-menu-item index="/setting">设置</el-menu-item>
                </el-menu>
            </el-header>

            <!-- 主要区域 -->
            <el-main>
                <router-view></router-view>
            </el-main>
            
        </el-container>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        activeIndex: '/'+ this.$route.path.split("/")[1]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
        // let addr = this.$route.path.split("/")
        // addr = '/' + addr[1]
        // console.log(addr)
    }
  }
</script>

<style scoped>
#main_container{
    height: 100%;
}
.el-container{
    height: 100%;
}
.el-header{
    padding: 0;
}
.el-main{
  padding: 0;
  height: 100%;
}
</style>
