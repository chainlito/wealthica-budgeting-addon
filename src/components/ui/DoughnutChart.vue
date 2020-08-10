<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  name: 'DoughtnutChart',

  props: ['data'],

  watch: {
    data: {
      handler: 'drawChart',
      deep: true,
    }
  },

  mounted() {
    this.drawChart();
  },

  methods: {
    drawChart() {
      let chartData = {
        labels: [],
        datasets: [
          {
            label: 'Aug 2020',
            data: [],
            backgroundColor: [
              "rgba(75, 192, 255, 0.3)",
              "rgba(75, 192, 255, 0.4)",
              "rgba(75, 192, 255, 0.5)",
              "rgba(75, 192, 255, 0.6)",
              "rgba(75, 192, 255, 0.7)",
              "rgba(75, 192, 255, 0.8)",
              "rgba(75, 192, 255, 0.9)",
              "rgba(75, 192, 255, 0.1)",
              "rgba(75, 192, 255, 0.2)",
            ],
          },
        ]
      };

      this.data.forEach((x) => {
        chartData.labels.push(x.category);
        chartData.datasets[0].data.push(x.amount);
      });
      
      this.renderChart(chartData, {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: '10px',
        hoverBorderWidth: '10px',
      });
    },
  },
};

</script>
