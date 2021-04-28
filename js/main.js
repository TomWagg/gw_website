
let scatter_points = {
    x: [1e2, 1e10, 64.27e4],
    y: ["Broekgaarden (2021)", "Broekgaarden (2021)", "Broekgaarden (2021)"],
    text: ["Model A", "Model B", "Model C"],
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 15,
    },
};

let data = [scatter_points];

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
}

Plotly.newPlot('merger_rate', data, layout);