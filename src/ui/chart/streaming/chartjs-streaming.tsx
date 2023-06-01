import { onMount } from 'solid-js';
import { Chart } from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';

Chart.register(ChartStreaming);
Chart.defaults.set('plugins.streaming', {
  duration: 20000,
});

export default function ChartJSStreaming() {
  let canvas;
  onMount(() => {
    // const canvas = document.getElementById('myChart');
    // const ctx = canvas.getContext('2d');
    const ctx = canvas.getContext("2d");
    
    const chart = new Chart(ctx, {
      options: {
        plugins: {
          streaming: {
            duration: 20000
          }
        },
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              duration: 20000
            }
          }
        }
      }
    });    
  })

  return (
    <div>
      <h1>Line chart (horizontal scroll) sample</h1>
      <canvas ref={canvas} ></canvas>
    </div>
  )
}