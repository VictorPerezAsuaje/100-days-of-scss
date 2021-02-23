function ChangeValue(value){
    document.getElementById('card-value').innerHTML = "$"+ value +".00";
}

const switcher = document.getElementById('switch');
const modeChanger = document.getElementById('mode-changer');
let isSwitched = false;

switcher.addEventListener('click', ()=>{
    if(!isSwitched){
      switcher.classList.add('clicked');
      modeChanger.classList.add('clicked');
      document.getElementById('card__value-type').innerHTML = "  / year";
      isSwitched = true;
    }
    else{
      switcher.classList.remove('clicked');
      modeChanger.classList.remove('clicked');
      document.getElementById('card__value-type').innerHTML = " / month";
      isSwitched = false;
    }
  });