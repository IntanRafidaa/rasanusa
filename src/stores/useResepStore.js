import { defineStore } from "pinia"

export const useResepStore = defineStore("resepStore", {
  state: () => ({
    reseps: [
      // ======================== MAKANAN ========================
      {
        id: 1,
        nama: "Seblak",
        kategori: "Camilan",
        image: "/src/assets/seblak.jpg",
        deskripsi: "Seblak khas Bandung dengan cita rasa pedas gurih.",
        bahan: ["Kerupuk mentah", "Telur", "Sosis", "Cabai", "Bawang putih", "Garam", "Air"],
        langkah: [
          "Rendam kerupuk hingga lunak.",
          "Haluskan bawang putih dan cabai.",
          "Tumis bumbu halus hingga harum.",
          "Masukkan telur dan sosis, aduk rata.",
          "Tambahkan kerupuk dan air secukupnya.",
          "Masak hingga bumbu meresap dan sajikan panas."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 2,
        nama: "Kepiting Saus Padang",
        kategori: "Makanan",
        image: "/src/assets/kepiting-saus-padang.jpg",
        deskripsi: "Kepiting segar dengan saus padang pedas manis.",
        bahan: ["Kepiting segar", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Saus tiram", "Saus sambal"],
        langkah: [
          "Bersihkan kepiting, rebus hingga matang.",
          "Tumis bumbu halus hingga harum.",
          "Tambahkan saus tiram, saus sambal, dan tomat.",
          "Masukkan kepiting, aduk rata.",
          "Masak hingga bumbu meresap, sajikan dengan nasi hangat."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 3,
        nama: "Rendang",
        kategori: "Makanan",
        image: "/src/assets/rendang.jpg",
        deskripsi: "Rendang daging khas Minang yang kaya rempah.",
        bahan: ["Daging sapi", "Santan", "Serai", "Daun jeruk", "Lengkuas", "Bumbu rendang"],
        langkah: [
          "Tumis bumbu rendang hingga harum.",
          "Masukkan daging, aduk hingga berubah warna.",
          "Tambahkan santan dan rempah-rempah.",
          "Masak perlahan hingga santan menyusut.",
          "Aduk terus sampai daging empuk dan berminyak, siap disajikan."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 4,
        nama: "Nasi Goreng",
        kategori: "Makanan",
        image: "/src/assets/nasi-goreng.jpg",
        deskripsi: "Nasi goreng sederhana yang gurih dan nikmat.",
        bahan: ["Nasi putih", "Telur", "Bawang putih", "Kecap manis", "Sosis atau ayam"],
        langkah: [
          "Tumis bawang putih hingga harum.",
          "Masukkan telur, orak-arik hingga matang.",
          "Tambahkan nasi dan kecap manis.",
          "Aduk rata dan goreng hingga bumbu meresap.",
          "Sajikan dengan acar dan kerupuk."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 5,
        nama: "Sate Ayam",
        kategori: "Makanan",
        image: "/src/assets/sate-ayam.jpg",
        deskripsi: "Sate ayam bumbu kacang khas Madura yang lezat.",
        bahan: ["Daging ayam", "Kacang tanah", "Kecap manis", "Bawang putih", "Cabai"],
        langkah: [
          "Tusuk daging ayam pada tusuk sate.",
          "Bakar setengah matang.",
          "Haluskan kacang tanah dan bumbu.",
          "Tumis bumbu kacang lalu tambahkan kecap.",
          "Oleskan bumbu ke sate dan bakar kembali hingga matang.",
          "Sajikan dengan lontong dan sambal kecap."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 6,
        nama: "Mie Ayam",
        kategori: "Makanan",
        image: "/src/assets/mie-ayam.jpg",
        deskripsi: "Mie ayam dengan topping ayam kecap gurih.",
        bahan: ["Mie telur", "Ayam cincang", "Kecap manis", "Sawi", "Bawang putih"],
        langkah: [
          "Rebus mie hingga matang, tiriskan.",
          "Tumis bawang putih, masukkan ayam cincang.",
          "Tambahkan kecap dan bumbu, masak hingga matang.",
          "Sajikan mie dengan topping ayam dan kuah kaldu."
        ],
        populer: false,
        terbaru: true,
      },
      {
        id: 7,
        nama: "Soto Ayam",
        kategori: "Makanan",
        image: "/src/assets/soto-ayam.jpg",
        deskripsi: "Soto ayam bening segar khas Jawa.",
        bahan: ["Ayam", "Soun", "Tauge", "Daun seledri", "Bumbu soto"],
        langkah: [
          "Rebus ayam hingga empuk, pisahkan dagingnya.",
          "Tumis bumbu halus hingga harum, masukkan ke dalam kaldu.",
          "Tambahkan ayam suwir dan pelengkap.",
          "Sajikan dengan nasi dan sambal."
        ],
        populer: false,
        terbaru: false,
      },
      {
        id: 8,
        nama: "Bakso",
        kategori: "Makanan",
        image: "/src/assets/bakso.jpg",
        deskripsi: "Bakso kenyal dengan kuah gurih menggoda.",
        bahan: ["Daging sapi giling", "Tepung tapioka", "Bawang putih", "Kaldu sapi"],
        langkah: [
          "Campur daging sapi giling dengan bumbu dan tepung.",
          "Bentuk bulat, rebus hingga mengapung.",
          "Rebus dengan kaldu dan bumbu penyedap.",
          "Sajikan dengan mie, sambal, dan bawang goreng."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 9,
        nama: "Ayam Penyet",
        kategori: "Makanan",
        image: "/src/assets/ayam-penyet.jpg",
        deskripsi: "Ayam goreng renyah dengan sambal pedas.",
        bahan: ["Ayam", "Tepung", "Cabai", "Bawang putih", "Tomat"],
        langkah: [
          "Goreng ayam hingga garing.",
          "Ulek cabai, bawang, dan tomat hingga halus.",
          "Penyet ayam di atas sambal, sajikan dengan lalapan."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 10,
        nama: "Pecel Lele",
        kategori: "Makanan",
        image: "/src/assets/pecel-lele.jpg",
        deskripsi: "Lele goreng garing dengan sambal terasi pedas.",
        bahan: ["Ikan lele", "Tepung", "Cabai", "Tomat", "Terasi"],
        langkah: [
          "Bersihkan lele, lumuri garam dan tepung.",
          "Goreng hingga garing.",
          "Buat sambal terasi dan sajikan bersama lalapan."
        ],
        populer: false,
        terbaru: false,
      },
      // ======================== CAMILAN ========================
      {
        id: 11,
        nama: "Cilok",
        kategori: "Camilan",
        image: "/src/assets/cilok.jpg",
        deskripsi: "Cilok kenyal dengan saus kacang pedas.",
        bahan: ["Tepung tapioka", "Bawang putih", "Air panas", "Saus kacang"],
        langkah: [
          "Campur tepung dan bumbu, tambahkan air panas.",
          "Bentuk bulat kecil, rebus hingga matang.",
          "Sajikan dengan saus kacang."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 12,
        nama: "Cireng Keju",
        kategori: "Camilan",
        image: "/src/assets/cireng-keju.jpg",
        deskripsi: "Cireng renyah isi keju lumer.",
        bahan: ["Tepung tapioka", "Keju", "Bawang putih", "Garam", "Air panas"],
        langkah: [
          "Campur bahan kering, tambahkan air panas.",
          "Isi dengan keju, bentuk pipih.",
          "Goreng hingga kering dan sajikan hangat."
        ],
        populer: false,
        terbaru: false,
      },
      {
        id: 13,
        nama: "Martabak Manis",
        kategori: "Camilan",
        image: "/src/assets/martabak.jpg",
        deskripsi: "Martabak manis dengan topping coklat dan keju.",
        bahan: ["Tepung terigu", "Gula", "Telur", "Susu", "Coklat meses", "Keju"],
        langkah: [
          "Buat adonan, diamkan 30 menit.",
          "Tuang ke teflon, masak hingga mengembang.",
          "Tambahkan topping dan lipat.",
          "Potong dan sajikan hangat."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 14,
        nama: "Tahu Gejrot",
        kategori: "Camilan",
        image: "/src/assets/tahu-gejrot.jpg",
        deskripsi: "Tahu goreng dengan kuah asam pedas manis.",
        bahan: ["Tahu goreng", "Gula merah", "Asam jawa", "Bawang putih", "Cabai"],
        langkah: [
          "Haluskan cabai dan bawang.",
          "Campur dengan air gula dan asam.",
          "Siramkan ke atas tahu goreng."
        ],
        populer: false,
        terbaru: false,
      },
      {
        id: 15,
        nama: "Klepon",
        kategori: "Camilan",
        image: "/src/assets/klepon.jpg",
        deskripsi: "Klepon isi gula merah dengan taburan kelapa.",
        bahan: ["Tepung ketan", "Gula merah", "Daun pandan", "Kelapa parut"],
        langkah: [
          "Campur tepung dan air pandan, uleni.",
          "Isi dengan gula merah, bentuk bulat.",
          "Rebus hingga mengapung.",
          "Gulingkan di kelapa parut dan sajikan."
        ],
        populer: false,
        terbaru: true,
      },
      {
        id: 16,
        nama: "Bola Kentang",
        kategori: "Camilan",
        image: "/src/assets/bola-kentang.jpg",
        deskripsi: "Camilan kentang goreng berbentuk bulat dengan rasa gurih.",
        bahan: ["Kentang rebus", "Tepung roti", "Telur", "Garam", "Merica"],
        langkah: [
          "Haluskan kentang dan campur bumbu.",
          "Bentuk bulat, celup ke telur, balur tepung roti.",
          "Goreng hingga keemasan dan sajikan."
        ],
        populer: false,
        terbaru: false,
      },
      // ======================== MINUMAN ========================
      {
        id: 17,
        nama: "Coffee Dalgona",
        kategori: "Minuman",
        image: "/src/assets/coffee-dalgona.jpg",
        deskripsi: "Kopi susu dengan topping busa kopi lembut.",
        bahan: ["Kopi instan", "Gula", "Air panas", "Susu cair"],
        langkah: [
          "Kocok kopi, gula, dan air panas hingga berbusa.",
          "Tuang susu cair ke gelas.",
          "Tambahkan busa kopi di atasnya dan sajikan dingin."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 18,
        nama: "Jus Alpukat",
        kategori: "Minuman",
        image: "/src/assets/jus-alpukat.jpg",
        deskripsi: "Jus alpukat lembut dan creamy dengan cokelat.",
        bahan: ["Alpukat", "Susu kental manis", "Cokelat cair", "Es batu"],
        langkah: [
          "Blender alpukat dengan susu dan es batu.",
          "Tuang ke gelas, beri cokelat cair.",
          "Sajikan segar."
        ],
        populer: false,
        terbaru: false,
      },
      {
        id: 19,
        nama: "Es Cendol",
        kategori: "Minuman",
        image: "/src/assets/es-cendol.jpg",
        deskripsi: "Minuman manis segar khas Jawa Barat.",
        bahan: ["Cendol", "Santan", "Gula merah cair", "Es batu"],
        langkah: [
          "Siapkan cendol dan gula merah cair.",
          "Tuang santan dan es batu.",
          "Sajikan dalam gelas besar, nikmati dingin."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 20,
        nama: "Es Campur",
        kategori: "Minuman",
        image: "/src/assets/es-campur.jpg",
        deskripsi: "Perpaduan buah dan sirup yang menyegarkan.",
        bahan: ["Nangka", "Kelapa muda", "Cincau", "Santan", "Sirup", "Es serut"],
        langkah: [
          "Siapkan bahan-bahan dalam mangkuk.",
          "Tambahkan es serut dan sirup.",
          "Siram dengan santan dan sajikan dingin."
        ],
        populer: false,
        terbaru: true,
      },
      // ======================== MAKANAN TAMBAHAN ========================
      {
        id: 21,
        nama: "Sop Buntut",
        kategori: "Makanan",
        image: "/src/assets/sop-buntut.jpg",
        deskripsi: "Sup buntut sapi hangat dengan kuah bening.",
        bahan: ["Buntut sapi", "Wortel", "Kentang", "Daun bawang", "Bawang putih"],
        langkah: [
          "Rebus buntut sapi hingga empuk.",
          "Tumis bawang putih, masukkan ke dalam kuah.",
          "Tambahkan wortel dan kentang.",
          "Masak hingga matang dan sajikan hangat."
        ],
        populer: true,
        terbaru: false,
      },
      {
        id: 22,
        nama: "Gado-Gado",
        kategori: "Makanan",
        image: "/src/assets/gado-gado.jpg",
        deskripsi: "Sayuran rebus dengan saus kacang gurih.",
        bahan: ["Tauge", "Kangkung", "Kentang", "Telur", "Bumbu kacang"],
        langkah: [
          "Rebus sayuran hingga matang.",
          "Susun di piring dengan kentang dan telur.",
          "Siram dengan bumbu kacang dan tabur bawang goreng."
        ],
        populer: false,
        terbaru: false,
      },
      {
        id: 23,
        nama: "Rawon",
        kategori: "Makanan",
        image: "/src/assets/rawon.jpg",
        deskripsi: "Sup daging sapi khas Jawa Timur dengan kluwek.",
        bahan: ["Daging sapi", "Kluwek", "Bawang putih", "Lengkuas", "Serai"],
        langkah: [
          "Rebus daging hingga empuk.",
          "Tumis bumbu halus dan kluwek, masukkan ke dalam kuah.",
          "Masak hingga bumbu meresap, sajikan dengan nasi dan telur asin."
        ],
        populer: true,
        terbaru: true,
      },
      {
        id: 24,
        nama: "Pempek",
        kategori: "Camilan",
        image: "/src/assets/pempek.jpg",
        deskripsi: "Pempek Palembang gurih dengan kuah cuko asam pedas.",
        bahan: ["Ikan tenggiri", "Tepung sagu", "Bawang putih", "Air", "Gula merah", "Asam jawa"],
        langkah: [
          "Campur ikan giling dengan tepung dan bumbu.",
          "Bentuk pempek, rebus hingga matang, lalu goreng.",
          "Buat kuah cuko dari gula merah dan asam.",
          "Sajikan pempek dengan cuko pedas manis."
        ],
        populer: true,
        terbaru: false,
      },
    ],
  }),
  getters: {
    populer: (state) => state.reseps.filter((r) => r.populer),
    terbaru: (state) => state.reseps.filter((r) => r.terbaru),
  },
})
