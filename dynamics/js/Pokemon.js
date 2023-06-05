var p1;
var p2;
var turno;
var prob;
const pel1=document.getElementById("mov-pel1");
const pel2=document.getElementById("mov-pel2");
function batalla(p1,p2)
{
                    // if(turno==1)
                    // {
                    //     pel2.disabled= true;
                    //     pel1.ddisabled= false;
                    //     mov=pel1.value;
                    //     mov=mov.toUpperCase();
                    //     if(mov!="")
                    //     {
                    //         preg=1;
                    //     }
                    // }
                    // else if(turno==2)
                    // {
                    //     pel1.disabled= true;
                    //     pel2.disabled= false;
                    //     mov=pel2.value;
                    //     mov=mov.toUpperCase();
                    //     if(mov!="")
                    //     {
                    //         preg=1;
                    //     }
                    // }

                
                for(preg=0;preg<1;preg++)
                {
                    mov=prompt("Movimiento que va a usar "+Entrenadores[p1].pokemones[0].nombre);
                    mov=mov.toUpperCase();
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Pikachu")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="RAYO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov1.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="AMAGO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="ATAQUE RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="IMPACTRUENO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Bulbasaur")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="PLACAJE"){
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa.pokemones[0].mov1.nombre+"<br>";
                        Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="GRUÑIDO"||mov=="GRUNIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if(prob==1)
                        {
                            Entrenadores[p2].pokemones[0].ataque-=3;
                            Entrenadores[p2].pokemones[0].ataque_esp-=3;
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado 3 puntos de ataque y ataque especial a "+Entrenadores[p2].pokemones[0].nombre+"<br>";
                            Batalla.innerHTML += "El ataque de "+Entrenadores[p2].pokemones[0].nombre+" ahora es "+Entrenadores[p2].pokemones[0].ataque+"<br>";
                            Batalla.innerHTML += "El ataque especial de "+Entrenadores[p2].pokemones[0].nombre+" ahora es "+Entrenadores[p2].pokemones[0].ataque_esp+"<br><br>";
                        }
                        if(prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                    }
                    else if(mov=="DRENADORAS"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if(prob==1)
                        {
                            Dano=9;
                            Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                            Entrenadores[p1].pokemones[0].vida+=9;
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                            Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br>";
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha recuperado "+Dano+" de vida<br>";
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" tiene "+Entrenadores[p1].pokemones[0].vida+" de vida<br><br>";
                        }
                        if(prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                    }
                    else if(mov=="LÁTIGO CEPA"||mov=="LATIGO CEPA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Squirtle")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="GIRO RÁPIDO"||mov=="GIRO RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="MORDISCO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br>";
                    }
                    else if(mov=="PISTOLA AGUA"||mov=="PISTOLA DE AGUA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="HIDROPULSO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Charmander")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="ARAÑAZO"||mov=="ARANAZO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="FURIA DRAGÓN"||mov=="FURIA DRAGON"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="CUCHILLADA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="LANZALLAMAS"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Pidgeotto")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="ATAQUE RÁPIDO"||mov=="ATAQUE RAPIDO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="PLACAJE"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="VENDAVAL"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="TORNADO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                        Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
                if(Entrenadores[p1].pokemones[0].nombre=="Rattata")
                {
                    prob= Math.floor(Math.random() * (3 - 1) + 1); //Función que me servira para las probabilidades porque me devuelve 1 o 2
                    if(mov=="DOBLE FILO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov1.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="TRITURAR"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov2.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque_esp - Entrenadores[p2].pokemones[0].defensa_esp;
                        if (prob==2)
                            Dano=0;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        if (prob==1)
                            Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        if (prob==2)
                            Batalla.innerHTML += "Ataque fallido<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="BUENA BAZA"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov3.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else if(mov=="HIPERCOLMILLO"){
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" ha usado "+Entrenadores[p1].pokemones[0].mov4.nombre+"<br>";
                        if (prob==1)
                            Dano=Entrenadores[p1].pokemones[0].ataque - Entrenadores[p2].pokemones[0].defensa;
                        if (prob==2)
                            Dano=Entrenadores[p1].pokemones[0].crit - Entrenadores[p2].pokemones[0].defensa;
                        Entrenadores[p2].pokemones[0].vida=Entrenadores[p2].pokemones[0].vida-Dano;
                        Batalla.innerHTML += Entrenadores[p1].pokemones[0].nombre+" le ha bajado "+Dano+" de vida<br>";
                        Batalla.innerHTML += "A "+Entrenadores[p2].pokemones[0].nombre+" le queda "+Entrenadores[p2].pokemones[0].vida+" de vida<br><br>";
                    }
                    else{
                        alert("Movimiento inexistente para este pokemon, turno perdido");
                    }
                }
            
}

class Pokemon{
    constructor(nombre,vida,ataque,defensa,crit,ataque_esp, defensa_esp, vel,tipo1,tipo2, mov1, mov2, mov3, mov4){
    this.nombre=nombre; //Nombre del pokémon
    this.vida=vida; //Vida del pokémon
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

let Bulbasaur= new Pokemon ("Bulbasaur",100,10,7,15,12,10,70,"Planta","Veneno", Placaje, Grunido, Drenadoras, Latigo_cepa);
let Pikachu= new Pokemon ("Pikachu",100,12,5,17,25,8,120,"Electrico", "", Rayo, Amago, Ataque_rapido, Impactrueno);
let Charmander= new Pokemon ("Charmander",100,10,7,15,18,13,90, "Fuego", "", Aranazo, Furia_dragon, Cuchillada, Lanzallamas);
let Squirtle= new Pokemon ("Squirtle",100,10,6,13,18,9,100,"Agua","",Giro_rapido, Mordisco, Pistola_agua, Hidropulso);
let Pidgeotto= new Pokemon ("Pidgeotto",100,12,7,14,16,10,115,"Volador","Normal",Ataque_rapido,Placaje,Vendaval,Tornado);
let Rattata= new Pokemon ("Rattata",100,10,7,14,17,10,75,"Normal", "", Doble_filo, Triturar, Buena_baza, Hipercolmillo);
let Entrenadores=[];
Entrenadores[0]= new Entrenador("Cupa", "Kanto", 10);
Entrenadores[1]= new Entrenador ("Fersa", "Sinnoh", 12);
Entrenadores[2]= new Entrenador ("Gabo", "Kalos", 8);

//Pokemones de Cupa
Entrenadores[0].pokemones.push(Bulbasaur);
Entrenadores[0].pokemones.push(Pikachu);
Entrenadores[0].pokemones.push(Charmander);
Entrenadores[0].pokemones.push(Squirtle);
Entrenadores[0].pokemones.push(Pidgeotto);
Entrenadores[0].pokemones.push(Rattata);

//Pokemones de Fersa
Entrenadores[1].pokemones.push(Charmander);
Entrenadores[1].pokemones.push(Rattata);
Entrenadores[1].pokemones.push(Squirtle);
Entrenadores[1].pokemones.push(Bulbasaur);
Entrenadores[1].pokemones.push(Pidgeotto);
Entrenadores[1].pokemones.push(Pikachu);

//Pokemones de Gabo
Entrenadores[2].pokemones.push(Pikachu);
Entrenadores[2].pokemones.push(Squirtle);
Entrenadores[2].pokemones.push(Charmander);
Entrenadores[2].pokemones.push(Bulbasaur);
Entrenadores[2].pokemones.push(Rattata);
Entrenadores[2].pokemones.push(Pidgeotto);

const Batalla=document.getElementById("Batalla");
const empezar=document.getElementById("Comenzar");
const elegir_entrenadores=document.getElementById("Elegir_entrenador");
const descripcion=document.getElementById("Descripcion");

var Peleador1; //variable que recibe la respuesta del primer entrenador que va a combatir
var Peleador2; //variable que recibe la respuesta del segundo entrenador que va a combatir
var Dano; //variable en la que se va a guardar el daño que se ha hecho despues de restarle al ataque el valor de la defensa correspondiente
var preg=0; //variable que si es 1 significa que ya se ha mandado una habilidad, si es 0 aún no se ingresa

function Elegir_entrenador(){
    Peleador1=prompt("Elije al entrenador retador");
    Peleador2=prompt("Elige al entrenador retado");
    Peleador1=Peleador1.toUpperCase();
    Peleador2=Peleador2.toUpperCase();
    console.log("Entrenadores elegidos");
}
elegir_entrenadores.addEventListener("click", Elegir_entrenador);

empezar.addEventListener("click", ()=>{
    elegir_entrenadores.removeEventListener("click", Elegir_entrenador);
    console.log("Batalla iniciada");
    if((Peleador1=="CUPA" && Peleador2=="FERSA")||(Peleador1=="FERSA" && Peleador2=="CUPA"))
    {
        if(Entrenadores[0].pokemones[0].vel>Entrenadores[1].pokemones[0].vel){
            while(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
            {
                batalla(0,1);
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(1,0);
            }
        }
        else{
            while(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
            {
                batalla(1,0);
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(0,1);
            }

        }
        if(Entrenadores[0].pokemones[0].vida<0)
        {
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.reverse();
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.pop();
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.reverse();
            console.log(Entrenadores[0].pokemones);
        }
        if(Entrenadores[1].pokemones[0].vida<0)
        {
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.reverse();
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.pop();
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.reverse();
            console.log(Entrenadores[1].pokemones);
        }
    }
    else if((Peleador1=="CUPA" && Peleador2=="GABO")||(Peleador1=="GABO" && Peleador2=="CUPA")){
        if(Entrenadores[0].pokemones[0].vel>Entrenadores[2].pokemones[0].vel){
            while(Entrenadores[0].pokemones[0].vida>0||Entrenadores[2].pokemones[0].vida>0)
            {
                batalla(0,2);
                alert("HOLA");
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(2,0);
                    alert("Hola");
            }
        }
        else{
            while(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
            {
                batalla(2,0);
                alert("Hola");
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(0,2);
                    alert ("HOLA");
            }

        }
        if(Entrenadores[0].pokemones[0].vida<0)
        {
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.reverse();
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.pop();
            console.log(Entrenadores[0].pokemones);
            Entrenadores[0].pokemones.reverse();
            console.log(Entrenadores[0].pokemones);
        }
        if(Entrenadores[2].pokemones[0].vida<0)
        {
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.reverse();
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.pop();
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.reverse();
            console.log(Entrenadores[2].pokemones);
        }
    }
    else if((Peleador1=="FERSA" && Peleador2=="GABO")||(Peleador1=="GABO" && Peleador2=="FERSA")){
        if(Entrenadores[1].pokemones[0].vel>Entrenadores[2].pokemones[0].vel){
            while(Entrenadores[1].pokemones[0].vida>0||Entrenadores[2].pokemones[0].vida>0)
            {
                batalla(1,2);
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(2,1);
            }
        }
        else{
            while(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
            {
                batalla(2,1);
                if(Entrenadores[0].pokemones[0].vida>0||Entrenadores[1].pokemones[0].vida>0)
                    batalla(1,2);
            }

        }
        if(Entrenadores[1].pokemones[0].vida<0)
        {
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.reverse();
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.pop();
            console.log(Entrenadores[1].pokemones);
            Entrenadores[1].pokemones.reverse();
            console.log(Entrenadores[1].pokemones);
        }
        if(Entrenadores[2].pokemones[0].vida<0)
        {
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.reverse();
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.pop();
            console.log(Entrenadores[2].pokemones);
            Entrenadores[2].pokemones.reverse();
            console.log(Entrenadores[2].pokemones);
        }
    }
    else{
        alert("No eligió entrenadores");
    }
    elegir_entrenadores.addEventListener("click", Elegir_entrenador);
});

let p=[]; //arreglo en el que en cada localidad guardo el numero de pokemones de cada entrenador
let np=0; //numero de pokemones del entrenador
let poke; //variable que me servira para mostrar los pokemones en la página
let i=0; //variable que usare para mostrar la informacion de los pokemones de los entrenadores en la consola
let Entrenador_=[];
let x; //variable que me permitira mostrar la informacion de los entrenadores en la pagina
Entrenador_[0]=JSON.stringify(Entrenadores[0]);
Entrenador_[1]=JSON.stringify(Entrenadores[1]);
Entrenador_[2]=JSON.stringify(Entrenadores[2]);
descripcion.addEventListener("click", (evento)=>{
        // for(i=0;i<=3;i++)
        // {
        //     // Batalla.innerHTML += Entrenadores[i].pokemones[p]+"<br>";
        //     console.log(Entrenador_[i]);

        // }
        Entrenadores.forEach( ()=>{
            p.push;
            Entrenadores[i].pokemones.forEach(()=>{
                np++;
                // console.log({element});
                p[i]=np;
            });
            // console.log({element});
            i++;
            np=0;
        });
        console.log("Número de entrenadores "+i);
        console.log("Número de pokemones del entrenador 1 "+p[0]);
        console.log("Número de pokemones del entrenador 2 "+p[1]);
        console.log("Número de pokemones del entrenador 3 "+p[2]);
        for(x=0;x<=i;x++)
        {
            Batalla.innerHTML += Entrenadores[x].nombre+"<br>";
            Batalla.innerHTML += "Región "+Entrenadores[x].region+"<br>";
            Batalla.innerHTML += "Número de medallas "+Entrenadores[x].num_medallas+"<br>";
            Batalla.innerHTML += "Número de pokemones "+p[x]+"<br>";
            for (poke=0;poke<=p[x];poke++)
            {         
                Batalla.innerHTML += Entrenadores[x].pokemones[poke].nombre+"<br>";
                Batalla.innerHTML += "Vida "+Entrenadores[x].pokemones[poke].vida+"<br>";
                Batalla.innerHTML += "Ataque "+Entrenadores[x].pokemones[poke].ataque+"<br>";
                Batalla.innerHTML += "Defensa "+Entrenadores[x].pokemones[poke].defensa+"<br>";
                Batalla.innerHTML += "Ataque critico "+Entrenadores[x].pokemones[poke].crit+"<br>";
                Batalla.innerHTML += "Ataque especial "+Entrenadores[x].pokemones[poke].ataque_esp+"<br>";
                Batalla.innerHTML += "Defensa especial "+Entrenadores[x].pokemones[poke].defensa_esp+"<br>";
                Batalla.innerHTML += "Velocidad "+Entrenadores[x].pokemones[poke].vel+"<br>";
                Batalla.innerHTML += "Tipo "+Entrenadores[x].pokemones[poke].tipo1+"<br>";
                if(Entrenadores[x].pokemones[poke].tipo2!="")
                    Batalla.innerHTML += "Tipo secundario "+Entrenadores[x].pokemones[poke].tipo2+"<br>";
                //movimiento 1
                Batalla.innerHTML += "Movimiento 1 "+Entrenadores[x].pokemones[poke].mov1.nombre+"<br>";
                Batalla.innerHTML += "Potencia "+Entrenadores[x].pokemones[poke].mov1.potencia+"<br>";
                Batalla.innerHTML += "Probabilidad "+Entrenadores[x].pokemones[poke].mov1.probabilidad+"<br>";
                Batalla.innerHTML += "Tipo "+Entrenadores[x].pokemones[poke].mov1.tipo+"<br>";
                Batalla.innerHTML += "Físico o especial: "+Entrenadores[x].pokemones[poke].mov1.fe+"<br>";
                //movimiento 2
                Batalla.innerHTML += "Movimiento 2 "+Entrenadores[x].pokemones[poke].mov2.nombre+"<br>";
                Batalla.innerHTML += "Potencia "+Entrenadores[x].pokemones[poke].mov2.potencia+"<br>";
                Batalla.innerHTML += "Probabilidad "+Entrenadores[x].pokemones[poke].mov2.probabilidad+"<br>";
                Batalla.innerHTML += "Tipo "+Entrenadores[x].pokemones[poke].mov2.tipo+"<br>";
                Batalla.innerHTML += "Físico o especial: "+Entrenadores[x].pokemones[poke].mov2.fe+"<br>";
                //movimiento 3
                Batalla.innerHTML += "Movimiento 3 "+Entrenadores[x].pokemones[poke].mov3.nombre+"<br>";
                Batalla.innerHTML += "Potencia "+Entrenadores[x].pokemones[poke].mov3.potencia+"<br>";
                Batalla.innerHTML += "Probabilidad "+Entrenadores[x].pokemones[poke].mov3.probabilidad+"<br>";
                Batalla.innerHTML += "Tipo "+Entrenadores[x].pokemones[poke].mov3.tipo+"<br>";
                Batalla.innerHTML += "Físico o especial: "+Entrenadores[x].pokemones[poke].mov3.fe+"<br>";
                //movimiento 4
                Batalla.innerHTML += "Movimiento 4 "+Entrenadores[x].pokemones[poke].mov4.nombre+"<br>";
                Batalla.innerHTML += "Potencia "+Entrenadores[x].pokemones[poke].mov4.potencia+"<br>";
                Batalla.innerHTML += "Probabilidad "+Entrenadores[x].pokemones[poke].mov4.probabilidad+"<br>";
                Batalla.innerHTML += "Tipo "+Entrenadores[x].pokemones[poke].mov4.tipo+"<br>";
                Batalla.innerHTML += "Físico o especial: "+Entrenadores[x].pokemones[poke].mov4.fe+"<br>";
            }
            Batalla.innerHTML +="<br><br>";
            poke=0;
        }
});