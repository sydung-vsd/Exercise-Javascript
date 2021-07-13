"use strict";

var $ = function(id){
    return document.getElementById(id);
}

var getRandomNumber = function(max){
    var random;
    if(!isNaN(max)){
        random = Math.floor(Math.random()*max)+1;
    };
    return random;
};
var calculateFV = function(){
    // var investment = parseFloat($("investment").value);
    // var rate = parseFloat($("rate").value);
    // var years = parseInt($("years").value);
    var investment = getRandomNumber(50000);
    var rate = getRandomNumber(15);
    var years = getRandomNumber(50);

    $("investment").value = investment;
    $("rate").value = rate;
    $("years").value = years;
    
    var isValid = true;

    if(isNaN(investment) || investment<=0){
        $("investment").nextElementSibling.firstChild.nodeValue = "Investment must be numeric and greater than zero";
        isValid = false;
    }
    else{
        $("investment").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isNaN(rate) || rate<=0){
        $("rate").nextElementSibling.firstChild.nodeValue = "Interest rate must be numeric and greater than zero";
        isValid = false;
    }
    else{
        $("rate").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isNaN(years) || years<0){
        $("years").nextElementSibling.firstChild.nodeValue = "Years must be numeric and 0 < years";
        isValid = false;
    }
    else{
        $("years").nextElementSibling.firstChild.nodeValue = "";
    }


    var futureValue = investment;

    if(isValid==true){
    for(var i=1; i<=years; i++){
        futureValue = futureValue + (futureValue*rate*0.01);
        
        if(futureValue == "Infinity"){
            alert("Future Value = " + futureValue + "\n" + "i = " + i);
            break;
        };
    };
    $("result").value = formatFV(futureValue);
    // alert("RandomNumber = " + getRandomNumber(1000));
};
    
};

var formatFV = function(futureValue){
    var fv = futureValue.toString();
    var decimalPoint = fv.indexOf('.');
    var beforeDecimalPoint = fv.substring(0,decimalPoint);
    var afterDecimalPoint = fv.substring(decimalPoint, decimalPoint+3);
    var fmFV = '';

    while(beforeDecimalPoint.length>0){
        fmFV = beforeDecimalPoint.substring(beforeDecimalPoint.length -3) + fmFV;
        if(beforeDecimalPoint.length>3){
            fmFV = ',' + fmFV;
        }
        beforeDecimalPoint = beforeDecimalPoint.substring(0,beforeDecimalPoint.length-3);
    };
    return "$" + fmFV + afterDecimalPoint;
};

var getDate = function(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    
    if(day < 10){
        day='0'+day;
    };
    if(month<10){
        month='0'+month;
    };
    if(hours<0){
        hours='0'+hours;
    };
    if(minutes<0){
        minutes='0'+minutes;
    };
    return "Today is "+day+'/'+month+'/'+year+' at '+hours+':'+minutes;
};

window.onload = function(){
    
    $("calculate").onclick = calculateFV;
    $("today").innerText = getDate();
    $("investment").focus();
    
}