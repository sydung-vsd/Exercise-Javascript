"use strict";
var $ = function(id){
    return document.getElementById(id);
}

var processEntries = function(){
    var number = $("number").value;

    if(isNaN(number) || number<2){
        $("number").nextElementSibling.firstChild.nodeValue = 'Please enter an integer greater than or equal to 2';
        return;
    }
    else {
        $("number").nextElementSibling.firstChild.nodeValue = '';
    }
    getPrimeNumber(number);
}

var checkPrime = function(n){
    if(n!==2 && n%2==0){
        return false;
    }
    for(var i=3; i <= Math.sqrt(n);i+=2){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

var getPrimeNumber = function(n){
    var count = 0;
    var prNumber = '';
    for(var j=2;j<=n;j++){
        if(checkPrime(j)){
            count++;
            prNumber += j +' ';
        }
    }
    $("count").value = count;
    $("prnumber").value = prNumber;

}

window.onload = function(){
    $('calculate').onclick = processEntries;
    $('number').focus();
}