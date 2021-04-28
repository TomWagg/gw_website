window.addEventListener("load", function () {
    document.querySelectorAll(".basic-info").forEach(el => {
        el.querySelector("a").addEventListener("click", function () {
            el.parentElement.querySelector(".more-info").classList.toggle("active");
        });

    });
});


// this will eventually loop over some sort of CSV file or something
// need to work out structure and stuff

let rates = [1e2, 1e10, 64.27e4, 1e5]
let papers = ["Broekgaarden (2021)", "Broekgaarden (2021)", "Broekgaarden (2021)", "Tom"]
let models = ["Model A", "Model B", "Model C", "A tom model"]

let scatter_points = {
    x: rates,
    y: papers,
    text: models,
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 25,
    },
    hoverinfo: "x+y+text",
    hovertemplate: '%{y}, %{text}<br>Rate: %{x}<extra></extra>'
};

let data = [];

let unique_papers = [...new Set(papers)]

let min_maxes = Array(2 * unique_papers.length).fill(0.0);
let min_max_papers = Array(2 * unique_papers.length)

let mins = [];
let maxes = [];
for (let i = 0; i < unique_papers.length; i++) {
    console.log(unique_papers[i / 2]);
    mask = papers.map(item => item == unique_papers[i])
    matching_rates = rates.filter((item, j) => mask[j])

    let x = [0, 0];
    if (matching_rates.length == 1) {
        x[0] = matching_rates[0];
        x[1] = matching_rates[0];
    } else {
        x[0] = Math.min(...matching_rates);
        x[1] = Math.max(...matching_rates);
    }

    let ranges = {
        x: x,
        y: [unique_papers[i], unique_papers[i]],
        mode: 'lines',
        type: 'scatter',
        hoverinfo: 'none',
        line: {
            width: 10,
        }
    }
    data.push(ranges);
}
data.push(scatter_points)

let layout = {
    xaxis: {
        type: 'log',
        autorange: true,
        showgrid: true,
        exponentformat: 'power',
        title: 'Local black hole merger rate',
    },
    margin: {
        l: 150
    },
    shapes: [
        // 1st highlight during Feb 4 - Feb 6
        {
            type: 'rect',
            xref: 'x',
            x0: 2e5,
            x1: 5e7,
            yref: 'paper',
            y0: 0,
            y1: 1,
            fillcolor: '#d3d3d3',
            opacity: 0.3,
            line: {
                width: 0
            },
            layer: 'below',
        },
    ],
    hovermode: 'closest',
    showlegend: false,
}

Plotly.newPlot('merger_rate', data, layout, {
    displayModeBar: false,
    responsive: true,
});