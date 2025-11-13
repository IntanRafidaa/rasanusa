// Wanita
import wanitaBaju from "../assets/produk/wanita/zara.jpg"
import wanitaCelana from "../assets/produk/wanita/SKINNY JEANS.jpg"
import wanitaSepatu from "../assets/produk/wanita/Charles & Keith.jpg"
import wanitaTas from "../assets/produk/wanita/michael-kors.jpg"
import wanitaAksesoris from "../assets/produk/wanita/Swarovski.jpg"

// Pria
import priaBaju from "../assets/produk/pria/Casual Shirts for Men _ Flannel & Oxford Shirts _ H&M US.jpg"
import priaCelana from "../assets/produk/pria/Uniqlo Slim Chino Pants.jpg"
import priaSepatu from "../assets/produk/pria/Nike Revolution 7 Men's Road Running Shoes.jpg"
import priaTas from "../assets/produk/pria/Mochila Adidas Lifestyle Line Cream, espacioso, resistente al agua, minimalista, para estudiantes,.jpg"
import priaAksesoris from "../assets/produk/pria/Jam Tangan Pria Casio Edifice EFR 517L Leather Kulit Coklat Original Murah.jpg"

// Anak
import anakBaju from "../assets/produk/anak/Baju Kaos Anak Oshkosh Motif Bahan Premium.jpg"
import anakCelana from "../assets/produk/anak/Carter’s celana anak.jpg"
import anakSepatu from "../assets/produk/anak/SKECHERS Children's Shoes Girls Series SELECTORS- 303573LLTPK.jpg"
import anakTas from "../assets/produk/anak/Nike Brasilia JDI Mini Backpack.jpg"
import anakAksesoris from "../assets/produk/anak/Toddler Boy Clothes_ Shop New Arrivals.jpg"

// Beauty
import beautySkincare from "../assets/produk/beauty/Water Bank Gentle Gel Cleanser with Hyaluronic….jpg"
import beautyMakeup from "../assets/produk/beauty/lip vinyl maybeline.jpg"

export const kategoriProduk = [
  {
    nama: "Wanita",
    subkategori: [
      {
        nama: "Baju",
        produk: [
          {
            id: "wanita-baju-1",
            name: "Blouse",
            brand: "Zara",
            price: 299000,
            image: wanitaBaju,
            description: "Blouse elegan dengan bahan nyaman, cocok untuk kerja maupun casual.",
            colors: ["Putih", "Hitam", "Cream"],
            sizes: ["S", "M", "L", "XL"],
            details: [
              "Material: 100% Polyester",
              "Nyaman dipakai sehari-hari",
              "Model regular fit",
              "Cocok untuk kerja & acara formal"
            ]
          }
        ]
      },
      {
        nama: "Celana",
        produk: [
          {
            id: "wanita-celana-1",
            name: "Skinny Jeans",
            brand: "H&M",
            price: 399000,
            image: wanitaCelana,
            description: "Skinny jeans dengan potongan modern dan elastis.",
            colors: ["Biru", "Hitam"],
            sizes: ["26", "27", "28", "29", "30"],
            details: [
              "Material: Denim stretch",
              "High rise fit",
              "Nyaman & fleksibel dipakai",
              "Cocok untuk casual style"
            ]
          }
        ]
      },
      {
        nama: "Sepatu",
        produk: [
          {
            id: "wanita-sepatu-1",
            name: "Heels Classic",
            brand: "Charles & Keith",
            price: 899000,
            image: wanitaSepatu,
            description: "High heels elegan untuk acara formal.",
            colors: ["Hitam", "Merah", "Nude"],
            sizes: ["36", "37", "38", "39", "40"],
            details: [
              "Material: Faux leather",
              "Tinggi hak: 7 cm",
              "Sol anti slip",
              "Desain elegan & minimalis"
            ]
          }
        ]
      },
      {
        nama: "Tas",
        produk: [
          {
            id: "wanita-tas-1",
            name: "Shoulder Bag",
            brand: "Michael Kors",
            price: 2499000,
            image: wanitaTas,
            description: "Tas bahu branded dengan desain mewah.",
            colors: ["Coklat", "Hitam"],
            sizes: null,
            details: [
              "Material: Premium leather",
              "Tali adjustable & detachable",
              "Kapasitas: muat HP, dompet, kosmetik",
              "Cocok untuk pesta & kerja"
            ]
          }
        ]
      },
      {
        nama: "Aksesoris",
        produk: [
          {
            id: "wanita-aksesoris-1",
            name: "Kalung Emas",
            brand: "Tiffany & Co",
            price: 4999000,
            image: wanitaAksesoris,
            description: "Kalung emas elegan untuk tampilan mewah.",
            colors: null,
            sizes: null,
            details: [
              "Material: 18K Gold",
              "Berat: 4 gram",
              "Panjang: 45 cm",
              "Cocok untuk hadiah & acara spesial"
            ]
          }
        ]
      }
    ]
  },

  // Pria
  {
    nama: "Pria",
    subkategori: [
      {
        nama: "Baju",
        produk: [
          {
            id: "pria-baju-1",
            name: "Kemeja Slim Fit",
            brand: "Uniqlo",
            price: 349000,
            image: priaBaju,
            description: "Kemeja slim fit dengan bahan katun premium.",
            colors: ["Putih", "Biru"],
            sizes: ["M", "L", "XL"],
            details: [
              "Material: 100% Cotton",
              "Model slim fit",
              "Nyaman untuk kerja & formal",
              "Cocok untuk cuaca tropis"
            ]
          }
        ]
      },
      {
        nama: "Celana",
        produk: [
          {
            id: "pria-celana-1",
            name: "Jeans Slim Fit",
            brand: "Levi's",
            price: 599000,
            image: priaCelana,
            description: "Jeans slim fit dengan bahan stretch nyaman.",
            colors: ["Biru Denim"],
            sizes: ["29", "30", "31", "32", "33", "34"],
            details: [
              "Material: Denim elastis",
              "Model slim fit",
              "Nyaman dipakai seharian",
              "Cocok untuk gaya casual & streetwear"
            ]
          }
        ]
      },
      {
        nama: "Sepatu",
        produk: [
          {
            id: "pria-sepatu-1",
            name: "Nike Revolution 7",
            brand: "Nike",
            price: 1200000,
            image: priaSepatu,
            description: "Sepatu running Nike Revolution 7, ringan dan nyaman.",
            colors: ["Hitam", "Putih", "Biru"],
            sizes: ["40", "41", "42", "43"],
            details: [
              "Material: Mesh upper + Rubber outsole",
              "Ringan & breathable",
              "Cocok untuk lari jarak menengah",
              "Insole empuk dengan cushioning modern"
            ]
          }
        ]
      },
      {
        nama: "Tas",
        produk: [
          {
            id: "pria-tas-1",
            name: "Backpack",
            brand: "Adidas",
            price: 499000,
            image: priaTas,
            description: "Backpack sporty dengan banyak kompartemen.",
            colors: ["Hitam", "Abu-abu"],
            sizes: null,
            details: [
              "Material: Polyester",
              "Kapasitas 25L",
              "Water resistant",
              "Cocok untuk sekolah & traveling"
            ]
          }
        ]
      },
      {
        nama: "Aksesoris",
        produk: [
          {
            id: "pria-aksesoris-1",
            name: "Jam Tangan Analog",
            brand: "Casio",
            price: 799000,
            image: priaAksesoris,
            description: "Jam tangan analog klasik dengan strap kulit.",
            colors: ["Hitam", "Coklat"],
            sizes: null,
            details: [
              "Mesin Quartz Japan Movement",
              "Strap kulit asli",
              "Tahan air 30m",
              "Cocok untuk formal & casual"
            ]
          }
        ]
      }
    ]
  },

  // Anak
  {
    nama: "Anak",
    subkategori: [
      {
        nama: "Baju",
        produk: [
          {
            id: "anak-baju-1",
            name: "Kaos Anak",
            brand: "OshKosh",
            price: 150000,
            image: anakBaju,
            description: "Kaos anak motif lucu berbahan premium.",
            colors: ["Biru", "Merah"],
            sizes: ["S", "M", "L"],
            details: [
              "Material: Katun premium",
              "Motif sablon ramah anak",
              "Nyaman dipakai sehari-hari",
              "Cocok untuk anak usia 3–8 tahun"
            ]
          }
        ]
      },
      {
        nama: "Celana",
        produk: [
          {
            id: "anak-celana-1",
            name: "Celana Panjang Anak",
            brand: "Carter’s",
            price: 180000,
            image: anakCelana,
            description: "Celana panjang anak berbahan lembut dan nyaman.",
            colors: ["Biru", "Abu-abu"],
            sizes: ["S", "M", "L"],
            details: [
              "Material: Katun lembut",
              "Pinggang karet elastis",
              "Nyaman untuk aktivitas sehari-hari",
              "Cocok untuk anak usia 3–8 tahun"
            ]
          }
        ]
      },
      {
        nama: "Sepatu",
        produk: [
          {
            id: "anak-sepatu-1",
            name: "Sneakers Anak",
            brand: "Converse",
            price: 350000,
            image: anakSepatu,
            description: "Sneakers anak dengan desain sporty.",
            colors: ["Hitam", "Putih"],
            sizes: ["30", "31", "32", "33", "34"],
            details: [
              "Material: Canvas",
              "Ringan & nyaman",
              "Outsole karet anti slip",
              "Cocok untuk sekolah & bermain"
            ]
          }
        ]
      },
      {
        nama: "Tas",
        produk: [
          {
            id: "anak-tas-1",
            name: "Backpack Anak",
            brand: "Nike Kids",
            price: 220000,
            image: anakTas,
            description: "Tas ransel anak, ringan dan kuat.",
            colors: ["Biru", "Merah"],
            sizes: null,
            details: [
              "Material: Polyester kuat",
              "Kapasitas cukup untuk buku & bekal",
              "Tali bahu adjustable",
              "Cocok untuk sekolah & aktivitas luar rumah"
            ]
          }
        ]
      },
      {
        nama: "Aksesoris",
        produk: [
          {
            id: "anak-aksesoris-1",
            name: "Topi Baseball Anak",
            brand: "Nike Kids",
            price: 120000,
            image: anakAksesoris,
            description: "Topi sporty untuk anak.",
            colors: null,
            sizes: null,
            details: [
              "Material: Cotton",
              "Nyaman dipakai anak",
              "Desain adjustable strap",
              "Melindungi dari panas matahari"
            ]
          }
        ]
      }
    ]
  },

  // Beauty
  {
    nama: "Beauty",
    subkategori: [
      {
        nama: "Makeup",
        produk: [
          {
            id: "beauty-makeup-1",
            name: "Fit Me Foundation",
            brand: "Maybelline",
            price: 120000,
            image: beautyMakeup,
            description: "Foundation cair dengan hasil matte natural.",
            colors: ["Ivory", "Natural Beige", "Sand Beige"],
            sizes: ["30ml"],
            details: [
              "Hasil matte natural",
              "Menutup noda & pori",
              "Tahan hingga 12 jam",
              "Cocok untuk kulit berminyak & kombinasi"
            ]
          }
        ]
      },
      {
        nama: "Skincare",
        produk: [
          {
            id: "beauty-skincare-1",
            name: "Water Bank Gentle Gel Cleanser",
            brand: "Laneige",
            price: 180000,
            image: beautySkincare,
            description: "Pembersih wajah dengan hyaluronic acid untuk kulit lembap.",
            colors: null,
            sizes: ["100ml"],
            details: [
              "Membersihkan tanpa membuat kulit kering",
              "Mengandung hyaluronic acid",
              "Aman untuk semua jenis kulit",
              "Dipakai pagi & malam"
            ]
          }
        ]
      }
    ]
  }
]
