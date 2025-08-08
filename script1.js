// Referência ao botão de documentação
const button = document.getElementById('go-to-doc');

// Função de explosão flash
function explosaoFlash() {
  const flash = document.getElementById('flash');
  flash.style.display = 'block';
  flash.classList.remove('flash'); // Reset da animação
  void flash.offsetWidth;          // Força reflow para reiniciar a animação
  flash.classList.add('flash');

  setTimeout(() => {
    flash.style.display = 'none';
    // Redireciona após o flash
    window.location.href = 'documentacao.html';
  }, 600); // Duração da animação em ms
}

// Evento de clique no botão
if (button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    explosaoFlash(); // Aciona o flash e redirecionamento
  });
}

/*
// ------------------- CARROSSEL DESENVOLVEDORES ------------------- //

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const nav = document.querySelector('.carousel-nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Posiciona os slides lado a lado
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

// Função para mover para o slide alvo
function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// Atualiza o indicador ativo
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

// Mostra ou esconde botões conforme posição
function hideShowArrows(slides, prevButton, nextButton, targetIndex) {
  if (targetIndex === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (targetIndex === slides.length - 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
}

// Evento botão próximo
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  if (!nextSlide) return; // Proteção caso seja o último slide

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// Evento botão anterior
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = nav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  if (!prevSlide) return; // Proteção caso seja o primeiro slide

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// Evento clique nos indicadores
nav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = nav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});


*/