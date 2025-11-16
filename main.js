const posters = [
  {
    img: "Posters/8e9f8413194dc50811b2d97cfb800f2b.jpg",  // 27x40 inch ratio image
    link: "https://nstream123.github.io/Zootopia/"
  },
  {
    img: "Posters/d7accc849aea36f38c6424396d0e2c83.jpg",
    link: "https://trustanyone321.github.io/Jumanji/"
  },
  {
    img: "Posters/e0868f05b0bc8900ae1747174e5cd255.jpg",
    link: "https://nstream123.github.io/Lilo-Stitch/"
  },
  {
    img: "Posters/f69cc540c5641103a31b3268d2352b09.jpg",
    link: "https://trustanyone321.github.io/Frozen/"
  },
  {
    img: "Posters/fcd8d6bd9bb3c5bf89c407a083919852.jpg",
    link: "https://nstream1234.github.io/Moana-2/"
  }
];

// Inject into grid
const grid = document.getElementById("posterGrid");

posters.forEach(p => {
  const card = document.createElement("a");
  card.href = p.link;
  card.classList.add("poster-card");

  card.innerHTML = `<img src="${p.img}" alt="Poster">`;

  grid.appendChild(card);
});