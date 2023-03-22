


























const biggerButton = document.querySelector(".bigger");
const smallerButton = document.querySelector(".smaller");
const paragraph = document.querySelector(".text");

paragraph.style.fontSize = "20px";
let fontSizing = paragraph.style.fontSize;

//click to make bigger
biggerButton.addEventListener("click", function () {
    if (paragraph.style.fontSize == "30px") {
        alert("This is the max size!");
    } else {
        let currentSize = paragraph.style.fontSize.replace("px", "")
        paragraph.style.fontSize = parseInt(currentSize) + 1 + "px";
    }
    // console.log(paragraph.style.fontSize)
})

//click to make smaller
smallerButton.addEventListener("click", function () {
    if (paragraph.style.fontSize == "10px") {
        alert("This is the minimum size!");
    } else {
        let currentSize = paragraph.style.fontSize.replace("px", "")
        paragraph.style.fontSize = (parseInt(currentSize) - 1) + "px";
    }
    // console.log(paragraph.style.fontSize)
})

// let input = document.querySelector(".inputBar").value;
let inputButton1 = document.querySelector(".inputButton1")
let resultNumber = document.querySelector(".resultNumber");

function roll () {
    let input = document.querySelector(".inputBar").value;
    let result = Math.floor(Math.random() * input) + 1;
    resultNumber.innerHTML = result;
}

inputButton1.addEventListener("click", roll);