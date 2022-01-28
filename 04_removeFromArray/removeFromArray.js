const removeFromArray = function(a,...arr) {
    arr.forEach(e => {
        if (a.includes(e)){
            position=a.indexOf(e)
            a.splice(position,1)
        }
    });
    return a
}

// Do not edit below this line
module.exports = removeFromArray;
