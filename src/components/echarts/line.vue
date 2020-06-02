<template>
  <div ref="chart" :style="{width,height}"></div>
</template>

<script>

export default {
  props:{
      width:{
          type: String,
          default:'500px'
      },
      height:{
          type: String,
          default:'300px'
      },
      data:{
          type:Array,
          required:true
      },
      options:{
          required:true
      }
  },
  mounted() {
    
    let series1 = this.options.keys.map(r=>{
        return {
            name:r.label,
            type:"line",
            data:this.data.map(rr=>rr[r.val])
        }
    })

    let option = {
      title: {
        text: this.options.title
      },
      tooltip: {},
      xAxis: {
        data: this.data.map(r => r.date),
        axisLabel:{
          rotate:30,
          fontSize:10
        }
      },
      yAxis: {},
      // color: ["blue","red"],
      // series: [
      //   {
      //     name: "收入",
      //     type: "line",
      //     // data: [5, 20, 36, 10, 10, 20]
      //     data: this.data.map(r => r.shouru)
      //   },
      //   {
      //     name: "支出",
      //     type: "line",
      //     // data: [5, 20, 36, 10, 10, 20]
      //     data: this.data.map(r => r.zhichu)
      //   }
      // ],
      series: series1

    };

    this.initChart(this.$refs.chart, option, e => {
      console.log(e);
    });
  }
};
</script>
<style scoped>
</style>
