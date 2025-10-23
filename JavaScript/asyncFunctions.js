
setTimeout(()=> console.log("Hello Student"), 1000);
setTimeout(()=> console.log("Welcome to JavaScript"), 2000);
setTimeout(()=> console.log("Let's learn setTimeout"), 3000)

var a = setInterval(() => {
    if (count >= 0) {
        console.log(count--);
    }
    else {
        clearInterval(a);
    }
}, 1000)

function wash(dry) {

    setTimeout(() => {
        console.log("Washed!🫧");
        dry();
    }, 7000);
}

function dry(iron) {

    setTimeout(() => {
            console.log("Dried!🥼");
            iron();
        },
        5000);
}

function iron() {
    setTimeout(() =>
        console.log("Ironed!👔"), 3000);
}


wash(() => {
    dry(() => {
        iron();
    });
});



function order(accept) {

    setTimeout(() => {
        console.log("Food Ordered!🍛");
        accept();
    }, 5000);
}

function accept(prepare) {

    setTimeout(() => {
            console.log("Order Accepted!🧾");
            prepare();
        },
        2000);
}

function prepare(deliver) {
    setTimeout(() =>{
        console.log("Food Prepared!🍱");
        deliver();
    }
        , 10000);
        
}

function deliver() {
    setTimeout(() =>{
        console.log("Delivered!🍽")}
        , 7000);
    
}

order(() => {
    accept(() => {
        prepare(()=>{
            deliver();
        })
    });
});



let newPromise = new Promise((resolve, reject) => {
    reject("Promise is rejected");
})

console.log(newPromise);

newPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

let num = 10;
let myPromise = new Promise((resolve, reject) => {
  if(num%2 == 0){
    resolve("Even Number");
  }  
  else{
    reject("Odd Number");
  }
})

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})



// function order(){
//     return new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         console.log("Food Ordered! 🧾");
//         resolve();
//         },5000)
//     })
// }

// function prepare(){
//     return new Promise((resolve , reject) => {
//       setTimeout(()=>{
//         console.log("Food Prepared! 🍱")
//         reject();
//       },2000)
//     })
// }

// function deliver(){
//     return new Promise((resolve , reject) => {
//       setTimeout(()=>{
//         console.log("Food Delivered! 🍽️");
//         resolve();
//       },3000)
//     })
// }


// order().then(()=> prepare()).then(()=> deliver()).catch((e)=> console.log("ERROR!👾"));