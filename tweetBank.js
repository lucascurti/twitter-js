const _ = require('lodash');

var data = [
  { name: 'Meli', content: 'Este es un tweet', id: 0 },
  { name: 'Meli', content: 'Este es otro tweet mas largo', id: 1 }
];

function add(name, content) {
  var newTweet = { name: name, content: content, id: data.length };
  data.push(newTweet);
  return newTweet;
}
function list() {
  return _.cloneDeep(data);
}
function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}
module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getFakeName = function() {
  const fakeFirsts = [
    'Nimit',
    'David',
    'Shanna',
    'Emily',
    'Scott',
    'Karen',
    'Ben',
    'Dan',
    'Ashi',
    'Kate',
    'Omri',
    'Gabriel',
    'Joe',
    'Geoff'
  ];
  const fakeLasts = [
    'Hashington',
    'Stackson',
    'McQueue',
    'OLogn',
    'Ternary',
    'Claujure',
    'Dunderproto',
    'Binder',
    'Docsreader',
    'Ecma'
  ];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};
const getFakeTweet = function() {
  const awesome_adj = [
    'awesome',
    'breathtaking',
    'amazing',
    'funny',
    'sweet',
    'cool',
    'wonderful',
    'mindblowing',
    'impressive'
  ];
  return (
    'Fullstack Academy is ' +
    randArrayEl(awesome_adj) +
    '! The instructors are just so ' +
    randArrayEl(awesome_adj) +
    '. #fullstacklove #codedreams'
  );
};
for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}

// console.log(data);

// console.log(
//   find(function(element) {
//     return element.name === 'Meli';
//   })
// );
