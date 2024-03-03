function ativaLuz (el,tempo){
  $(el).addClass('active');
  setTimeout(()=>{
      $(el).removeClass('active');
  },tempo);
};

function mudarLuz(){
 setTimeout(()=>{
   ativaLuz(".luz-1",4000);
   ativaLuz("#vermelho",4000);
 },0);
 setTimeout(()=>{
   ativaLuz("luz-2",3000);
   ativaLuz("#amarelo",3000);
 },4000);
 setTimeout(()=>{
   ativaLuz(".luz-3",4000);
   ativaLuz("#verde",4000);
 },7000);
 setTimeout(()=>{
   ativaLuz("luz-2",3000);
   ativaLuz("#amarelo",3000);
 },11000);

};

setInterval(mudarLuz,15000);
