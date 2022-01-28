const repeatString = function(word,time) {
    let totalWord=""
    if(time>=1){
        for (let i = 0; i < time; i++) {
            totalWord= totalWord+word     
        }
        return totalWord
    }
    else if(time==0) {return ""}
    else {return "ERROR"}
};

// Do not edit below this line
module.exports = repeatString;
