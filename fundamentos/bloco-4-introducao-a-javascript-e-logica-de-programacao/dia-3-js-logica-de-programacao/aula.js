
let res = 0;

for (let i = 2; i <= 150; i+= 1) {
    if( i%3 === 0){
        res += 1;
    }
}
if(res == 50){
    console.log('secret message!');
}
console.log(res);
