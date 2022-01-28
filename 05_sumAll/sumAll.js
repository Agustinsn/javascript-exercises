const sumAll = function(first,second) {
    let suma=0
    let highNum=0
    let lowNum=0
    if (typeof(first)=== 'number' && typeof(second)==='number') {
    if(first < second){
        lowNum=first
        highNum=second
    }else {
        lowNum=second
        highNum=first
    }
        if(first >0 && second>0){
            while (highNum >=lowNum) {
                suma= suma+highNum
                highNum--
            }
            return suma
        }
        else{ return "ERROR"}
    }else{return "ERROR"};  
    }
    

sumAll(1,4)

// Do not edit below this line
module.exports = sumAll;
