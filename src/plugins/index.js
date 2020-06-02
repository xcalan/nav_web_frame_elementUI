/* 公共资源配置文件 */

import Vue from 'vue';

// 导入ElementsUI 配置文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入echarts 配置文件 @ -> src
import Echarts from '@/components/echarts'
Vue.use(Echarts)