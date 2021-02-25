function ChangeColor(element){
    const circles = document.querySelectorAll(".selected");
    const image = document.getElementById('shoe');

    for(i = 0; i<circles.length;i++){
        circles[i].classList.remove('selected');
    }
    
    element.classList.add('selected');
    if(element.id == "black"){
        image.src = "images/jordan-zoom-92-black-nobg.png";
    }
    else if(element.id == "blue"){
        image.src = "images/jordan-zoom-92-blackblue-nobg.png";
    }
    else{
        image.src  = "images/jordan-zoom-92-zapatillas-blackred-nobg.png";
    }


}