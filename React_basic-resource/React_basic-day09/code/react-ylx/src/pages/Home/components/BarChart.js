// 柱狀圖元件
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
// 1. 把功能程式碼都放到這個元件中
// 2. 把可變的部分抽象成prop引數

const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // 保證dom可用 才進行圖表的渲染
    // 1. 獲取渲染圖表的dom節點
    const chartDom = chartRef.current

    // 2. 圖表初始化生成圖表實例物件
    const myChart = echarts.init(chartDom)

    // 3. 準備圖表引數
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    }
    // 4. 使用圖表引數完成圖表的渲染
    option && myChart.setOption(option)

  }, [title])
  return <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart