
const blah = (arr, func) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
};

function ha(el) {
    return el * 2;
}

module.exports = {
    ha, blah
};
