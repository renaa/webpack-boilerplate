
// import _ from 'lodash'

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

console.log(`Running in ${process.env.NODE_ENV} mode`);

import sum from './x'
console.log(sum(2,5))