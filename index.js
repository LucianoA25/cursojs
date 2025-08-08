function lanzarMoneda() {
    const opciones = ["cara", "cruz"];
    const resultado = opciones[Math.floor(Math.random() * opciones.length)];
    return resultado;
}

function coinFlip(){
    let jugarOtraVez = true;

    while (jugarOtraVez){
        const eleccionUsuario = prompt("Sale coinflip elegí cara o cruz").toLowerCase();
        const resultadoMoneda = lanzarMoneda();

        if (eleccionUsuario !== "cara" && eleccionUsuario !== "cruz"){
            alert(`ERROR: Sólo podés elegir cara o cruz`);
            continue;
        }

    alert(`Salio ${resultadoMoneda}!`);
    
    if (eleccionUsuario === resultadoMoneda){
        alert("Ganaste!!!");
    }else{
        alert("Perdiste!!!")
    }

    jugarOtraVez = confirm("Querés jugar otra vez?");
    }

}
coinFlip()