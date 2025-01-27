function verificarPalavra() {
  var solucao = "lie"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "Enigma2.html"
  } else {
    alert("bruh");
  }
}