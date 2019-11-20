let changeColor = (event) => {
    let targetArray = Array.from(event.target.classList)
    let list = Array.from(document.querySelector('.current-brush').classList)
    document.querySelector('.current-brush').classList.replace(`${list[1]}`,`${targetArray[1]}`)
}


let element = document.querySelectorAll('.palette-color');
for(let i = 0; i<element.length; i++){
    element[i].addEventListener('click',changeColor)
}


let paint = (event)=>{
    let targetArr = Array.from(event.target.classList);
    let list = Array.from(document.querySelector('.current-brush').classList)
    event.target.classList.replace(`${targetArr[1]}`,`${list[1]}`)
}


let canvasElements = document.querySelectorAll('.square');
for(let i = 0; i<canvasElements.length; i++){
    canvasElements[i].addEventListener('click',paint);
}

