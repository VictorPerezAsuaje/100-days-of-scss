const alignMe = document.getElementById('canvas');
const showCode = document.getElementById('css-code');

function ReAlign(element){
    switch(element.id){
        case 'controller__top-left':
            alignMe.style.alignItems = "flex-start";
            alignMe.style.justifyContent="left";
            break;
        case 'controller__top-center':
            alignMe.style.alignItems = "flex-start";
            alignMe.style.justifyContent="center";
            break;
        case 'controller__top-right':
            alignMe.style.alignItems = "flex-start";
            alignMe.style.justifyContent="flex-end";
            break;
        case 'controller__center-left':
            alignMe.style.alignItems = "center";
            alignMe.style.justifyContent="left";
            break;
        case 'controller__center-center':
            alignMe.style.alignItems = "center";
            alignMe.style.justifyContent="center";
            break;
        case 'controller__center-right':
            alignMe.style.alignItems = "center";
            alignMe.style.justifyContent="flex-end";
            break;
        case 'controller__bottom-left':
            alignMe.style.alignItems = "flex-end";
            alignMe.style.justifyContent="left";
            break;
        case 'controller__bottom-center':
            alignMe.style.alignItems = "flex-end";
            alignMe.style.justifyContent="center";
            break;
        case 'controller__bottom-right':
            alignMe.style.alignItems = "flex-end";
            alignMe.style.justifyContent="flex-end";
            break;
    }

    console.log(alignMe.style);
    showCode.innerHTML = `.your-style {
        <br>
        &nbsp;&nbsp; display: flex; 
        <br>
        &nbsp;&nbsp; ${alignMe.style[0]}: ${alignMe.style[alignMe.style[0]]}; 
        <br>
        &nbsp;&nbsp; ${alignMe.style[1]}: ${alignMe.style[alignMe.style[1]]}; <br>
    }`
}

