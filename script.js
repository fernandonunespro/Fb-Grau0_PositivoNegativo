function posNeg(event) {
  event.preventDefault();
    
    var numero = document.getElementById("digite").value;
    var resultado = document.getElementById("resultado");
  
    if (numero > 0) {
      resultado.value = "O número é positivo";
    } else if (numero < 0) {
      resultado.value = "O número é negativo";
    } else {
      resultado.value = "O número é zero";
    }
  }
  