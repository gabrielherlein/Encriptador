function encriptar(){
    let texto = document.querySelector(".texto").value;
    texto = texto.toLowerCase();
    texto = texto.replaceAll("é", "e");
    texto = texto.replaceAll("í", "i");
    texto = texto.replaceAll("á", "a");
    texto = texto.replaceAll("ó", "o");
    texto = texto.replaceAll("ú", "u");
    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    document.querySelector(".resultado").value = texto;
    document.querySelector(".texto").focus();

    let placeholder = document.querySelector(".texto");
    let resultado = document.querySelector(".resultado");
    let descripcion = document.querySelector(".descripcion");
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let borrar = document.querySelector(".boton-borrar");
    
    if(texto === ""){
        descripcion.style.display = "block";
        placeholder.placeholder = "Por favor, ingrese un texto para encriptar";
        copiar.style.display = "none";
        imagen.style.backgroundImage = "";
        borrar.style.visibility = "hidden";
    } else {
        descripcion.style.display = "none";
        imagen.style.backgroundImage = "none";
        copiar.style.display = "flex";
        borrar.style.visibility = "visible";
        resultado.style.height = `${resultado.scrollHeight}px`;
        placeholder.placeholder = "Ingrese un texto aquí";
    }
}

function desencriptar(){
    let texto = document.querySelector(".texto").value;
    texto = texto.toLowerCase();
    texto = texto.replaceAll("é", "e");
    texto = texto.replaceAll("í", "i");
    texto = texto.replaceAll("á", "a");
    texto = texto.replaceAll("ó", "o");
    texto = texto.replaceAll("ú", "u");
    texto = texto.replaceAll("enter","e");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ufat","u");
    document.querySelector(".resultado").value = texto;
    document.querySelector(".texto").focus();
    
    let placeholder = document.querySelector(".texto");
    let resultado = document.querySelector(".resultado");   
    let descripcion = document.querySelector(".descripcion");
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let borrar = document.querySelector(".boton-borrar");
    
    if(texto === ""){
        descripcion.style.display = "block";
        placeholder.placeholder = "Por favor, ingrese un texto para desencriptar";
        copiar.style.display = "none";
        imagen.style.backgroundImage = "";
        borrar.style.visibility = "hidden";
    } else {
        descripcion.style.display = "none";
        imagen.style.backgroundImage = "none";
        copiar.style.display = "flex";
        borrar.style.visibility = "visible";
        resultado.style.height = `${resultado.scrollHeight}px`;
        placeholder.placeholder = "Ingrese un texto aquí";
    }
}

function borrar(){
    let imagen = document.querySelector(".resultado");
    let copiar = document.querySelector(".copiar");
    let descripcion = document.querySelector(".descripcion");
    let borrar = document.querySelector(".boton-borrar");
    
    document.querySelector(".texto").value = "";
    document.querySelector(".texto").placeholder = "Ingrese un texto aquí";
    document.querySelector(".resultado").value = "";
    imagen.removeAttribute("style");
    copiar.style.display = "none";
    descripcion.style.display = "block";
    borrar.style.visibility = "hidden";
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