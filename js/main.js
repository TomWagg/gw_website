// this will eventually loop over some sort of CSV file or something
// need to work out structure and stuff

let scatter_points = {
    x: [1e2, 1e10, 64.27e4],
    y: ["Broekgaarden (2021)", "Broekgaarden (2021)", "Broekgaarden (2021)"],
    text: ["Model A", "Model B", "Model C"],
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 25,
    },
    hoverinfo: "x+y+text",
    hovertemplate: '%{y}, %{text}<br>Rate: %{x}<extra></extra>'
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
    hovermode: 'closest'
}

Plotly.newPlot('merger_rate', data, layout, {
    displayModeBar: false,
    responsive: true,
});