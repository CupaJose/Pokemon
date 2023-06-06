var p1;
var p2;
var turno;
var prob;
const pel1=document.getElementById("mov-pel1");
const pel2=document.getElementById("mov-pel2");
function batalla(p1,p2,pokemon1,pokemon2)
{
                    mov=prompt("Movimiento que va a usar "+Entrenadores[p1].pokemones[pokemon1].nombre);
                    mov=mov.toUpperCase();
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Pikachu")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="RAYO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="AMAGO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="ATAQUE RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="IMPACTRUENO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Bulbasaur")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="PLACAJE"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="GRUÑIDO"||mov=="GRUNIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if(prob==1)
                        {
                            Entrenadores[p2].pokemones[pokemon2].ataque-=3;
                            Entrenadores[p2].pokemones[pokemon2].ataque_esp-=3;
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado 3 puntos de ataque y ataque especial a "+Entrenadores[p2].pokemones[pokemon2].nombre+"<br>";
                            Batalla.innerHTML += "El ataque de "+Entrenadores[p2].pokemones[pokemon2].nombre+" ahora es "+Entrenadores[p2].pokemones[pokemon2].ataque+"<br>";
                            Batalla.innerHTML += "El ataque especial de "+Entrenadores[p2].pokemones[pokemon2].nombre+" ahora es "+Entrenadores[p2].pokemones[pokemon2].ataque_esp+"<br><br>";
                        }
                        if(prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                    }
                    else if(mov=="DRENADORAS"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if(prob==1)
                        {
                            Dano=9;
                            Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                            Entrenadores[p1].pokemones[pokemon1].vida+=9;
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                            if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                                Entrenadores[p2].pokemones[pokemon2].vida=0;
                            Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br>";
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha recuperado "+Dano+" de vida<br>";
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" tiene "+Entrenadores[p1].pokemones[pokemon1].vida+" de vida<br><br>";
                        }
                        if(prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                    }
                    else if(mov=="LÁTIGO CEPA"||mov=="LATIGO CEPA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Squirtle")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="GIRO RÁPIDO"||mov=="GIRO RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="MORDISCO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br>";
                    }
                    else if(mov=="PISTOLA AGUA"||mov=="PISTOLA DE AGUA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="HIDROPULSO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Charmander")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="ARAÑAZO"||mov=="ARANAZO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="FURIA DRAGÓN"||mov=="FURIA DRAGON"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="CUCHILLADA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="LANZALLAMAS"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Pidgeotto")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="ATAQUE RÁPIDO"||mov=="ATAQUE RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="PLACAJE"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="VENDAVAL"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="TORNADO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[pokemon1].nombre=="Rattata")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="DOBLE FILO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="TRITURAR"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque_esp - Entrenadores[p2].pokemones[pokemon2].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="BUENA BAZA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else if(mov=="HIPERCOLMILLO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" ha usado "+Entrenadores[p1].pokemones[pokemon1].mov4.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[pokemon1].ataque - Entrenadores[p2].pokemones[pokemon2].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[pokemon1].crit - Entrenadores[p2].pokemones[pokemon2].defensa;
                        Entrenadores[p2].pokemones[pokemon2].vida=Entrenadores[p2].pokemones[pokemon2].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[pokemon1].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if(Entrenadores[p2].pokemones[pokemon2].vida<0)
                            Entrenadores[p2].pokemones[pokemon2].vida=0;
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[pokemon2].nombre+" le queda "+Entrenadores[p2].pokemones[pokemon2].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
            
}

class Pokemon{
    constructor(nombre,lvl,vida,ataque,defensa,crit,ataque_esp, defensa_esp, vel,tipo1,tipo2, mov1, mov2, mov3, mov4,numPE){
    this.nombre=nombre; //Nombre del pokémon
    this.vida=vida; //Vida del pokémon
    this.lvl=lvl; //nivel del pokémon
    this.ataque=ataque; //Ataque normal del pokémon
    this.defensa=defensa; //Defensa contra el ataque normal
    this.crit=crit; //Ataque crítico del pokemon, cuenta como ataque normal y tiene un 50% de probabilidad de activarse
    this.ataque_esp=ataque_esp; //Ataque especial del pokémon
    this.defensa_esp=defensa_esp; //Defensa contra el ataque especial
    this.vel=vel; //Velocidad del pokémon
    this.tipo1=tipo1; //Tipo del pokémon
    this.tipo2=tipo2; //Tipo secundario del pokémon en caso de que tenga
    // moviminetos del pokémon
    this.mov1=mov1;
    this.mov2=mov2;
    this.mov3=mov3;
    this.mov4=mov4;
    this.numPE=numPE; //relacion pokemon-entrenador
    }
}
class movimiento{
    constructor(nombre,potencia,probabilidad,tipo,fe){
        this.nombre=nombre; //Nombre del movimiento
        this.potencia=potencia; //Potencia del movimiento (no entiendo como funciona así que está nomas porque si)
        this.probabilidad=probabilidad; //Probabilidad de que suceda el ataque, todos tienen  50%
        this.tipo=tipo; //Tipo del ataque
        this.fe=fe; //F de ataque físico o E de ataque especial
    }
}
class Entrenador{
    constructor(nombre, region, num_medallas){
        this.nombre=nombre; //Nombre del entrenador
        this.region=region; //Región del entrenador
        this.num_medallas=num_medallas; //Medallas que tiene el entrenador
        this.pokemones=[]; //Número de pokemones del entrenador, todos empiezan con 6 pero conforme pierden batallas se va reduciendo en 1
    }
}

// Ataques Bulbasaur
let Placaje= new movimiento("Placaje",40,100/100,"Normal","Fisico"); //Hace daño normal
let Grunido= new movimiento("Gruñido",0,50/100,"Normal","Especial"); //Reduce ataque del oponente, hace daño especial
let Drenadoras= new movimiento("Drenadoras",0,50/100,"Planta","Especial"); //Roba 1/6 de la vida total del oponente y recupera esa misma cantidad, hace daño especial
let Latigo_cepa= new movimiento("Látigo cepa",45,100/100,"Planta","Fisico"); //Hace daño normal

// Ataques Pikachu
let Rayo= new movimiento("Rayo",95,50/100,"Electrico","Especial"); //Hace daño especial
let Amago= new movimiento("Amago",50,100/100,"Normal", "Fisico"); //Hace daño normal
let Ataque_rapido= new movimiento("Ataque rápido",40,100/100,"Normal","Fisico"); //Hace daño normal
let Impactrueno= new movimiento("Impactrueno",40,50/100,"Electrico", "Especial"); //Hace daño especial

// Ataques Charmander
let Aranazo=new movimiento("Arañazo",40,100/100,"Normal","Fisico"); //Hace daño normal
let Furia_dragon=new movimiento("Furia dragón",0,50/100,"Dragon","Especial"); //Onda de choque que siempre baja 40 (daño especial en este caso)
let Cuchillada=new movimiento("Cuchillada",70, 100/100,"Normal","Fisico"); //Hace daño normal
let Lanzallamas=new movimiento("Lanzallamas",95,50/100,"Fuego","Especial"); //Hace daño especial

// Ataques squirtle
let Giro_rapido=new movimiento("Giro rápido",20,100/100,"Normal","Fisico"); //Hace daño normal
let Mordisco=new movimiento("Mordisco",60,100/100,"Siniestro","Fisico"); //Hace daño normal
let Pistola_agua=new movimiento("Pistola agua",40,50/100,"Agua","Especial"); //Hace daño especial
let Hidropulso=new movimiento("Hidropulso",60,50/100,"Agua","Especial"); //Hace daño especial
// Ataques Pidgeotto
// Ataque Rápido, hace daño normal
// Placaje, hace daño normal
let Vendaval=new movimiento("Vendaval",120,50/100,"Volador","Especial"); //Hace daño especial
let Tornado=new movimiento("Tornado",40,50/100,"Volador","Especial"); //Hace daño especial

// Ataques de Rattata
let Doble_filo=new movimiento("Doble filo",120,50/100,"Normal","Especial"); //Hace daño especial
let Triturar=new movimiento("Triturar",80,50/100,"Siniestro","Especial"); //Hace daño especial
let Buena_baza=new movimiento("Buena baza",50,100/100,"Siniestro","Fisico"); //Hace daño normal
let Hipercolmillo=new movimiento("Hipercolmillo",80,100/100,"Normal","Fisico"); //Hace daño normal

var Bulbasaur= [];
var Pikachu = [];
var Charmander= [];
var Squirtle= [];
var Pidgeotto= [];
var Rattata= [];
var Entrenadores=[];

Entrenadores[0]= new Entrenador("Cupa", "Kanto", 10);
Entrenadores[1]= new Entrenador ("Fersa", "Sinnoh", 12);
Entrenadores[2]= new Entrenador ("Gabo", "Kalos", 8);

var p=[]; //arreglo en el que en cada localidad guardo el numero de pokemones de cada entrenador
var np=0; //numero de pokemones del entrenador
var poke; //variable que me servira para mostrar los pokemones en la página
var i=0; //variable que usare para mostrar la informacion de los pokemones de los entrenadores en la consola
var Entrenador_=[];
var x; //variable que me permitira mostrar la informacion de los entrenadores en la pagina

Entrenadores.forEach( (element)=>{

        p.push;
        Entrenadores[i].pokemones.forEach((element)=>{
            np++;
            console.log({element});
            p[i]=np;
        });

    Pikachu [i]= new Pokemon ("Pikachu",100,70,12,5,17,25,8,120,"Electrico", "", Rayo, Amago, Ataque_rapido, Impactrueno,i);
    Bulbasaur[i]= new Pokemon ("Bulbasaur",40,100,10,7,15,12,10,70,"Planta","Veneno", Placaje, Grunido, Drenadoras, Latigo_cepa,i);
    Charmander[i]= new Pokemon ("Charmander",65,100,10,7,15,18,13,90, "Fuego", "", Aranazo, Furia_dragon, Cuchillada, Lanzallamas,i);
    Squirtle[i]= new Pokemon ("Squirtle",54,100,10,6,13,18,9,100,"Agua","",Giro_rapido, Mordisco, Pistola_agua, Hidropulso,i);
    Pidgeotto[i]= new Pokemon ("Pidgeotto",48,100,12,7,14,18,10,115,"Volador","Normal",Ataque_rapido,Placaje,Vendaval,Tornado,i);
    Rattata[i]= new Pokemon ("Rattata",42,100,10,7,14,17,10,75,"Normal", "", Doble_filo, Triturar, Buena_baza, Hipercolmillo,i);

    Entrenadores[i].pokemones.push(Bulbasaur[i]);
    Entrenadores[i].pokemones.push(Pikachu[i]);
    Entrenadores[i].pokemones.push(Charmander[i]);
    Entrenadores[i].pokemones.push(Squirtle[i]);
    Entrenadores[i].pokemones.push(Pidgeotto[i]);
    Entrenadores[i].pokemones.push(Rattata[i]);

    
    i++;
    np=0;
});

const Batalla=document.getElementById("Batalla");
const empezar=document.getElementById("Comenzar");
const elegir_entrenadores=document.getElementById("Elegir_entrenador");
const descripcion=document.getElementById("Descripcion");
const siguienteMov=document.querySelector("#siguienteMov");

var Peleador1; //variable que recibe la respuesta del primer entrenador que va a combatir
var Peleador2; //variable que recibe la respuesta del segundo entrenador que va a combatir
var Dano; //variable en la que se va a guardar el daño que se ha hecho despues de restarle al ataque el valor de la defensa correspondiente
var preg=0; //variable que si es 1 significa que ya se ha mandado una habilidad, si es 0 aún no se ingresa
var poke1;
var poke2;

function Elegir_entrenador(){
    Peleador1=prompt("Elije al entrenador retador");
    Peleador2=prompt("Elige al entrenador retado");
    Peleador1=Peleador1.toUpperCase();
    Peleador2=Peleador2.toUpperCase();
    console.log("Entrenadores elegidos");
}
elegir_entrenadores.addEventListener("click", Elegir_entrenador);

empezar.addEventListener("click", (comenzar)=>{
    elegir_entrenadores.removeEventListener("click", Elegir_entrenador);
    console.log("Batalla iniciada");
    Batalla.innerHTML + "A";
    poke1= Math.floor(Math.random()*5);
    poke2= Math.floor(Math.random()*5);
    siguienteMov.addEventListener("click", ()=>
    {
        if((Peleador1=="CUPA" && Peleador2=="FERSA")||(Peleador1=="FERSA" && Peleador2=="CUPA"))
        {
            if(Entrenadores[0].pokemones[poke1].vel>Entrenadores[1].pokemones[poke2].vel){
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(0,1,poke1,poke2);
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(1,0,poke2,poke1);
            }
            else
            {
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(1,0,poke2,poke1);
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(0,1,poke1,poke2);
            }
            if(Entrenadores[0].pokemones[poke1].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[0].pokemones[poke1].nombre+" ha perdido todos sus puntos de vida<br>";
                Entrenadores[0].pokemones.splice(poke1,1);
                console.log(Entrenadores[0].pokemones);
            }
            if(Entrenadores[1].pokemones[poke2].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[1].pokemones[poke2].nombre+" ha perdido todos sus puntos de vida<br>";
                Entrenadores[1].pokemones.splice(poke2,1);
                console.log(Entrenadores[1].pokemones);
            }
        }
        else if((Peleador1=="CUPA" && Peleador2=="GABO")||(Peleador1=="GABO" && Peleador2=="CUPA")){
            if(Entrenadores[0].pokemones[poke1].vel>Entrenadores[2].pokemones[poke2].vel){
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[2].pokemones[poke2].vida>-1)
                    batalla(0,2,poke1,poke2);
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(2,0,poke2,poke1);
            }
            else{
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(2,0,poke2,poke1);
                if(Entrenadores[0].pokemones[poke1].vida>-1||Entrenadores[1].pokemones[poke2].vida>-1)
                    batalla(0,2,poke1,poke2);
            }
            if(Entrenadores[0].pokemones[poke1].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[0].pokemones[poke1].nombre+" ha perdido todos sus puntos de vida";
                Entrenadores[0].pokemones.splice(poke1,1);
                console.log(Entrenadores[0].pokemones);
            }
            if(Entrenadores[2].pokemones[poke2].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[2].pokemones[poke2].nombre+" ha perdido todos sus puntos de vida";
                Entrenadores[2].pokemones.splice(poke2,1);
                console.log(Entrenadores[2].pokemones);
            }
        }
        else if((Peleador1=="FERSA" && Peleador2=="GABO")||(Peleador1=="GABO" && Peleador2=="FERSA")){
            if(Entrenadores[1].pokemones[poke1].vel>Entrenadores[2].pokemones[poke2].vel){
                if(Entrenadores[1].pokemones[poke1].vida>-1||Entrenadores[2].pokemones[poke2].vida>-1)
                    batalla(1,2,poke1,poke2);
                if(Entrenadores[1].pokemones[poke1].vida>-1||Entrenadores[2].pokemones[poke2].vida>-1)
                    batalla(2,1,poke2,poke1);
            }
            else{
                if(Entrenadores[1].pokemones[poke1].vida>-1||Entrenadores[2].pokemones[poke2].vida>-1)
                    batalla(2,1,poke2,poke1);
                if(Entrenadores[1].pokemones[poke1].vida>-1||Entrenadores[2].pokemones[poke2].vida>-1)
                    batalla(1,2,poke1,poke2);
            }
            if(Entrenadores[1].pokemones[poke1].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[1].pokemones[poke1].nombre+" ha perdido todos sus puntos de vida";
                Entrenadores[1].pokemones.splice(poke1,1);
                console.log(Entrenadores[1].pokemones);
            }
            if(Entrenadores[2].pokemones[poke2].vida==0)
            {
                Batalla.innerHTML += "El pokémon "+Entrenadores[2].pokemones[poke2].nombre+" ha perdido todos sus puntos de vida";
                Entrenadores[2].pokemones.splice(poke2,1);
                console.log(Entrenadores[1].pokemones);
            }
        }
        else if (Peleador1==""&&Peleador2=="")
        {
            alert("No eligió entrenadores");
        }
        else if (Peleador1==""||Peleador2=="")
        {
            alert("Falto elegir algún entrenador");
        }
        else if((Peleador1!="FERSA"||Peleador1!="GABO"||Peleador1!="Cupa")||(Peleador2!="FERSA"||Peleador2!="GABO"||Peleador2!="Cupa"))
        {
            alert("Escribió mal el nombre de alguno de los entrenadores");
        }
    });
    elegir_entrenadores.addEventListener("click", Elegir_entrenador);

});

Entrenador_[0]=JSON.stringify(Entrenadores[0]);
Entrenador_[1]=JSON.stringify(Entrenadores[1]);
Entrenador_[2]=JSON.stringify(Entrenadores[2]);

descripcion.addEventListener("click", (evento)=>{
    console.log("Número de entrenadores "+i);
    Entrenadores.forEach((element)=>{
        console.log({element});
    })
});