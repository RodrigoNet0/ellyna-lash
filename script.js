let currentIndex = 0;

const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function updateCarousel() {
  const width = images[0].clientWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);

setInterval(nextSlide, 4000);

const servicos = [
    { nome: "Extensão de Cílios Fio a Fio", duracao: "1h 30min", valor: "R$ 120" },
    { nome: "Volume Russo", duracao: "2h", valor: "R$ 150" },
    { nome: "Volume Híbrido", duracao: "1h 45min", valor: "R$ 140" },
    { nome: "Manutenção", duracao: "1h", valor: "R$ 80" },
    { nome: "Remoção de Cílios", duracao: "30min", valor: "R$ 40" },
  ];
  
  function carregarTabelaServicos() {
    const tbody = document.querySelector('#tabela-servicos tbody');
    servicos.forEach(servico => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${servico.nome}</td>
        <td>${servico.duracao}</td>
        <td>${servico.valor}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    carregarTabelaServicos();
  });
  
