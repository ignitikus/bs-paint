let addDiv = (times) => {
    let counter = 0;
    while (times > counter){
        let newDiv = document.createElement('div')
        document.querySelector('.canvas').appendChild(newDiv)
        newDiv.classList.add("square", "color-2")
        counter++
    }
}

addDiv(100)

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


document.querySelector('.app').style.height = '700px'
document.querySelector('.paint').style.height = '800px'
document.querySelector('.paint').style.width = '800px'
document.querySelector('.canvas').style.width = '500px'
document.querySelector('.canvas').style.height = '500px'
document.querySelector('.canvas').style.gridTemplateColumns = 'repeat(10, 1fr)'
document.querySelector('.canvas').style.gridTemplateRows = 'repeat(10, 1fr)'
