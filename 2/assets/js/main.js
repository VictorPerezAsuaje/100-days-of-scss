const switcher = document.getElementById('switch');
const modeChanger = document.getElementById('mode-changer');
let isSwitched = false;

switcher.addEventListener('click', ()=>{
    if(!isSwitched){
      switcher.classList.add('clicked');
      modeChanger.classList.add('clicked');
      switcher.style.backgroundColor = '#51e4ab';
      modeChanger.style.borderColor = '#51e4ab';

      document.getElementById('card__value-type').innerHTML = "  / year";
      
      document.getElementById('card-value').innerHTML *= 8;

      isSwitched = true;
    }
    else{
      switcher.classList.remove('clicked');
      modeChanger.classList.remove('clicked');
      switcher.style.backgroundColor = '#cfcfcf';
      modeChanger.style.borderColor = '#cfcfcf';
      document.getElementById('card__value-type').innerHTML = " / month";
      document.getElementById('card-value').innerHTML /= 8;
      isSwitched = false;
    }

  });

function ChangeValue(value){
    if(isSwitched){
        value = value*8;
    }

    document.getElementById('card-value').innerHTML = value;
    
}