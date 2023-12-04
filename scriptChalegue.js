
 //Comienzo del script la parte del javascrit--JS
            /* https://codepen.io/Gouk/pen/WrbKZm
            //para desvanecer elementos a la hora de ejecucion con exito
            function demoDisplay() {
              document.getElementById("img").style.display = "none";
              document.getElementById("msg1").style.display = "none";
              document.getElementById("msg2").style.display = "none";
            }*/

            //Otra forma para desvanecer elementos a la hora de ejecucion con exito
            // funcion para validar que el campo no este vacio, y el desvanecimiento de elementos.
            function demoVisibility() {
                var value = document.getElementById('textoencriptar').value;
                if(value===""){
                 alert("El campo esta vacío, ingrese una palabra");
                 return false;
                }else{
                    document.getElementById("img").style.visibility = "hidden";
                    document.getElementById("msg1").style.visibility = "hidden";
                    document.getElementById("msg2").style.visibility = "hidden";
                }
            }
            //funcion para encrictar un texto
            function encriptar(){
                demoVisibility();
                 var textoNormal = document.querySelector("#textoencriptar").value;
                 var textoEncriptar = textoNormal.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
                 document.querySelector("#inputsalida").value = textoEncriptar;
                 document.querySelector("#textoencriptar").value;
                 textoencriptar.value="";
            }
            //funcion para desencriptar un texto encriptado
             function desencrptar(){
                demoVisibility();
                var textoEncriptado=document.querySelector("#textoencriptar").value
                var textoDesencrptar=textoEncriptado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
                document.querySelector("#inputsalida").value=textoDesencrptar;
                document.querySelector("#textoencriptar").value;
                textoencriptar.value="";
            }
            //funcion para copiar texto del texarea
            function copiarYRecargar() {
                var textoCopiado = document.getElementById("inputsalida");
                textoCopiado.select();
                document.execCommand("copy");
                alert("¡Texto copiado!");
            
                // Redireccionar para recargar la vista
                window.location.reload();
            }
            
            //funcion para que el input de entrada no acepte caracteres especiales
            function sinEspeciales(e){ 
                var key=e.keyCode || e.which;
                var teclado=String.fromCharCode(key).toLowerCase();
                var letras = " abcdefghijklmnopqrstuvwxyz";
                var especiales="8-37-38-46-164";
                var tecladoEspeciales=false;
                for(var i in especiales){
                    if(key==especiales[i]){
                       tecladoEspeciales=true;
                       break;
                    }
                }
                if(letras.indexOf(teclado)==-1 && !tecladoEspeciales){
                    return false;
                } 
                function autoExpand(textarea) {
                    textarea.style.height = 'auto';
                    textarea.style.height = (textarea.scrollHeight) + 'px';
                  }
                     
            }
           