var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'pink', 'white', 'brown'];
document.getElementById('color').innerHTML = '';

function colorButton() {
var i, j, k;
  for (i = colors.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = colors[i]
    colors[i] = colors[j]
    colors[j] = k
  }
  document.getElementById('color').innerHTML = colors[0];
}
