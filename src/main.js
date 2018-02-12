import check from './Counter'

console.log('on');
console.log('on');

check();
console.log('yeee')

if (module.hot) {
  // module.hot.accept(`./Root`, () => {
  //   render(require(`./Root`).default);
  // });
console.log(module.hot.accept)
module.hot.accept()
// module.hot.apply(options).then(outdatedModules => {
//   // outdated modules...
// }).catch(error => {
//   // catch errors
// });

// module.hot.check(autoApply).then(outdatedModules => {
//   // outdated modules...
// }).catch(error => {
//   // catch errors
// });



}


