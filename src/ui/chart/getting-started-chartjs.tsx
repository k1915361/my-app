import Chart from 'chart.js/auto'
import { onMount, onCleanup } from 'solid-js';

export default function GettingStartedChart() {
    let canvas;
    onMount(() => {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        new Chart(
            canvas,
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count)
                        }
                    ]
                }
            }
        );
    });

    return <div>
        <title>Chart.js example</title>
        <div style="width: 97%;"><canvas ref={canvas} id="acquisitions"></canvas></div>
        <script type="module" src="./acquisitions.js"></script>
    </div>
}