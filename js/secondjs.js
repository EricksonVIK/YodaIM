var displayHolder = document.getElementById("display")

var displayResult = function (){
    console.log("called")
    var savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    var gifArray = JSON.parse(localStorage.getItem("gifArray")) || [];
    console.log(savedQuotes);
    console.log(gifArray);
    savedQuotes.forEach((type1, index) => {
        const type2 = gifArray[index];
        var displayBlock = document.createElement("div");
        displayBlock.classList = "holder";
        var textBlock = document.createElement("h1")
        textBlock.innerHTML=type1
        displayBlock.appendChild(textBlock)
        gifBlock=document.createElement("img")
        gifBlock.src=type2
        gifBlock.setAttribute("data-gif", type2);
        displayBlock.appendChild(gifBlock);
        console.log(type1)
        console.log(type2)
        displayHolder.appendChild(displayBlock);

    });
};
displayResult();
