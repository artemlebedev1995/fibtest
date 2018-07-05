let n = parseFloat(prompt('Choose your number'));
function fib(n) {

let fibPrev = 1,
     fibPrePrev = 1;
let fibNext;
for(let i = 2; i <=n; i++) {
     let fibNext = fibPrev + fibPrePrev;
                 fibPrePrev = fibPrev;
                 fibPrev = fibNext;
                  
   }
                  return fibPrev;
}
alert( fib(2) );
alert( fib(4) );
alert( fib(8) ); 

 