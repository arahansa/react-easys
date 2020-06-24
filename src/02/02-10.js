

function work1(onDone){
    setTimeout(()=> onDone('작업1 완료'), 100);
}


function work2(onDone){
    setTimeout(()=> onDone('작업2 완료'), 100);
}


function work3(onDone){
    setTimeout(()=> onDone('작업3 완료'), 100);
}

function urgentWork(){
    console.log('긴급 작업');
}


const pWork1 = () => new Promise((resolve) => {
    setTimeout(()=> resolve('작업1 완료'), 100);
});

const pWork2 = () => new Promise((resolve) => {
    setTimeout(()=> resolve('작업2 완료'), 100);
});

const pWork3 = () => new Promise((resolve) => {
    setTimeout(()=> resolve('작업3 완료'), 100);
});


const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms : ' + msg1);
    return pWork2();
};

pWork1().then(nextWorkOnDone).then((msg2) => {
    console.log('done after 200ms : ', msg2);
    return pWork3();
}).then((msg3)=>{
    console.log(' done after 600 ms ' +  msg3);
});

urgentWork();



const work1and2 = () => pWork1().then((msg1) => {
    console.log('done after 100ms : '+ msg1);
    return pWork2();
});

work1and2().then((msg2)=>{
    console.log('done after 200ms :' + msg2);
    return pWork3();
}).then((msg3) => {
    console.log('done after 600 ms : '+ msg3);
});