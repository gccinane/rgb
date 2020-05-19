let rgb = [];
let rgbValuesDisplay = [];

window.addEventListener('load', start);

function start(){
  rgb = Array.from(document.querySelectorAll('.color'))
  rgbValuesDisplay = Array.from(document.querySelectorAll('.colorValue'))
  console.log(rgbValuesDisplay[0].value)
  rgb.map(value => value.addEventListener('input', handleValue))
 
}

function handleValue(event) {
  switch(event.target.id){
    case 'red':
      rgbValuesDisplay[0].value = `${String(event.target.value)}`
      break
    case 'green':
      rgbValuesDisplay[1].value = `${String(event.target.value)}`
      break
    case 'blue':
      rgbValuesDisplay[2].value =`${String(event.target.value)}`     
      break    
    default:
      return
  }
  document.querySelector('#container').style.backgroundColor = `rgb(${rgbValuesDisplay[0].value},${rgbValuesDisplay[1].value},${rgbValuesDisplay[2].value})`
}

