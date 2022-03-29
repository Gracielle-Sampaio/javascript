function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      genero = 'Homem'
      if (idade >= 00 && idade <10){
        //criança
        img.setAttribute('src', 'imagens/bebe-menino.jpg')
      } else if (idade <21){
        //jovem
        img.setAttribute('src', 'imagens/Adolescente-menino.jpg')
      } else if( idade <50){
        //adulto
        img.setAttribute('src', 'imagens/Homem.jpg')
      }else{
        //adulto
        img.setAttribute('src', 'imagens/Idoso.jpg')
      }
        
    }else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 00 && idade <10){
        //criança
        img.setAttribute('src', 'imagens/Bebe-menina.jpg')
      } else if (idade <21){
        //jovem
        img.setAttribute('src', 'imagens/Adolescente-menina.jpg')
      } else if( idade <50){
        //adulto
        img.setAttribute('src', 'imagens/mulher.jpg')
      }else{
        //adulto
        img.setAttribute('src', 'imagens/Idosa.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }

}