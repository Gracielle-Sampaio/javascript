
      function pesquisa() {
        let nome = window.prompt(`Qual é o seu nome?`)
        let idade = window.prompt(`Olá, ${nome}! Quantos anos você tem? `)
        let ola =   window.alert(`Acabei de conhecer ${nome}, que tem ${idade}, anos de idade!`)
        let res = window.document.querySelector('div#resposta')

        res.innerHTML=(`<p>Olá <strong>${nome}</strong>, Você passou no teste!</p>`)
        }
     