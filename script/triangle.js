function calculateTriangleArea() {
  const trianglebaseinput = document.getElementById('triangle-base');
  const trianglebaseText = trianglebaseinput.value;
  const base = parseFloat(trianglebaseText);
  // console.log(base);

  // get height 
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeighttext = triangleHeightInput.value;
  const height = parseFloat(triangleHeighttext);
  // console.log(height);


  const area = 0.5 * base * height;
  console.log(area);

  // display triangle area 
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}