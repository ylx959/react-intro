import * as echarts from "echarts";
import {useEffect, useRef} from "react";

const Barchart = ({title}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 保證dom可用，才渲染圖表

    const myChart = echarts.init(chartRef.current);
    // 指定圖表的配置項和資料
    const option = {
      title: {
        text: title
      },
      tooltip: {},
      legend: {
        data: ['满意度']
      },
      xAxis: {
        data: ['vue', 'react', 'angular']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [36, 10, 15]
        }
      ]
    };

    // 使用剛指定的配置項和資料顯示圖表。
    option && myChart.setOption(option);
  }, []);
  return (
      <div ref={chartRef} style={{width: '500px', height: '400px'}}></div>
  )
}

export default Barchart
