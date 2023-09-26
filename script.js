var array = [];
var normal = []
var focar1 = document.getElementById("input_numero");
var focar2 = document.getElementById("input_escolher");

function mostrar() {
    var input = document.getElementById("input_numero").value;
    focar1.focus()
    if (input == "") {
        var resultado = document.getElementById("resultado");
        resultado.textContent = "";
        document.getElementById("input_numero").value = "";
    }
    else {
        normal.push(parseFloat(input))
        array.push(parseFloat(input));
        mostrarArray();
        document.getElementById("input_numero").value = ""
    }

}

function mostrarArray() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = array.join(", ");
    
}
function mostrarArrayNormal() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = normal.join(", ");
}
function posicao() {
    var input = document.getElementById("input_numero").value;
    input = parseFloat(input)
    for (let i = 0; i < array.length; i++) {
        if (input == array[i]) {
            var resultado = document.getElementById("resultado");
            resultado.textContent = `posição do ${input} igual a ${i}`;
        }
        else {
            var resultado = document.getElementById("resultado");
            resultado.textContent = "Esse numero não existe";
        }
    }
}
function excluirArray() {
    var input = document.getElementById("input_numero").value;
    input = parseFloat(input);
    focar1.focus();
    var indiceParaExcluir = array.indexOf(input);
    if (indiceParaExcluir !== -1) {
        array.splice(indiceParaExcluir, 1);
        normal.splice(indiceParaExcluir, 1);
        mostrarArray();
    } else {
        var resultado = document.getElementById("resultado");
        resultado.textContent = "Esse número não existe no array";
    }
}
function substituirArray() {
    var encontrado = false
    var input1 = document.getElementById("input_escolher").value
    input1 = parseFloat(input1)
    var input2 = document.getElementById("input_editar").value
    input2 = parseFloat(input2)
    console.log("entrei no subtituir")
    focar2.focus()
    for (var x = 0; x < array.length; x++) {
        if (input1 == array[x]) {
            array[x] = input2;
            normal[x] = input2;
            mostrarArray();
            console.log(input1)
            console.log(input2)
            console.log(array)
            encontrado = true
        }
        
        
    }
    if(!encontrado == true) {
            var resultado = document.getElementById("resultado");
            resultado.textContent = "não é possivel modificar";
        }
}

function decrescente() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = "";
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    mostrarArray();
}
function crescente() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = "";
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    mostrarArray();
}