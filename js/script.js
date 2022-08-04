function verificaIdade(){
    var data = new Date()
    var dataAtual = data.getFullYear()
    var fano = (document.getElementById('txtano').value)
    var resultado = document.querySelector('div#resultado')
    
    var niver = document.getElementsByName('niver')


    var idade = Number(dataAtual - fano)

    if(niver[0].checked){
        idade += 0
    }else {
        idade -= 1
    }

    if(fano < 0 || fano > dataAtual){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var sexo = document.querySelectorAll('input.sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') 
        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >=0 && idade <4){
                //Bebe
                img.setAttribute('src','img/bebemenino.png')
            }else if(idade >= 4 && idade < 14){
                //criança
                img.setAttribute('src', 'img/criancamenino.png')
            }else if(idade >= 14 && idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemhomem.png')
            }else if(idade >= 21 && idade < 60){
                //Pessoa Adulta
                img.setAttribute('src', 'img/homemadulto.png')
            } else if (idade >= 60 && idade < 140){
                //Pessoa Idosa
                img.setAttribute('src', 'img/idosohomem.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //Bebe
                img.setAttribute('src', 'img/bebemenina.png')
            } else if (idade >= 4 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/criancamenina.png')
            } else if (idade >= 14 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemmulher.png')
            } else if (idade >= 21 && idade < 60) {
                //Pessoa Adulta
                img.setAttribute('src', 'img/mulheradulta.png')
            } else if(idade >= 60 && idade < 140){
                //Pessoa Idosa
                img.setAttribute('src', 'img/idosamulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos de idade`
        resultado.appendChild(img)
    } 
    

}