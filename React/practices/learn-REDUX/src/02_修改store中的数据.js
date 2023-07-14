const store = require("./store");

console.log(store.getState());

const nameAction = { type: "change_name", name: "why" };
store.dispatch(nameAction);

console.log(store.getState());

const countAction = { type: "change_counter", counter: 110 };

store.dispatch(countAction);
console.log(store.getState());