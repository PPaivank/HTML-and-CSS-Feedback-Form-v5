
function ratio(form, value) {
   var ratioValue = document.getElementById('ratio'+value).value

   if(form == 1){
       var div = document.getElementById('result33')
    div.innerText = ratioValue + "/10"
   }

    if(form == 2){
        var div = document.getElementById('result34')
    div.innerText = ratioValue + "/10"
    }
    if(form == 3){
        var div = document.getElementById('result35')
     div.innerText = ratioValue + "/10"
    }
    if(form == 4){
        var div = document.getElementById('result36')
     div.innerText = ratioValue + "/10"
    }
    if(form == 5){
        var div = document.getElementById('result37')
     div.innerText = ratioValue + "/10"
    }
    if(form == 6){
        var div = document.getElementById('result38')
     div.innerText = ratioValue + "/10"
    }
    if(form == 7){
        var div = document.getElementById('result39')
     div.innerText = ratioValue + "/10"
    }
   
}
