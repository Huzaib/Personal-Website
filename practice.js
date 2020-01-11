console.log('Hello World');
alert('Open At Your Own Risk');

function factorial(number)
{
if(number==0)
{
return 1;
}
if(number==1)
{
return 1;
}
else
{
return number*factorial(number-1);
}
}

console.log("Factorial is : ");
console.log(factorial(10));