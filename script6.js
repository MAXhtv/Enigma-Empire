function verificarPalavra() {
  var solucao = "vengeance"
  var respostaUser=document.getElementById("input-texto").value
  respostaUser=respostaUser.toLowerCase().replace(/\s/g, '')
      
  var resultado = document.getElementById("resultado");
  if (respostaUser === solucao){
    alert("right");
    window.location.href = "end.html"
  } else {
    alert("bruh");
  }
}