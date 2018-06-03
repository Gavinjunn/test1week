function drawThreeColsBox(height){
  var polaAngka = [1,2,3] ;
  for(var i = 0; i < height; i++){
    if(i == 0){ 
    var polaAngkaPerbaris = String(polaAngka[0]) +' ' + String(polaAngka[1]) + ' ' +  String(polaAngka[2]);
    } else {    
    polaAngka[0] = polaAngka[0] + 3;
    polaAngka[1] = polaAngka[1] + 3;
    polaAngka[2] = polaAngka[2] + 3;
    var polaAngkaPerbaris = String(polaAngka[0]) +' ' + String(polaAngka[1]) + ' ' +  String(polaAngka[2]);
    }
    console.log(polaAngkaPerbaris);
  }
}

drawThreeColsBox(3);
     