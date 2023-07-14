const store = require("./store");


store.subscribe(()=>{
    console.log("订阅",store.getState())
})


const nameAction = { type: "change_name", name: "why" };
store.dispatch(nameAction);


const countAction = { type: "change_counter", counter: 110 };

store.dispatch(countAction);