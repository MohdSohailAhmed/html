console.log(" printing the numbers from -10 to 19")
var counter = -10
while ( counter <= 19){
	console.log(counter);
	counter++;
}
console.log("printing the  even numbers from 10 to 40 ")
var counter = 10
while ( counter < 41){
	console.log(counter);
	counter+=2;
}
console.log("prining the odd numbers from 300 to 333")
var counter = 300
while ( counter <= 333){
	if( counter % 2 !==0 ){
		console.log(counter)
	}
	counter+=1;
}
console.log("prining all numbers divisible by 3 and 5 between 5 to  50 ")
var counter = 5
while ( counter <= 50){
	if( counter % 3 ==0 && counter % 5 ==0){
		console.log(counter)
	}
	counter+=1;
}
// For loop Examples
console.log(" printing the numbers from -10 to 19")
for ( i = -10; i <=19; i++) {
 	console.log(i);
 }
 console.log("printing the  even numbers from 10 to 40 ")
 for (i = 10; i <= 40; i+=2){
     console.log(i);

 }
 
 console.log("prining the odd numbers from 300 to 333")
 
for (i=300; i <= 333; i++){
	 if(i % 2!==0){
	 	    console.log(i);

	 }
}

 