let a = prompt("Enter a value");
let z = a;
let reverse = 0;
while(z > 0)
{
    var digit = z % 10;
    reverse = (reverse * 10) + digit;
    z = parseInt(z / 10);
}
alert("reverse = " + reverse);