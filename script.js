//logic to compute the rate of interest
function compute(){
    //alert("it works"); /*test to confirm function works upon clicking compute intrest button */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear()+parseInt(years);
    //check if principal amount not less than 0 or Zero
    if (principal <= 0){
        alert("Enter a positive number");
        exit();
        }
    
    // console.log(interest,year); /* output value of the variables to console to check*/
    // construct the text for innerHTML for span with id "results"
   document.getElementById("result").innerHTML= "If you deposit "+"<span class='highlight'>"+principal+"</span>"+",\<br\> at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%.\<br\> You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",\<br\> in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>";
   // reference - https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript 
  
}
    // update the rate of interest value for the input type range in the innerHTML for span with id "rate_val"
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}

