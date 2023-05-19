function encriptar(){
    let texto = document.querySelector(".texto").value;
    texto = texto.toLowerCase();
    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    document.querySelector(".resultado").value = texto;
    document.querySelector(".texto").focus();
    

    let resultado = document.querySelector(".resultado");
    let descripcion = document.querySelector(".descripcion");
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let borrar = document.querySelector(".boton-borrar");
    if(texto === ""){
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
        imagen.style.backgroundImage = "none";
        copiar.style.display = "flex";
        borrar.style.display = "inline-block";
        resultado.style.height = `${resultado.scrollHeight}px`;

    }
}

function desencriptar(){
    let texto = document.querySelector(".texto").value;
    texto = texto.toLowerCase();
    texto = texto.replaceAll("enter","e");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ufat","u");
    document.querySelector(".resultado").value = texto;
    document.querySelector(".texto").focus();
    
    let resultado = document.querySelector(".resultado");   
    let descripcion = document.querySelector(".descripcion");
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let borrar = document.querySelector(".boton-borrar");
    if(texto === ""){
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
        imagen.style.backgroundImage = "none";
        copiar.style.display = "flex";
        borrar.style.display = "inline-block";
        resultado.style.height = `${resultado.scrollHeight}px`;
    }
}

function borrar(){
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let descripcion = document.querySelector(".descripcion");
    let borrar = document.querySelector(".boton-borrar");
    document.querySelector(".texto").value = "";
    document.querySelector(".resultado").value = "";
    imagen.removeAttribute("style");
    copiar.style.display = "none";
    descripcion.style.display = "block";
    borrar.style.display = "none";
    document.querySelector(".texto").focus();
}

function copiar(){
    let texto = document.querySelector(".resultado").value;
    
    navigator.clipboard.writeText(texto)
        .then(() => {
        document.querySelector(".check").value = "Copiado ✓";
        setTimeout(() => {
            document.querySelector(".check").value = "";
          }, 2000);
    })
        .catch(err => {
        console.log("Error al copiar", err);
    });
}