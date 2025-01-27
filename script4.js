function verificarPalavra() {
  var solucao = "thestate"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "Enigma5.html"
  } else {
    alert("bruh");
  }
}