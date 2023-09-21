// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //

// Cambiamos las rutas de la imágenes para sacar piedra papel o tijera a través del array de posibilidades
for (i = 0; i < posibilidades.length; i++) {
    document.getElementsByTagName('img')[i].src= `img/${posibilidades[i]}Jugador.png`;
}

// Creamos los eventos de piedra papel y tijera para llamar a las funciones.
document.getElementsByTagName('img')[0].addEventListener("click", piedra);
document.getElementsByTagName('img')[1].addEventListener("click", papel);
document.getElementsByTagName('img')[2].addEventListener("click", tijera);
// Deshabilitamos el botón de tirar partidas ya que de momento solo nos interesa meter el nombre y las partidas.
document.getElementsByTagName('button')[1].disabled=true;
// Declaramos las variables para poderlas ver desde fuera de las funciones.
var element=0;
var element1=0;
var element2=0;
var Nombre=0;
var nombre1=0;
var primera=0;
var segunda=1;
let partidas=0;
let partidas1=0;
let tirada=0;
let maquina=0;
let partidasJugadas=0;
let desabilitar=0;
let desabilitar1=0;

// Al elegir la piedra se se ponen las clases “noSeleccionado” en las que no son 
// piedra y “seleccionado” a la piedra para que aparezca el borde rojo. Luego se le 
// asigna tirada=0 que es lo que se va a utilizar el la función jugada.
function piedra(){
    element = document.getElementsByTagName('img')[0];
    element.classList.remove("noSeleccionado");
    element.classList.add("seleccionado");

    element1 = document.getElementsByTagName('img')[1];
    element1.classList.remove("seleccionado");
    element1.classList.add("noSeleccionado");

    element2 = document.getElementsByTagName('img')[2];
    element2.classList.remove("seleccionado");
    element2.classList.add("noSeleccionado");
    tirada=0;

}

// Igual que piedra pero cambiando el valor tirada a 1.
function papel(){
    element = document.getElementsByTagName('img')[0];
    element.classList.remove("seleccionado");
    element.classList.add("noSeleccionado");

    element1 = document.getElementsByTagName('img')[1];
    element1.classList.remove("noSeleccionado");
    element1.classList.add("seleccionado");

    element2 = document.getElementsByTagName('img')[2];
    element2.classList.add("noSeleccionado");
    element2.classList.remove("seleccionado");
    tirada=1;
}

// Igual que piedra pero cambiando el valor tirada a 2.
function tijera(){
    element = document.getElementsByTagName('img')[0];
    element.classList.remove("seleccionado");
    element.classList.add("noSeleccionado");

    element1 = document.getElementsByTagName('img')[1];
    element1.classList.remove("seleccionado");
    element1.classList.add("noSeleccionado");

    element2 = document.getElementsByTagName('img')[2];
    element2.classList.add("seleccionado");
    element2.classList.remove("noSeleccionado");
    tirada=2;
}

  

// Se pone un evento que espera a que cambie algo haciendo que se ejecute nombreJugador.
// Una vez dentro de la función nombre recoge el valor del input[0]  y nombre1 recoge el 
// input[0] de modo que pueda asignarle un fondo rojo al input si el nombre es incorrecto 
// si el nombre es correcto no se mostrara nada.

document.getElementsByTagName('input')[0].addEventListener("change", nombreJugador);
 function nombreJugador(){

    nombre=document.getElementsByTagName('input')[0].value;
   
    nombre1=document.getElementsByTagName('input')[0];
    if(isNaN(nombre[0])&&(nombre.length>3)){
   
        nombre1.classList.remove("fondoRojo");
        primera=1;
        }else{
        
         nombre1.classList.add("fondoRojo");   
         }

 }
// Se pone un evento que espera a que cambie algo haciendo que se ejecute juegos.
// Una vez dentro de la función partidas recoge el valor del input[1]  y partida1 recoge el 
// input[1] de modo que pueda asignarle un fondo rojo al input si el numero de partidas es incorrecto 
// si el numero de partidas es correcto no se mostrara nada.


 document.getElementsByTagName('input')[1].addEventListener("change", juegos);
 function juegos(){

    partida1=document.getElementsByTagName('input')[1];
    partidas=document.getElementsByTagName('input')[1].value;
    if(partidas>0){
        segunda=1;
        
        partida1.classList.remove("fondoRojo");
    }else{
        partida1.classList.add("fondoRojo"); 
        segunda=0;
    }
}

// Llegamos al filtro comprobamos que a “primera” que se le dio un uno al pasar el if del 
// nombreJugador y a “segunda” que se le dio el valor 1 al pasar juegos sean iguales lo 
// que significara que El nombre del jugador y las partidas son correctas. Entonces se 
// deshabilita el botón jugar y se habilita el botón ya. También se deshabilitan los 
// inputs del jugador y partidas. Se le asignan las partidas al total.
document.getElementsByTagName('button')[0].addEventListener("click", filtro);
function filtro(){
        if(primera==segunda){
            document.getElementsByTagName('button')[1].disabled=false;
            document.getElementsByTagName('button')[0].disabled=true;
            document.getElementById('total').innerHTML=partidas;
            desabilitar=document.getElementsByTagName('input')[0];
            desabilitar.disabled=true;
            desabilitar1=document.getElementsByTagName('input')[1];
            desabilitar1.disabled=true;

        }
 }





//  Se crea un evento para que al hacer click en el botón ¡ya! Se activa la función jugada

document.getElementsByTagName('button')[1].addEventListener("click", jugada);

function jugada(){
    // Se crean números aleatorios entre 0 y el 2.    
    maquina= Math.floor(Math.random()*3);
    // Se usan los números aleatorios para ver que escoge la maquina.
    if(maquina==0){
        document.getElementsByTagName('img')[3].src="img/piedraOrdenador.png";
        }else if(maquina==1){
            document.getElementsByTagName('img')[3].src="img/papelOrdenador.png";
        }else{
            document.getElementsByTagName('img')[3].src="img/tijeraOrdenador.png";
    }

    // Una vez que sabemos que escoge la maquina y que escoge el jugador(tirada) lo vimos antes a la hora de escoger 
    // piedra papel o tijera. Primero calculamos el empate, después cuando gana la maquina y por ultimo cuando gana 
    // el jugador. Cuando ganan pierden o empatan se añaden al historial de partidas.

     if(maquina==tirada){
        document.getElementById('historial').innerHTML+="<li>"+'Empatan'+"</li>";
        }else if((maquina>tirada)&&(maquina!=2)&&(tirada==0)||maquina==2&&tirada==1||(maquina==0)&&(tirada==2)){
            
        document.getElementById('historial').innerHTML+="<li>"+'Gana la maquina'+"</li>";
        } else{
            document.getElementById('historial').innerHTML+="<li>"+'Gana '+nombre+"</li>";
        }
        partidasJugadas++;
        document.getElementById('actual').innerHTML=partidasJugadas;
        // Se van sumando las partidas desde cero hasta llegar al valor “partidas” una vez que lleguemos y partidasJugadas sean iguales a partidas se deshabilitara el botón ¡Ya!
        if(partidasJugadas==partidas){
            document.getElementsByTagName('button')[1].disabled=true;
        }
}

    // Se crea un evento para que al pulsar el botón reset se ejecute la función reset().
    // Primero se pone la foto de la maquina a la de por defecto. Se le añade al historial el texto nueva partida. 
    // Se le da al input[1] el valor de 0 partidas. Reseteamos los id “actual” y “total” a 0 también la variable 
    // partidasJugadas. Habilitamos el botón ¡Jugar! Y deshabilitamos el botón ¡Ya!. Después habilitamos los inputs 
    // del nombre de jugador y las partidas a jugar.

document.getElementsByTagName('button')[2].addEventListener("click", reset);
function reset(){
    document.getElementsByTagName('img')[3].src="img/defecto.png";
    document.getElementById('historial').innerHTML+="<li>"+'Nueva partida'+"</li>";
    document.getElementsByTagName('input')[1].value=0;
    document.getElementById('total').innerHTML=0;
    document.getElementById('actual').innerHTML=0;
    partidasJugadas=0;
    document.getElementsByTagName('button')[0].disabled=false;
    document.getElementsByTagName('button')[1].disabled=true;
    desabilitar=document.getElementsByTagName('input')[0];
    desabilitar.disabled=false;
    desabilitar1=document.getElementsByTagName('input')[1];
    desabilitar1.disabled=false;
}




    

