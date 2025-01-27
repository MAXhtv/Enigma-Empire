function verificarPalavra() {
  var solucao = "leviathan"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "Enigma3.html"
  } else {
    alert("bruh");
  }
}