// const button = document.querySelector("button");

// button.addEventListener("click", e=>{
//     console.log("clicked button")
// })


const copy =document.querySelector(".copy-me");

copy.addEventListener("copy", e=>{
    alert("content can't be copied")
})

const box =document.querySelector(".box")

box.addEventListener("mousemove", e=>{
    
   box.textContent = `X :${e.offsetX} , Y : ${e.offsetY}`
})


document.addEventListener("wheel", e=>{
    console.log(e)
})
