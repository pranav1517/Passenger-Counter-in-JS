//document.getElementById("count-el").innerText=5
let count = 0
let CountEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save-el")

function increment(){
    count += 1
    CountEl.textContent=count
    console.log(count)
}
function save(){
    console.log(count)
    let countstr = count + " - "
    SaveEl.textContent += countstr
    CountEl.textContent = 0
    count = 0
}

