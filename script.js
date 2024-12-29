  // Alert de boas-vindas após 5 segundos
  setTimeout(function () {
    alert("Bem-vindo ao meu website!");
}, 5000);


/*JAVASCRIPT EM LIGHTBOX - GALERIA DE IMAGENS*/

let currentImageIndex = 0;
let images = [];

function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDesc = document.getElementById("lightbox-desc");

  images = Array.from(document.querySelectorAll(".gallery-image"));
  currentImageIndex = images.indexOf(element);

  lightboxImg.src = element.src;
  lightboxDesc.innerText = element.alt;

  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}


function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDesc = document.getElementById("lightbox-desc");

  lightboxImg.src = images[currentImageIndex].src;
  lightboxDesc.innerText = images[currentImageIndex].alt;
}
 





/*JAVASCRIPT PARA valor estimado - PAGINA valor estimado*/

function calcularOrcamento() {
  // Obter os valores dos inputs
  const tipoPagina = parseInt(document.getElementById("tipoPagina").value);
  const prazoMeses = parseInt(document.getElementById("prazoMeses").value);

  // Calcular a soma dos separadores
  const separadores = [
      document.getElementById("separador1").checked ? 400 : 0,
      document.getElementById("separador2").checked ? 400 : 0,
      document.getElementById("separador3").checked ? 400 : 0,
      document.getElementById("separador4").checked ? 400 : 0,
      document.getElementById("separador5").checked ? 400 : 0,
      document.getElementById("separador6").checked ? 400 : 0,
      document.getElementById("separador7").checked ? 400 : 0,
  ];
  const custoSeparadores = separadores.reduce((acc, curr) => acc + curr, 0);

  // Calcular o total sem desconto
  let total = tipoPagina + custoSeparadores;

  // Calcular o desconto
  const desconto = Math.min(prazoMeses * 5, 20); // máximo 20%
  const valorDesconto = total * (desconto / 100);

  // valor estimado final
  const valorEstimado = total - valorDesconto;

  // Atualizar o valor estimado final na tela
  document.getElementById("valorEstimado").innerText = valorEstimado.toFixed(2);
}