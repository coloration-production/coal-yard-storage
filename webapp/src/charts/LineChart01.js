import { Line } from 'vue-chartjs'
// Import utilities
import { formatValue } from '../utils/Utils'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartdata, {
      chartArea: {
        backgroundColor: '#fafafa',
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        },
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
          },
        }],
        xAxes: [{
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
          },
          display: false,
        }],
      },
      tooltips: {
        mode: 'nearest',
        intersect: false,
        position: 'nearest',
        caretSize: 0,
        caretPadding: 20,
        cornerRadius: 4,
        xPadding: 8,
        yPadding: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e4e4e7',
        bodyFontStyle: '500',
        bodyFontColor: '#27272a',
        displayColors: false,
        callbacks: {
          title: () => false, // Disable tooltip title
          label: (tooltipItem: any) => formatValue(tooltipItem.yLabel),
        },
      },
      hover: {
        animationDuration: 0,
        mode: 'nearest',
        intersect: false,
      },
      maintainAspectRatio: false,
    })
  },
}
