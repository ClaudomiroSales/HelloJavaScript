// Helper: generate frequency histogram
function getHistogram(data, binCount, rangeMin = 0, rangeMax = 1) {
    const bins = new Array(binCount).fill(0);
    const binSize = (rangeMax - rangeMin) / binCount;

    data.forEach(value => {
        let index = Math.floor((value - rangeMin) / binSize);
        if (index >= 0 && index < binCount) {
            bins[index]++;
        } else if (index === binCount) {
            bins[binCount - 1]++;
        }
    });

    return bins;
}

// Random Generators
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNormalRandom(mean = 0, stdDev = 1) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdDev + mean;
}

function getBernoulli(p = 0.5) {
    return Math.random() < p ? 1 : 0;
}

// Generate samples
const sampleSize = 1000;
const uniformSamples = Array.from({ length: sampleSize }, () => Math.random());
const normalSamples = Array.from({ length: sampleSize }, () => getNormalRandom());
const intSamples = Array.from({ length: sampleSize }, () => getRandomInt(1, 10));
const bernoulliSamples = Array.from({ length: sampleSize }, () => getBernoulli(0.7));

// Histograms
const uniformHist = getHistogram(uniformSamples, 10, 0, 1);
const normalHist = getHistogram(normalSamples, 20, -4, 4);
const intHist = getHistogram(intSamples, 10, 1, 11);
const bernoulliHist = getHistogram(bernoulliSamples, 2, 0, 2);

// Plotting
function plotHistogram(canvasId, bins, labels, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: bins,
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: 'Value' } },
                y: { title: { display: true, text: 'Frequency' }, beginAtZero: true }
            }
        }
    });
}

// Labels for charts
plotHistogram("uniformChart", uniformHist, [...Array(10).keys()].map(i => (i / 10).toFixed(1)), "Uniform [0,1)");
plotHistogram("normalChart", normalHist, [...Array(20).keys()].map(i => (-4 + i * 0.4).toFixed(1)), "Normal (0,1)");
plotHistogram("intChart", intHist, [...Array(10).keys()].map(i => (i + 1).toString()), "Random Integers [1,10]");
plotHistogram("bernoulliChart", bernoulliHist, ["0", "1"], "Bernoulli (p=0.7)");
