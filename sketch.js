let values = [null, 2.5, 3.3, 3.5, 3.6, 4.0, 4.9, 5.3, 5.7, 5.7, 6.1, 6.2, 6.3, 6.7];
let factorSize = 50;
let unitySize = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);

  translate(width / 4, 3 * height / 4);

  stroke(255, 255, 255, 100);
  strokeWeight(3);

  line(-width / 4, 0, 3 * width / 4, 0);
  line(0, -3 * height / 4, 0, height / 4);

  for (let i = 0; i < (3 * width / 4) / factorSize; i++) {
    line(i * factorSize, -unitySize / 2, i * factorSize, unitySize / 2);
    if (-i * factorSize >= -width / 4) {
      line(-i * factorSize, -unitySize / 2, -i * factorSize, unitySize / 2);
    }
  }

  for (let i = 0; i > -(3 * height / 4) / factorSize; i--) {
    line(-unitySize / 2, i * factorSize, unitySize / 2, i * factorSize);
    if (-i * factorSize <= height / 4) {
      line(-unitySize / 2, -i * factorSize, unitySize / 2, -i * factorSize);
    }
  }

  stroke(255);
  strokeWeight(5);

  const n = values.length - 1;
  let sx = 0;
  let sy = 0;
  let sxy = 0;
  let sx2 = 0;

  for (let i = 1; i <= n; i++) {
    point(i * factorSize, -values[i] * factorSize);
    sx += i;
    sy += values[i];
    sxy += i * values[i];
    sx2 += i * i;
  }

  const a = (n * sxy - sx * sy) / (n * sx2 - sx * sx);
  const b = (sy * sx2 - sx * sxy) / (n * sx2 - sx * sx);

  stroke(255);
  strokeWeight(2);

  line(-(width / 4), -(a * (-(width / 4) / factorSize) + b) * factorSize,
    (3 * width / 4), -(a * ((3 * width / 4) / factorSize) + b) * factorSize);
}