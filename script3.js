function verificarPalavra() {
  var solucao = "ussr"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "Enigma4.html"
  } else {
    alert("bruh");
  }
}