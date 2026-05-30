const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        const expression = display.value;
        const result = eval(expression);

        display.value = result;

        const li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;

        historyList.prepend(li);
    }
    catch{
        display.value = "Error";
    }
}

function clearHistory(){
    historyList.innerHTML = "";
}

// Keyboard Support
document.addEventListener("keydown", function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        appendValue(key);
    }
    else if(key === "Enter"){
        calculate();
    }
    else if(key === "Backspace"){
        deleteLast();
    }
    else if(key === "Escape"){
        clearDisplay();
    }
});