    function calcularEdad (edad){
        if(edad >= 18){
            alert("La edad ingresada es mayor de edad");
        }else{
            alert("La edad ingresada es menor de edad");
        }
    }

    
    
    function notificarNota (nota){
        if(nota >= 0 && nota <=3){
            alert(`Su nota ${nota} es insuficiente`);
        }
        else if (nota >= 3 && nota <= 5){
            alert(`Su nota ${nota} es insuficiente`);
        } else if (nota == 5 || nota == 6){
            alert('Su nota ${nota} es suficiente');
        }  else if (nota >= 7 && nota <= 9){
            alert('Su nota ${nota} es notable');
        } else if (nota == 9 || nota == 10){
            alert('Su ${nota} es sobresaliente');
        }else{
            alert("El digito ingresado no es valido");
        }
    }

    