const textarea = document.getElementById("textarea");
const contador = document.getElementById("contador");
const numMax = document.getElementById("max");
const maximo = 250;

textarea.addEventListener("input", function() {

    let cantidad = textarea.value.length;

    contador.textContent = cantidad;

    if (cantidad === maximo) {
        textarea.classList.add('limite-alcanzado');
        contador.classList.add('limite');
        numMax.classList.add('max');
    } else {
        textarea.classList.remove('limite-alcanzado');
        contador.classList.remove('limite');
        numMax.classList.remove('max');
    }

    

});
