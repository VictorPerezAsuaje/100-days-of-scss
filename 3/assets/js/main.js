function ChangeColor(element){
    const circles = document.querySelectorAll(".selected");
    const image = document.getElementById('shoe');

    circles.forEach(item => item.classList.remove('selected'));
    
    element.classList.add('selected');

    switch(element.id){
        case "black":
            image.src = "images/jordan-zoom-92-black-nobg.png";
            break;
        case "blue":
            image.src = "images/jordan-zoom-92-blackblue-nobg.png";
            break;
        case "red":
            image.src  = "images/jordan-zoom-92-zapatillas-blackred-nobg.png";
            break;
    }

}