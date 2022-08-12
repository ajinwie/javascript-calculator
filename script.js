// this function clear all the values 
function clearscreen ()
 {
    document.getElementById("result").value="";

}
//this function display values
function display(value)
{
    document.getElementById("result").value+=value;
}
// this function evelautes the expression and returns  //
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value=q;
}
    
 