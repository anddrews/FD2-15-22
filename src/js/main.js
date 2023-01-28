function average() {
  const args = [...arguments];

  return args.reduce((acc, item) => acc + item / args.length, 0) ;
}


console.log(average(1, 2, 3));

function odd(start, finish) {
  const result = [];
  const oddStart = start % 2 ? start : start + 1;

  for (let i = oddStart; i < finish; i += 2) {
      result.push(i);
  }

  return result.join(' ');
}

function reverse(str) {
  // return str.split('').reverse().join('');
  let result = '';

  for (let i = str.length - 1; i >=0 ; i--) {
    result += str[i];
  }

  return result;
}

function palindromes(str) {
  const words = str.toLowerCase().replace(/\s+/g, ' ').split(' ');  
  
  return words.reduce((acc, word) => 
    word.length > 1 && word === reverse(word) 
      ? [...acc, word]
      : acc
  , []);


}

console.log(palindromes('madam was looking on the radar for a kayak'));

function censorship(str, forbidden, symbol) {
  const regExp = new RegExp(forbidden.join('|'), 'g'); // /ship|blow|blew\sup/g
  
  // return forbidden.reduce((acc, item) => acc.replaceAll(item, symbol.repeat(item.length)), str)
  return str.replace(regExp, item => symbol.repeat(item.length));
}
console.log(censorship(
  'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)',
  ['ship', 'blow', 'blew up'],
  '+'));


  const categories = {
    15: 'Child',
    25: 'Teenager',
    65: 'Adult',
    80: 'Eldery',
    100: 'Aksakal'
  }

function getCategory(age, categories) {
  const tmp = Object.keys(categories) 
  .sort((a, b) => a - b) // [15, 25, 65, 66]
  .find(item => item > age)  

  return categories[tmp];
}


console.log(getCategory(99, categories));





