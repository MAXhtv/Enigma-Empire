function verificarPalavra() {
  let solucoes = {
    "input-texto1":{solution:"lie",nextPage:"Enigma2.html"},
    "input-texto2":{solution:"leviathan",nextPage:"Enigma3.html"},
    "input-texto3":{solution:"ussr",nextPage:"Enigma4.html"},
    "input-texto4":{solution:"thestate",nextPage:"Enigma5.html"},
    "input-texto5":{solution:"christiananarchism",nextPage:"Enigma6.html"},
    "input-texto6":{solution:"vengeance", nextPage:"end.html"}
  }
  for(let id in solucoes) {
    let inputElement=document.getElementById(id)
    if (inputElement) {
      let respostaUser=inputElement.value.toLowerCase().replace(/\s/g, '')
      if(respostaUser===solucoes[id].solution) {
        alert("right")
        window.location.href=solucoes[id].nextPage
      } else {
        alert("bruh")
      }
      return
    }
  }
}