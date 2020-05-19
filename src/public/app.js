let rgb = [];
let rgbValuesDisplay = [];

window.addEventListener('load', start);

function start(){
  rgb = Array.from(document.querySelectorAll('.color'))
  rgbValuesDisplay = Array.from(document.querySelectorAll('.colorValues'))
  rgb.map(value => value.addEventListener('input', handleValue))
}

function handleValue(event) {
  switch(event.target.id){
    case 'red':
      rgbValuesDisplay[0] = document.querySelector('#redValue');
      rgbValuesDisplay[0].value = `${String(event.target.value)}`
      break
    case 'green':
      rgbValuesDisplay[1]= document.querySelector('#greenValue');
      rgbValuesDisplay[1].value = `${String(event.target.value)}`
      break
    case 'blue':
      rgbValuesDisplay[2] = document.querySelector('#blueValue');
      rgbValuesDisplay[2].value =`${String(event.target.value)}`     
      break    
    default:
      return
  }

  document.querySelector('.container').style.backgroundColor = `${rgbValuesDisplay[0]},${rgbValuesDisplay[0]},${rgbValuesDisplay[0]}`
}

