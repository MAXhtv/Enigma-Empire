function verificarPalavra() {
  var solucao = "christiananarchism"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "Enigma6.html"
  } else {
    alert("bruh");
  }
}