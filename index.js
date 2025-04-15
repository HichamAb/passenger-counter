let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let increment =  function() {
    count += 1
    countEl.textContent = count
}

let save = function() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
