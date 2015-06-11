/**
 * Created by tomgrant on 09/06/2015.
 */



var first = prompt ("Please enter a number");

var isItaNumber = /^[0-9]+$/.test (first);
while (first = 0 ;first <10;first++);{
if (isItaNumber===true){
    alert("Yes it is a number, The number parsed is" +  parseInt(first))}
else {
    prompt("Wrong type!! Please enter a number")
}
}
