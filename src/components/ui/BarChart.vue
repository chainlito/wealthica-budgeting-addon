<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: 'BarChart',
  props: ["data"],
  watch: {
    data: {
      handler: 'drawChart',
      deep: true,
    },
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
            label: "Spendings",
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: []
          },
          {
            label: "Budget",
            backgroundColor: 'rgba(75, 75, 75, 0.3)',
            data: []
          },
        ],
      };
      
      this.data.forEach((x) => {
        chartData.labels.push(x.category);
        chartData.datasets[0].data.push(x.amount);
        chartData.datasets[1].data.push(x.max_amount);
      });

      this.renderChart(chartData, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
              stacked: false
          }],
          yAxes: [{
              stacked: false
          }],
        },
      });
    }
  }
}
</script>
