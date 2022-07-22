var displayResult = function (){
    console.log("called")
    var savedQuotes = JSON.parse(localStorage.getItem("SavedQuotes")) || [];
    var gifArray = JSON.parse(localStorage.getItem("gifArray")) || [];

    savedQuotes.forEach((type1, index) => {
        const type2 = gifArray[index];
        var displayHolder = document.getElementById("display")
        var displayBlock = document.createElement("div");
        displayBlock.classList = "holder";
        displayBlock.setAttribute("data-translation", type1.type)
        console.log(type1)
        console.log(type2)
        displayBlock.setAttribute("data-gif", type2.type)
        displayHolder.appendChild(displayBlock);

    });
};
displayResult();
