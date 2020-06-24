function parse(qs) {
    var questionString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {};
    for (var i = 0; i < chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = parts[1];
        result[key] = value;
    }
    return result;
}



function parse2(qs) {
    var questionString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {};
    for (var i = 0; i < chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    }
    return result;
}

function parse3(qs) {
    const questionString = qs.substr(1);
    const chunks = qs.split('&');
    const result = {};
    chunks.forEach((chunk) => {
        const parts = chunk.split('=');
        const key = parts[0];
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    })
    return result;
}

function parse4(qs) {
    const questionString = qs.substr(1);
    const chunks = qs.split('&');
    const result = {};
    chunks.forEach((chunk) => {
        const [key, value] = chunk.split('=');
        result[key] = value;
    })
    return result;
}

function parse5(qs) {
    const questionString = qs.substr(1);
    const chunks = qs.split('&');
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split('=');
        return { key : key, value : value};
    });
    return result;
}

function sum(numbers){
    return numbers.reduce((total, num) => total + num, 0);
}


function parse6(qs){
    const questionString = qs.substr(1);
    const chunks = qs.split('&');
    return chunks
        .map((chunk) => {
            const [key, value] = chunk.split('=')
            return {key, value};
        }).reduce((result, item) =>{
            result[item.key] = item.value
            return result
        }, {});
}



