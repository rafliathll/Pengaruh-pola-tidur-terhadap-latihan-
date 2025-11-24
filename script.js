const berita = [
  {
    judul: "Timnas Indonesia Menang 3-0 dalam Laga Persahabatan",
    isi: "Indonesia tampil dominan sejak awal pertandingan dan berhasil mengamankan kemenangan meyakinkan dengan skor 3-0.",
  },
  {
    judul: "Pebulu Tangkis Indonesia Juara Turnamen Asia",
    isi: "Atlet bulu tangkis berhasil membawa pulang gelar juara setelah mengalahkan unggulan pertama di final.",
  },
  {
    judul: "Liga Utama Eropa: Pertandingan Sengit di Pekan Ke-12",
    isi: "Beberapa pertandingan besar menghasilkan drama dan kejutan di pekan ke-12 liga utama Eropa.",
  },
];

const container = document.getElementById("newsContainer");

berita.forEach((item) => {
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `
        <h2>${item.judul}</h2>
        <p>${item.isi}</p>
    `;
  container.appendChild(card);
});
