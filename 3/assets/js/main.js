function ChangeColor(element){
    const circles = document.querySelectorAll(".selected");

    for(i = 0; i<circles.length;i++){
        circles[i].classList.remove('selected');
    }
    
    element.classList.add('selected');
}