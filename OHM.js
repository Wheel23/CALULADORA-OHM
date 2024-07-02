let tensao, corrente, resisntencia, result

function calcula() {
    tensao = document.getElementById("tensao").value
    corrente = document.getElementById("corrente").value
    resistencia = document.getElementById("resistencia").value
    miliAmp = document.getElementById("miliamp")
    miliOhms = document.getElementById("miliOhms")

    if(resistencia == ""){
        if(miliAmp.checked){
            result = tensao / (corrente/1000)
        }else{
            result = tensao / corrente
        }
        document.getElementById("resistencia").value = result + "Ω"
    }

    if(tensao == ""){
        if(miliAmp.checked){
            result = resistencia * (corrente/1000)
        }else{
            result = resistencia * corrente
        }
        document.getElementById("tensao") = result + "V"
    }
    if(corrente == ""){
        if(miliOhms.checked){
            result = tensao / (resitencia*1000)
        }else{
            result = tensao / resistencia
        }
        document.getElementById("corrente").value = result + "A"
    }
}