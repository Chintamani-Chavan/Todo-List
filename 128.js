const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // event capturing
// child.addEventListener("click", ()=>{
//     console.log("captured on child");
// }, true);

// parent.addEventListener("click", ()=>{
//     console.log("captured on parent");
// }, true);

// grandparent.addEventListener("click", ()=>{
//     console.log("captured on grandparent");
// }, true);
// document.body.addEventListener("click", ()=>{
//     console.log("captured on document.body");
// }, true);

// //  event bubbling are below 
// child.addEventListener("click", ()=>{
//     console.log("You clicked on child");
// });

// parent.addEventListener("click", ()=>{
//     console.log("You clicked on parent");
// });

// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked on grandparent");
// });
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked on document.body");
// });

// event delegation
grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
})







