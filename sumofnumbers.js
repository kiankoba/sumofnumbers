function sumFor(data){
  let total = 0;
  for (let next of data){
    total += next;
  }
  return total;
}

function sumWhile(data) {
  let total = 0;
  while (data.length > 0) {
    total += data.pop();
  }
  return total;
}

function sumRecursion(data){
  if (data.length === 0)
   return 0;
  else {
    return data[0] + sumRecursion(data.slice(1, data.length));
  }
}

function sumTheSimpleWay(data){
  return _.reduce(data, function a(memo, num){return memo + num;}, 0);
}

let myList = [1, 2, 3, 4, 5]; //total = 15
console.log(sumFor(myList));
console.log(sumWhile(myList));
myList = [1, 2, 3, 4, 5]; //pop was killing the array...
console.log(sumRecursion(myList));
console.log(sumTheSimpleWay(myList));