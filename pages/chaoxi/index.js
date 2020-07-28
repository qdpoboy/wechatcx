//index.js
//获取应用实例
import * as echarts from '../../ec-canvas/echarts';
const app = getApp()
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    },
    yAxis: {
      name: '高度/cm',
      type: 'value'
    },
    series: [{
      data: [310, 270, 220, 150, 110, 100, 140, 210, 310, 350, 400, 380, 370, 330, 280, 190, 130, 100, 120, 160, 210, 310, 360, 370, 380],
      itemStyle: {
        color: '#3FA7DC'
      },
      type: 'line',
      lineStyle: {
        color: '#3FA7DC'
      },
      smooth: true,
      areaStyle: {
        color: '#3FA7DC'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    }
  }
});
