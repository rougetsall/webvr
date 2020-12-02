const $ = (query) => document.querySelector(query);

const sphere = $('a-sphere');
const plane = $('a-plane');
const plane = $('a-plane');

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const variation = Math.sin(Date.now() / 1000);
  const position = `0 ${1.5 + variation} -2`;
  const rotation = `-90 0 ${degrees}`;

  sphere.setAttribute('position', position);

  plane.setAttribute('rotation', rotation);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);