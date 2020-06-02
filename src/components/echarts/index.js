import Line from './line'
import echarts from 'echarts'

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                initChart(container, option, event) {
                    // 基于准备好的dom，初始化echarts实例
                    // var myChart = echarts.init(this.$refs.mychart);
                    const myChart = echarts.init(container);
                    // 绘制图表
                    // option.color = ['red','blue']
                    myChart.setOption(option);
                    //添加点击事件(可选)
                    if (event) {
                        myChart.on('click', event)
                    }
                }
            }
        })

        Vue.component('v-line',Line)
    }
}


