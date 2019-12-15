let arr=[3,2,1,4,5,6,7];

function sumFinder(sum){

for(i=0; i <=arr.length; i++){
 for(j=0; j <= arr.length-1; j++)
    if( arr[i] + arr[j] === sum){
     return true;
}
}
return false;
}
      
console.log(sumFinder(10));

