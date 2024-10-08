//Variáveis
let nome = "Calvin";
let experiencia = 20000 ;
let nivel = "";

//Estrutura de decisão
if (experiencia <= 1000){ 
  nivel="Ferro";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 1001 && experiencia <=2000){
  nivel="Bronze";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 2001 && experiencia <=5000){
  nivel="Prata";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 5001 && experiencia <=7000){
  nivel="Ouro";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 7001 && experiencia <=8000){
  nivel="Platina";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 8001 && experiencia <=9000){
  nivel="Ascendente";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if(experiencia >= 9001 && experiencia <=1000){
  nivel="Imortal";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} else if (experiencia >= 10001){
  nivel="Radiante";
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
};
 