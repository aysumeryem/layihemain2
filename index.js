let azGray = document.querySelector('.direction-gray'); 
let azBlack = document.querySelector('.direction-black'); 
azGray.addEventListener("mouseover", () => {
    azGray.classList.toggle('dis-none'); 
    azBlack.classList.toggle('dis-none'); 
});
azGray.addEventListener("mouseout", () => {
    azGray.classList.toggle('dis-none'); 
    azBlack.classList.toggle('dis-none');
}); 


let xGray = document.querySelector('.delete-gray'); 
let xPurple = document.querySelector('.delete-purple'); 
xGray.addEventListener("mouseover", () => {
    xGray.classList.toggle('dis-none'); 
    xPurple.classList.toggle('dis-none'); 
});
xGray.addEventListener("mouseout", () => {
    xGray.classList.toggle('dis-none'); 
    xPurple.classList.toggle('dis-none');
});
let addElement=document.querySelector('.add-main');

let addElementHover=document.querySelector(".add-main-hover");

let mainInput=document.querySelector(".main")
addElement.addEventListener("mouseover",() =>{
    addElement.classList.toggle("dis-none");
    addElementHover.classList.toggle("dis-none");
})

addElement.addEventListener("mouseout",() =>{
    addElement.classList.toggle("dis-none");
    addElementHover.classList.toggle("dis-none");
})

let hoverText=document.querySelector(".add-hover-text");
let hoverPlus=document.querySelector(".add-hover-plus");

let list = document.querySelector('input')
xPurple.addEventListener('click',()=>{
    list.value = "";
}) 




let listElement = document.querySelector('.list')
let addButton = document.querySelector('.add');
function numbers () {
    const numbers = document.querySelectorAll ('.number')
    numbers.forEach((number,index) => {
        number.textContent = (index + 1) + '.'
    })
}
hoverPlus.addEventListener("click",() =>{
    mainInput.classList.remove("dis-none")
})

hoverText.addEventListener('click', () => {
    if (list.value.trim() === "") {
        return;
    } else {
        mainInput.classList.add("dis-none")
        listElement.classList.remove("dis-none");
        let blockElements = document.createElement('div');
        blockElements.classList.add('block-element');
        let blockNumberText = document.createElement("div");
        let numberBlock = document.createElement('div');
        let text = document.createElement('p');
        blockNumberText.classList.add("number-text");
        listElement.append(blockElements)
        blockElements.append(blockNumberText);
        blockNumberText.append(numberBlock);
        blockNumberText.append(text);
        numberBlock.classList.add('number');
        text.classList.add('text');
        text.textContent = list.value;
        let imgBlock = document.createElement('div');
        let imgGray = document.createElement('img');
        let imgPurple = document.createElement('img');
        blockElements.append(imgBlock);
        imgBlock.append(imgGray);
        imgBlock.append(imgPurple);
        imgGray.src = "./Frame-(5).svg";
        imgPurple.src = "./Frame-(6).svg";

        imgBlock.classList.add('img-block');
        imgGray.classList.add('img-gray');
        imgPurple.classList.add('img-purple', "dis-none");
        listElement.classList.remove('dis-none');
        numbers();

        list.value = "";

        imgGray.addEventListener("mouseover", () => {
            imgGray.classList.toggle('dis-none');
            imgPurple.classList.toggle('dis-none');
        });
        imgGray.addEventListener("mouseout", () => {
            imgGray.classList.toggle('dis-none');
            imgPurple.classList.toggle('dis-none');
        });
        imgPurple.addEventListener("click", () => {
            blockElements.remove();
            if (listElement.innerHTML === "") {
                listElement.classList.toggle("dis-none");
            }
            numbers();
        });

        function sortBlocks(location) {
            let blocks = Array.from(document.querySelectorAll(".text"));
            let texts = blocks.map(block => block.textContent);
                    texts.sort((a, b) => {
                if (location === "A-Z") {
                    return a.localeCompare(b); 
                } else {
                    return b.localeCompare(a);
                }
            });
        
            blocks.forEach((block, index) => {
                block.textContent = texts[index];
            });
        }
        
        let directionMainHover = document.querySelector(".direction-main-z-a");
        let directionMain = document.querySelector(".direction-main-a-z");
        let zaGray = document.querySelector(".direction-gray-two");
        let zaBlack = document.querySelector(".direction-black-two");
        
        zaGray.addEventListener("mouseover", () => {
            zaGray.classList.toggle('dis-none');
            zaBlack.classList.toggle('dis-none');
        });
        
        zaGray.addEventListener("mouseout", () => {
            zaGray.classList.toggle('dis-none');
            zaBlack.classList.toggle('dis-none');
        });
        
        directionMain.addEventListener("click", () => {
            sortBlocks("A-Z");
            directionMain.classList.toggle("dis-none");
            directionMainHover.classList.toggle("dis-none");
        });
        
        directionMainHover.addEventListener("click", () => {
            sortBlocks("Z-A");
            directionMain.classList.toggle("dis-none");
            directionMainHover.classList.toggle("dis-none");
        });
        
    }
});