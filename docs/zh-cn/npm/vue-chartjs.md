# vue-chartjs

[![NPM](https://nodei.co/npm/vue-chartjs.png?downloads=true&stars=true)](https://nodei.co/npm/vue-chartjs/)

[vue-chartjs](https://vue-chartjs.org/)  Easy and beautiful charts with Chart.js and Vue.js

[安装](https://vue-chartjs.org/zh-cn/guide/#介绍)

`yarn add vue-chartjs chart.js`

## [Chart.js](https://www.chartjs.org/) 

Simple yet flexible JavaScript charting for designers & developers | [Samples](https://www.chartjs.org/samples/latest/)

[Legend Configuration](https://www.chartjs.org/docs/latest/configuration/legend.html)  
[Tooltip Configuration](https://www.chartjs.org/docs/latest/configuration/tooltip.html)  

## LineExample.js

Updating Charts [LineChart.js](https://vue-chartjs.org/guide/#updating-charts)
Chart.js does not provide a live update if you change the datasets. However, vue-chartjs provides two mixins to achieve this. `reactiveProp`  

Most of the time you will use `reactiveProp`. It extends the logic of your chart component and automatically creates a prop named `chartData` and adds a vue watch on this prop. On data change, it will either call `update()` if only the data inside the datasets has changed or `renderChart()` if new datasets were added.  

```js
import { Line, mixins  } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(
      this.chartData, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false, //this will remove all the x-axis grid lines
            },
          ],
          yAxes: [
            {
              display: false, //this will remove all the y-axis grid lines
            },
          ]
        },
        tooltips: {
          displayColors: false
        }
      }
    )
  }
}
```

```html
<div class="Chart" >
  <line-example :chart-data="chartData(datacollection.VT)" :options="options" :width="100" :height="50" />
  <line-example :chart-data="chartData(datacollection.VTI)" :options="options" :width="100" :height="50" />
</div>
```

```js
import LineExample from '@/components/LineExample'
import axios from 'axios'

export default {
  name: 'Example',
  components: {
    LineExample,
  },
  data() {
    return {
      datacollection: {},
      options: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    chartData(etf) {
      return {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: '#fff',
            data: etf,
          },
        ],
      }
    },
    fillData (res) {
      this.datacollection = res.data.data
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ]
        },
        tooltips: {
          displayColors: false
        }
      }
    },
    getData() {
      const api = process.env.NODE_ENV === 'production' ? 'https://node-etfs-api.herokuapp.com/api/etfs' : 'https://node-etfs-api.herokuapp.com/api/etfs';
      axios.get(api).then(this.fillData)
    }
  }
}
```


[Chart.js v2 hide dataset labels](https://stackoverflow.com/questions/37204298/chart-js-v2-hide-dataset-labels)