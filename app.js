// https://calculator.swiftutors.com/central-angle-of-a-circle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const centralAngleRadio = document.getElementById('centralAngleRadio');
const arcLengthRadio = document.getElementById('arcLengthRadio');
const radiusRadio = document.getElementById('radiusRadio');

let centralAngle;
let arcLength = v1;
let radius = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

centralAngleRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Arc Length';
  variable2.textContent = '(r) Radius';
  arcLength = v1;
  radius = v2;
  result.textContent = '';
});

arcLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(Θ) Central Angle (Rad)';
  variable2.textContent = '(r) Radius';
  centralAngle = v1;
  radius = v2;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = '(Θ) Central Angle (Rad)';
  variable2.textContent = '(s) Arc Length';
  centralAngle = v1;
  arcLength = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(centralAngleRadio.checked)
    result.textContent = `Central Angle = ${computeCentralAngle().toFixed(2)} Rad`;

  else if(arcLengthRadio.checked)
    result.textContent = `Arc Length = ${computeArcLength().toFixed(2)}`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(2)}`;
})

// calculation

function computeCentralAngle() {
  return Number(arcLength.value) / Number(radius.value);
}

function computeArcLength() {
  return Number(centralAngle.value) * Number(radius.value);
}

function computeRadius() {
  return Number(arcLength.value) / Number(centralAngle.value);
}