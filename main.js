let numeroIngresado = Number(prompt("Ingrese un numero"));
alert ("Usted ha escogido la tabla del " + numeroIngresado + ", a continuacion la vera detallada por consola (presione F12 para visualizar)");
let i=1;  // El indice i hace referencia al numero por el cual se ira multiplicando en cada ciclo del for al numero ingresado.
console.log("Tabla del " + numeroIngresado + ":");

while(numeroIngresado>0){

       for(i;i<=10;i++)   {
              console.log(numeroIngresado + "*" + i +"="+ numeroIngresado*i );


             
       }

  numeroIngresado = 0;   
                        }


if(numeroIngresado==0){
       console.log("Todo numero multiplicado por 0 devuelve el mismo valor nulo,presione F5 e ingrese otro valor")
                     }

console.log("Proceso terminado");