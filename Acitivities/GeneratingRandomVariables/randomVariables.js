// 1. Uniform distribution [0, 1)

let uniformRandom = Math.random();
console.log("Uniform [0,1):", uniformRandom);

// 2. Random Integer between two values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log("Random integer [1, 10]:", getRandomInt(1, 10));  

//3. Normal (Gaussian) distribution using Box-Muller Transform
function getNormalRandom(mean = 0, stdDev = 1) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // avoid zero
    while (v === 0) v = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdDev + mean;
  }
  
  console.log("Normal random variable (mean=0, stdDev=1):", getNormalRandom());
  

//4. Bernoulli distribution (0 or 1 with probability p)
function getBernoulli(p = 0.5) {
    return Math.random() < p ? 1 : 0;
  }
  
  console.log("Bernoulli(p=0.7):", getBernoulli(0.7));
  