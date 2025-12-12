// ============================================
// DATA DAN VARIABLES
// ============================================

// Data Resep Utama (50 Resep - 5 kategori x 10 resep)
let allRecipes = [
  // KATEGORI: DAGING (10 resep)
  {
    id: "rendang",
    title: "Rendang Sapi Klasik (Sumatra)",
    category: "Daging",
    duration: "4-6 jam",
    portion: "8-10 orang",
    description:
      "Raja dari segala masakan Minangkabau. Hidangan legendaris ini adalah proses memasak daging sapi yang direndam dalam santan kental dan bumbu rempah-rempah yang kaya selama berjam-jam.",
    imagePlaceholder: "7c2b0c/ffffff?text=RENDANG+SAPI",
    imageUrl:
      "https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg",
    ingredients: [
      "1 kg Daging Sapi",
      "1.5 liter Santan Kental",
      "200 gr Bumbu Halus",
      "5 lembar Daun Jeruk",
      "3 lembar Daun Salam",
      "2 batang Serai",
      "1 buah Asam Kandis",
      "Garam dan Gula",
    ],
    steps: [
      "Siapkan wajan besar. Masukkan santan kental, bumbu halus, serai, daun jeruk, daun salam, dan asam kandis.",
      "Masak dengan api sedang sambil terus diaduk hingga mendidih.",
      "Masukkan potongan daging sapi. Kecilkan api.",
      "Masak terus secara perlahan hingga santan mengering (4-6 jam).",
      "Koreksi rasa. Sajikan hangat dengan nasi.",
    ],
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        user: "Ahmad",
        rating: 5,
        text: "Resep yang sangat otentik!",
        date: "2025-01-15",
      },
      {
        user: "Sari",
        rating: 4,
        text: "Hasilnya lumayan enak.",
        date: "2025-01-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-01",
    isPublic: true,
  },
  {
    id: "satemaranggi",
    title: "Sate Maranggi (Purwakarta)",
    category: "Daging",
    duration: "45 menit + Marinasi 2 jam",
    portion: "4-5 orang",
    description:
      "Sate khas Sunda yang berasal dari Purwakarta. Keistimewaannya terletak pada proses marinasi yang kuat, membuat daging memiliki rasa otentik.",
    imagePlaceholder: "8b5cf6/ffffff?text=SATE+MARANGGI",
    imageUrl:
      "https://www.dapurkobe.co.id/wp-content/uploads/sate-maranggi.jpg",
    ingredients: [
      "500 gr Daging Sapi",
      "3 sdm Kecap Manis",
      "1 sdm Air Asam Jawa",
      "Bumbu Marinasi",
      "Bahan Sambal Acar",
    ],
    steps: [
      "Potong daging sapi bentuk dadu.",
      "Campurkan bumbu marinasi.",
      "Marinasi minimal 2 jam.",
      "Tusuk daging pada tusuk sate.",
      "Bakar sate di atas bara api hingga matang.",
    ],
    ratings: [5, 4, 5],
    comments: [
      {
        user: "Budi",
        rating: 5,
        text: "Sate maranggi favorit keluarga!",
        date: "2025-02-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-02",
    isPublic: true,
  },
  {
    id: "coto",
    title: "Coto Makassar (Sulawesi)",
    category: "Daging",
    duration: "3-4 jam",
    portion: "6-8 orang",
    description:
      "Hidangan sup daging sapi khas Makassar yang kaya rempah dengan kuah kacang yang gurih dan kental.",
    imagePlaceholder: "a0522d/ffffff?text=COTO+MAKASSAR",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.IJz3UgihP3UMTR_m_6uYUQHaGt?rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "1 kg Daging Sapi",
      "500 gr Hati dan Jeroan Sapi",
      "200 gr Kacang Tanah Sangrai",
      "5 butir Kemiri",
      "1 sdm Ketumbar",
      "8 siung Bawang Putih",
      "Serai, Lengkuas, Daun Salam",
      "Garam dan Kaldu Sapi",
    ],
    steps: [
      "Rebus daging dan jeroan hingga empuk, potong dadu.",
      "Haluskan kacang tanah, kemiri, ketumbar, dan bawang putih.",
      "Tumis bumbu halus hingga harum.",
      "Masukkan daging dan jeroan ke dalam tumisan bumbu.",
      "Tambahkan air kaldu, masak hingga bumbu meresap.",
      "Sajikan dengan ketupat dan buras.",
    ],
    ratings: [5, 5, 5, 5, 4],
    comments: [
      {
        user: "Rahmat",
        rating: 5,
        text: "Coto Makassar terenak yang pernah saya coba!",
        date: "2025-02-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-03",
    isPublic: true,
  },
  {
    id: "gulai-kambing",
    title: "Gulai Kambing Padang",
    category: "Daging",
    duration: "2-3 jam",
    portion: "6 orang",
    description:
      "Gulai kambing dengan bumbu rempah khas Minangkabau yang kaya rasa dan aroma.",
    imagePlaceholder: "d2691e/ffffff?text=GULAI+KAMBING",
    imageUrl:
      "https://tse3.mm.bing.net/th/id/OIP.7kY-AjHIsuLd_NRvBnyqBQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "1 kg Daging Kambing",
      "1 liter Santan Kental",
      "Bumbu Halus: 10 siung bawang merah, 5 siung bawang putih, 5 buah cabai merah, 3 cm kunyit, 2 cm jahe, 1 sdm ketumbar",
      "Daun Jeruk, Serai, Lengkuas",
      "Garam dan Gula Merah",
    ],
    steps: [
      "Rebus daging kambing dengan daun salam hingga empuk.",
      "Tumis bumbu halus hingga harum.",
      "Masukkan daging ke dalam tumisan bumbu.",
      "Tambahkan santan kental, masak dengan api kecil.",
      "Masak hingga kuah mengental dan bumbu meresap.",
      "Sajikan dengan nasi hangat.",
    ],
    ratings: [4, 4, 5, 4],
    comments: [
      {
        user: "Dewi",
        rating: 4,
        text: "Enak sekali, tidak bau prengus!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-04",
    isPublic: true,
  },
  {
    id: "sei-sapi",
    title: "Se'i Sapi (Nusa Tenggara Timur)",
    category: "Daging",
    duration: "2-3 jam + Pengasapan 1 jam",
    portion: "4-5 orang",
    description:
      "Daging sapi asap khas NTT yang dibumbui rempah khas dan diasapi dengan kayu khusus, menghasilkan rasa yang unik dan aroma smokey yang khas.",
    imagePlaceholder: "8b4513/ffffff?text=SEI+SAPI",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/086280c4120fc234/680x482cq70/sei-sapi-sambal-luat-ntt-ala-rumahan-foto-resep-utama.jpg",
    ingredients: [
      "1 kg Daging Sapi (paha atau has dalam)",
      "5 siung Bawang Putih",
      "3 cm Jahe",
      "2 batang Serai",
      "3 lembar Daun Jeruk",
      "2 sdm Garam",
      "1 sdm Gula Merah",
      "Kayu Manis dan Cengkeh secukupnya",
    ],
    steps: [
      "Iris daging sapi searah serat dengan ketebalan 1-2 cm.",
      "Haluskan bawang putih, jahe, serai, daun jeruk, garam, dan gula merah.",
      "Lumuri daging dengan bumbu halus, diamkan minimal 2 jam.",
      "Siapkan alat pengasapan, gunakan kayu aren atau kayu manis untuk aroma terbaik.",
      "Asap daging selama 1 jam hingga matang dan beraroma smokey.",
      "Bisa disajikan langsung atau dipanggang sebentar sebelum disajikan.",
      "Sajikan dengan sambal lu'at dan jagung bose.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Marthen",
        rating: 5,
        text: "Rasa smokey-nya autentik khas NTT!",
        date: "2025-02-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-05",
    isPublic: true,
  },
  {
    id: "sop-buntut",
    title: "Sop Buntut (Jakarta)",
    category: "Daging",
    duration: "3-4 jam",
    portion: "6 orang",
    description:
      "Sup buntut sapi dengan kuah bening yang gurih, berempah, dan kaya rasa. Buntut sapi dimasak hingga empuk dan dagingnya lepas dari tulang.",
    imagePlaceholder: "f5b041/ffffff?text=SOP+BUNTUT",
    imageUrl:
      "https://soyummyrecipes.co.uk/wp-content/uploads/2021/11/Sop-Buntut.jpg",
    ingredients: [
      "1.5 kg Buntut Sapi",
      "3 buah Wortel",
      "2 buah Kentang",
      "2 batang Daun Bawang",
      "2 batang Seledri",
      "2 buah Tomat",
      "10 siung Bawang Putih",
      "5 siung Bawang Merah",
      "Pala, Kayu Manis, Cengkeh",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Rebus buntut sapi dengan air mendidih selama 10 menit, buang airnya.",
      "Rebus kembali buntut dengan air baru hingga empuk (2-3 jam).",
      "Tumis bawang merah dan bawang putih halus hingga harum.",
      "Masukkan bumbu tumis ke dalam rebusan buntut.",
      "Tambahkan wortel dan kentang yang sudah dipotong.",
      "Masak hingga sayuran matang.",
      "Tambahkan daun bawang, seledri, dan tomat.",
      "Bumbui dengan garam, merica, pala, kayu manis, dan cengkeh.",
      "Sajikan panas dengan emping dan sambal.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Johan",
        rating: 5,
        text: "Buntutnya empuk banget, kuahnya gurih!",
        date: "2025-03-01",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-06",
    isPublic: true,
  },
  {
    id: "dendeng-balado",
    title: "Dendeng Balado (Sumatera Barat)",
    category: "Daging",
    duration: "1.5 jam + Pengeringan 1 hari",
    portion: "4 orang",
    description:
      "Daging sapi tipis yang dikeringkan lalu digoreng, disajikan dengan sambal balado yang pedas menggigit. Perpaduan tekstur renyah dan pedasnya sambal.",
    imagePlaceholder: "e74c3c/ffffff?text=DENDENG+BALADO",
    imageUrl:
      "https://th.bing.com/th/id/OIP.jZC7nG8lVteT2sZdy1CNdQAAAA?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "500 gr Daging Sapi",
      "10 buah Cabai Merah Besar",
      "5 buah Cabai Rawit Merah",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "1 buah Tomat",
      "1 sdm Air Asam Jawa",
      "Garam dan Gula secukupnya",
    ],
    steps: [
      "Iris tipis daging sapi melawan serat.",
      "Lumuri dengan garam dan asam jawa, jemur hingga kering (atau oven dengan suhu rendah).",
      "Goreng dendeng yang sudah kering hingga matang dan renyah.",
      "Haluskan cabai merah, cabai rawit, bawang merah, bawang putih, dan tomat.",
      "Tumis bumbu halus hingga matang dan harum.",
      "Masukkan dendeng yang sudah digoreng, aduk rata.",
      "Tambahkan garam dan gula, koreksi rasa.",
      "Sajikan dengan nasi hangat.",
    ],
    ratings: [5, 4, 5, 4],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Pedasnya nendang, dendengnya renyah!",
        date: "2025-03-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-07",
    isPublic: true,
  },
  {
    id: "bistik-jawa",
    title: "Bistik Jawa (Jawa Tengah)",
    category: "Daging",
    duration: "1.5 jam",
    portion: "4-5 orang",
    description:
      "Daging sapi iris yang dimasak dengan bumbu rempah khas Jawa dan kecap manis, menghasilkan rasa manis gurih yang khas. Sering disajikan dengan kentang goreng dan sayuran.",
    imagePlaceholder: "8B4513/ffffff?text=BISTIK+JAWA",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/648f9d33766cb0f0/680x482cq70/bistik-jawa-foto-resep-utama.jpg",
    ingredients: [
      "750 gr Daging Sapi (has dalam)",
      "5 sdm Kecap Manis",
      "3 buah Bawang Bombay",
      "5 siung Bawang Putih",
      "2 cm Jahe",
      "Pala, Kayu Manis, Cengkeh secukupnya",
      "Kentang dan Wortel untuk pelengkap",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Iris tipis daging sapi melawan serat.",
      "Tumis bawang bombay dan bawang putih hingga harum.",
      "Masukkan daging, tumis hingga berubah warna.",
      "Tambahkan kecap manis dan rempah-rempah.",
      "Beri air secukupnya, masak hingga daging empuk.",
      "Masukkan kentang dan wortel yang sudah dipotong.",
      "Masak hingga sayuran matang dan kuah mengental.",
      "Sajikan dengan nasi putih atau kentang goreng.",
    ],
    ratings: [4, 5, 4, 5, 4],
    comments: [
      {
        user: "Susi",
        rating: 5,
        text: "Manis gurih khas Jawa, dagingnya empuk!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-08",
    isPublic: true,
  },
  {
    id: "konro-bakar",
    title: "Konro Bakar (Makassar)",
    category: "Daging",
    duration: "4-5 jam",
    portion: "6-8 orang",
    description:
      "Iga sapi khas Makassar yang direbus dengan rempah khas kemudian dibakar dengan bumbu spesial. Disajikan dengan sup konro yang gurih.",
    imagePlaceholder: "8B4513/ffffff?text=KONRO+BAKAR",
    imageUrl:
      "https://asset.kompas.com/crops/v6UTn3-XIVvwfMsG4o-aoccr6_4=/0x0:1000x667/750x500/data/photo/2022/12/27/63aa2a92886a6.jpeg",
    ingredients: [
      "2 kg Iga Sapi (konro)",
      "5 buah Kluwek",
      "10 siung Bawang Merah",
      "8 siung Bawang Putih",
      "3 cm Jahe",
      "3 cm Lengkuas",
      "5 butir Kemiri",
      "Ketumbar dan Jinten secukupnya",
    ],
    steps: [
      "Rebus iga sapi dengan air hingga empuk (3-4 jam).",
      "Haluskan kluwek, bawang merah, bawang putih, jahe, lengkuas, kemiri, ketumbar, dan jinten.",
      "Tumis bumbu halus hingga harum.",
      "Ambil sebagian bumbu untuk membakar, sebagian lagi untuk kuah.",
      "Lumuri iga dengan bumbu, bakar di atas bara api hingga kecokelatan.",
      "Untuk kuah: masukkan sisa bumbu ke dalam air rebusan iga, beri garam dan kaldu.",
      "Sajikan konro bakar dengan kuah, nasi, dan sambal.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Andi",
        rating: 5,
        text: "Iganya empuk, bumbu bakarnya meresap sempurna!",
        date: "2025-03-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-09",
    isPublic: true,
  },
  {
    id: "lawar-babi",
    title: "Lawar Babi (Bali)",
    category: "Daging",
    duration: "2.5 jam",
    portion: "8-10 orang",
    description:
      "Olahan daging babi khas Bali yang dicampur dengan bumbu base genep dan sayuran, sering disajikan dalam upacara adat. Rasa gurih, pedas, dan segar.",
    imagePlaceholder: "c0392b/ffffff?text=LAWAR+BABI",
    imageUrl:
      "https://cdn.idntimes.com/content-images/post/20211019/203152501-4176779059011518-795637125163020240-n-c5aa3d72f7ca0ec57070d7c1a60cf2b2_600x400.jpg",
    ingredients: [
      "1 kg Daging Babi",
      "200 gr Kelapa Parut Setengah Tua",
      "100 gr Kacang Panjang",
      "50 gr Base Genep (bumbu dasar Bali)",
      "10 lembar Daun Jeruk",
      "5 lembar Daun Salam",
      "2 batang Serai",
      "Garam dan Gula Merah secukupnya",
    ],
    steps: [
      "Rebus daging babi hingga empuk, potong kecil-kecil.",
      "Potong kacang panjang kecil-kecil, rebus sebentar.",
      "Sangrai kelapa parut hingga kecokelatan.",
      "Tumis base genep dengan sedikit minyak hingga harum.",
      "Campur daging babi, kacang panjang, kelapa sangrai, dan bumbu tumis.",
      "Aduk rata semua bahan hingga tercampur sempurna.",
      "Bumbui dengan garam dan gula merah.",
      "Sajikan lawar dengan nasi putih dan sate lilit.",
    ],
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        user: "Ketut",
        rating: 5,
        text: "Rasa Bali banget, enak untuk upacara!",
        date: "2025-03-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-10",
    isPublic: true,
  },

  // KATEGORI: SEAFOOD (10 resep)
  {
    id: "ikan-bakar",
    title: "Ikan Bakar Jimbaran (Bali)",
    category: "Seafood",
    duration: "1 jam + Marinasi 1 jam",
    portion: "4 orang",
    description:
      "Ikan segar bakar khas Pantai Jimbaran dengan bumbu kuning yang khas dan disajikan dengan sambal matah.",
    imagePlaceholder: "16a085/ffffff?text=IKAN+BAKAR+BALI",
    imageUrl:
      "https://img.herstory.co.id/articles/archive_20221201/ikan-bakar-20221201-071601.jpg",
    ingredients: [
      "2 ekor Ikan Kakap atau Kerapu",
      "5 siung Bawang Putih",
      "3 cm Kunyit, 2 cm Jahe",
      "2 buah Jeruk Nipis",
      "Daun Pisang untuk membungkus",
      "Minyak untuk olesan",
      "Garam dan Merica",
      "Sambal Matah",
    ],
    steps: [
      "Bersihkan ikan, beri perasan jeruk nipis dan garam.",
      "Haluskan bawang putih, kunyit, jahe.",
      "Lumuri ikan dengan bumbu halus, diamkan 1 jam.",
      "Bungkus ikan dengan daun pisang.",
      "Bakar di atas bara api hingga matang.",
      "Sajikan dengan sambal matah dan nasi hangat.",
    ],
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        user: "Putu",
        rating: 5,
        text: "Rasanya seperti di Pantai Jimbaran!",
        date: "2025-01-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-11",
    isPublic: true,
  },
  {
    id: "pepes-ikan-mas",
    title: "Pepes Ikan Mas",
    category: "Seafood",
    duration: "1.5 jam",
    portion: "4 orang",
    description:
      "Ikan mas dibumbui rempah segar dan dibungkus daun pisang, kemudian dikukus hingga matang sempurna. Harum daun pisang dan bumbu yang meresap membuat ikan semakin lezat.",
    imagePlaceholder: "f1c40f/ffffff?text=PEPES+IKAN+MAS",
    imageUrl:
      "https://resepkoki.id/wp-content/uploads/2017/11/Resep-Pepes-Ikan-Mas-Sunda.jpg",
    ingredients: [
      "1 ekor Ikan Mas (500-600 gr)",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "3 cm Kunyit",
      "2 cm Jahe",
      "5 buah Cabai Rawit",
      "2 lembar Daun Salam",
      "Daun Pisang untuk membungkus",
    ],
    steps: [
      "Bersihkan ikan, belah perut dan buang isinya, cuci bersih.",
      "Haluskan bawang merah, bawang putih, kunyit, jahe, dan cabai rawit.",
      "Lumuri ikan dengan bumbu halus hingga merata, masukkan ke dalam perut ikan juga.",
      "Siapkan daun pisang, letakkan daun salam di atasnya.",
      "Taruh ikan di atas daun pisang, bungkus rapat dan sematkan dengan lidi.",
      "Kukus selama 45 menit hingga ikan matang sempurna.",
      "Bisa juga dibakar sebentar setelah dikukus untuk aroma yang lebih harum.",
      "Sajikan panas dengan nasi putih dan sambal terasi.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Wati",
        rating: 5,
        text: "Harum daun pisangnya menggugah selera!",
        date: "2025-03-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-12",
    isPublic: true,
  },
  {
    id: "cumi-asam-manis",
    title: "Cumi Asam Manis",
    category: "Seafood",
    duration: "25 menit",
    portion: "3 orang",
    description:
      "Cumi segar dengan saus asam manis yang segar dan menggugah selera. Kombinasi rasa manis, asam, dan gurih yang pas.",
    imagePlaceholder: "FF6347/ffffff?text=CUMI+ASAM+MANIS",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ipkfvNnwgq13ldG5H-IBFAHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "500 gr Cumi Segar",
      "1 buah Paprika Merah",
      "1 buah Paprika Hijau",
      "1 buah Bawang Bombay",
      "3 siung Bawang Putih",
      "3 sdm Saus Tomat",
      "2 sdm Saus Sambal",
      "1 sdm Kecap Manis",
      "1 sdm Air Jeruk Nipis",
      "Garam, Gula, Merica",
    ],
    steps: [
      "Bersihkan cumi, buang tulang plastik dan tintanya.",
      "Iris cumi bentuk cincin atau sesuai selera.",
      "Tumis bawang putih dan bawang bombay hingga harum.",
      "Masukkan paprika, tumis hingga sedikit layu.",
      "Tambahkan saus tomat, saus sambal, kecap manis, dan air jeruk nipis.",
      "Masukkan cumi, aduk rata dan masak hingga cumi matang (jangan terlalu lama agar tidak alot).",
      "Bumbui dengan garam, gula, dan merica sesuai selera.",
      "Sajikan hangat dengan nasi putih.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Rudi",
        rating: 5,
        text: "Asam manisnya pas, cuminya empuk!",
        date: "2025-02-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-13",
    isPublic: true,
  },
  {
    id: "udang-balado",
    title: "Udang Balado (Padang)",
    category: "Seafood",
    duration: "30 menit",
    portion: "3-4 orang",
    description:
      "Udang segar dengan sambal balado khas Padang yang pedas dan menggugah selera. Rasa pedas dari cabai merah yang segar.",
    imagePlaceholder: "e74c3c/ffffff?text=UDANG+BALADO",
    imageUrl:
      "https://cdn.idntimes.com/content-images/community/2023/05/screenshot-20230516-173843-instagram-d3d5f7bf15788283d4d39394399f0745.jpg",
    ingredients: [
      "500 gr Udang Besar",
      "10 buah Cabai Merah Besar",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "2 buah Tomat",
      "2 lembar Daun Jeruk",
      "1 sdm Air Asam Jawa",
      "Garam dan Gula secukupnya",
    ],
    steps: [
      "Bersihkan udang, buang kepala dan kulitnya (bisa dibiarkan kulitnya sesuai selera).",
      "Goreng udang sebentar hingga berubah warna, angkat dan tiriskan.",
      "Haluskan cabai merah, bawang merah, bawang putih, dan tomat.",
      "Tumis bumbu halus bersama daun jeruk hingga harum dan matang.",
      "Masukkan udang yang sudah digoreng, aduk rata.",
      "Tambahkan air asam jawa, garam, dan gula.",
      "Masak sebentar hingga bumbu meresap.",
      "Sajikan dengan nasi hangat.",
    ],
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        user: "Andi",
        rating: 5,
        text: "Pedasnya nendang, udangnya segar!",
        date: "2025-02-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-14",
    isPublic: true,
  },
  {
    id: "kepiting-lada-hitam",
    title: "Kepiting Lada Hitam",
    category: "Seafood",
    duration: "40 menit",
    portion: "3-4 orang",
    description:
      "Kepiting segar dengan saus lada hitam yang gurih dan pedas. Rasa lada hitam yang kuat memberikan sensasi hangat dan nikmat.",
    imagePlaceholder: "2c3e50/ffffff?text=KEPITING+LADA+HITAM",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.KMTuLvL17c3XW_cgX-OquAHaJD?cb=ucfimg2&ucfimg=1&w=1080&h=1320&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "2 ekor Kepiting Segar",
      "2 sdm Lada Hitam Butiran",
      "1 buah Bawang Bombay",
      "5 siung Bawang Putih",
      "2 cm Jahe",
      "3 sdm Saus Tiram",
      "1 sdm Kecap Manis",
      "Daun Bawang dan Seledri",
      "Minyak untuk menumis",
    ],
    steps: [
      "Bersihkan kepiting, pecahkan cangkangnya agar bumbu meresap.",
      "Tumbuk kasar lada hitam butiran.",
      "Tumis bawang bombay, bawang putih, dan jahe iris hingga harum.",
      "Masukkan kepiting, aduk rata.",
      "Tambahkan lada hitam, saus tiram, dan kecap manis.",
      "Beri sedikit air, masak hingga kepiting matang dan bumbu meresap.",
      "Masukkan daun bawang dan seledri iris.",
      "Sajikan hangat dengan nasi putih.",
    ],
    ratings: [4, 5, 4, 5, 4],
    comments: [
      {
        user: "Susan",
        rating: 5,
        text: "Lada hitamnya terasa banget, kepitingnya segar!",
        date: "2025-02-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-15",
    isPublic: true,
  },
  {
    id: "gurame-bakar",
    title: "Gurame Bakar Bumbu Rica",
    category: "Seafood",
    duration: "1 jam + Marinasi 2 jam",
    portion: "4 orang",
    description:
      "Ikan gurame bakar dengan bumbu rica-rica khas Manado yang pedas dan segar. Perpaduan rasa pedas, asam, dan gurih.",
    imagePlaceholder: "27ae60/ffffff?text=GURAME+BAKAR",
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2022/04/20/resep-gurame-bakar-bumbu-kecap-cabe.jpeg",
    ingredients: [
      "1 ekor Ikan Gurame (700-800 gr)",
      "10 buah Cabai Rawit",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "2 cm Kunyit",
      "2 cm Jahe",
      "2 buah Jeruk Nipis",
      "Daun Kemangi",
      "Garam dan Gula",
    ],
    steps: [
      "Bersihkan ikan, beri perasan jeruk nipis dan garam, diamkan 15 menit.",
      "Haluskan cabai rawit, bawang merah, bawang putih, kunyit, dan jahe.",
      "Lumuri ikan dengan bumbu halus hingga merata, diamkan minimal 2 jam.",
      "Panaskan panggangan, olesi dengan minyak.",
      "Bakar ikan di atas api sedang hingga matang, bolak-balik.",
      "Selama membakar, olesi dengan sisa bumbu.",
      "Sajikan dengan daun kemangi, nasi hangat, dan sambal dabu-dabu.",
    ],
    ratings: [4, 5, 4, 5, 4],
    comments: [
      {
        user: "Susan",
        rating: 5,
        text: "Pedasnya segar, ikannya gurih!",
        date: "2025-02-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-16",
    isPublic: true,
  },
  {
    id: "cah-kangkung",
    title: "Cah Kangkung",
    category: "Seafood",
    duration: "15 menit",
    portion: "3 orang",
    description:
      "Kangkung segar ditumis dengan bumbu sederhana namun penuh rasa. Sayuran yang masih renyah dengan rasa gurih dan sedap.",
    imagePlaceholder: "2ecc71/ffffff?text=CAH+KANGKUNG",
    imageUrl:
      "https://img.qraved.co/v2/image/data/2017/03/02/1000x667_cahkangkung-640x426-x.jpg",
    ingredients: [
      "2 ikat Kangkung",
      "5 siung Bawang Putih",
      "3 siung Bawang Merah",
      "5 buah Cabai Rawit",
      "2 sdm Saus Tiram",
      "1 sdm Kecap Manis",
      "Garam dan Merica",
      "Minyak untuk menumis",
    ],
    steps: [
      "Bersihkan kangkung, potong bagian batang yang keras.",
      "Iris tipis bawang merah, bawang putih, dan cabai rawit.",
      "Panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.",
      "Masukkan kangkung, aduk rata.",
      "Tambahkan saus tiram, kecap manis, garam, dan merica.",
      "Masak sebentar hingga kangkung layu tapi masih renyah.",
      "Sajikan segera sebagai pendamping nasi.",
    ],
    ratings: [4, 4, 5, 4],
    comments: [
      {
        user: "Maya",
        rating: 5,
        text: "Sehat dan enak, masaknya cepat!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-17",
    isPublic: true,
  },
  {
    id: "bandeng-presto",
    title: "Bandeng Presto (Jawa)",
    category: "Seafood",
    duration: "2 jam",
    portion: "6 orang",
    description:
      "Ikan bandeng dimasak dalam panci presto hingga duri-durinya lunak dan bisa dimakan. Tekstur daging yang lembut dan bumbu yang meresap.",
    imagePlaceholder: "3498db/ffffff?text=BANDENG+PRESTO",
    imageUrl:
      "https://wiratech.co.id/wp-content/uploads/2023/12/Bandeng-Presto.jpgo.azure.epicor.com/bandeng-presto.jpg",
    ingredients: [
      "2 ekor Ikan Bandeng Besar",
      "5 siung Bawang Putih",
      "5 siung Bawang Merah",
      "3 cm Kunyit",
      "2 cm Jahe",
      "2 sdm Air Asam Jawa",
      "2 lembar Daun Salam",
      "Garam dan Gula secukupnya",
    ],
    steps: [
      "Bersihkan ikan bandeng, buang sisik dan isi perutnya.",
      "Haluskan bawang merah, bawang putih, kunyit, dan jahe.",
      "Lumuri ikan dengan bumbu halus, diamkan 30 menit.",
      "Siapkan panci presto, susun ikan di dalamnya.",
      "Tambahkan air secukupnya (jangan terlalu banyak), daun salam, air asam jawa, garam, dan gula.",
      "Tutup panci presto, masak selama 1-1.5 jam hingga duri lunak.",
      "Setelah matang, bisa disajikan langsung atau digoreng sebentar.",
      "Sajikan dengan nasi putih dan sambal terasi.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Bambang",
        rating: 5,
        text: "Durinya lunak semua, enak dan aman dimakan!",
        date: "2025-03-01",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-18",
    isPublic: true,
  },
  {
    id: "soto-kepiting",
    title: "Soto Kepiting (Jawa Timur)",
    category: "Seafood",
    duration: "2 jam",
    portion: "6-8 orang",
    description:
      "Soto dengan kaldu kepiting yang gurih dan kaya rasa. Disajikan dengan daging kepiting, bihun, dan sayuran segar.",
    imagePlaceholder: "FF8C00/ffffff?text=SOTO+KEPITING",
    imageUrl:
      "hhttps://kulinerkota.com/wp-content/uploads/2021/01/kepiting-otok.jpg",
    ingredients: [
      "3 ekor Kepiting Segar",
      "200 gr Bihun",
      "100 gr Tauge",
      "2 buah Tomat",
      "3 batang Daun Bawang",
      "2 batang Seledri",
      "Bumbu Halus: 8 siung bawang merah, 5 siung bawang putih, 3 cm kunyit, 2 cm jahe",
      "Serai, Daun Salam, Lengkuas",
      "Garam dan Kaldu Kepiting",
    ],
    steps: [
      "Rebus kepiting hingga matang, ambil dagingnya, simpan kaldu rebusan.",
      "Tumis bumbu halus dengan serai, daun salam, dan lengkuas hingga harum.",
      "Masukkan kaldu kepiting, didihkan.",
      "Bumbui dengan garam dan kaldu kepiting.",
      "Siapkan mangkuk, isi dengan bihun yang sudah direbus, tauge, tomat iris, daun bawang, dan seledri.",
      "Tambahkan daging kepiting di atasnya.",
      "Siram dengan kuah soto panas.",
      "Sajikan dengan sambal dan perasan jeruk nipis.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Tina",
        rating: 5,
        text: "Kuahnya gurih banget dari kaldu kepiting!",
        date: "2025-02-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-19",
    isPublic: true,
  },
  {
    id: "kerang-saus-padang",
    title: "Kerang Ijo Saus Padang",
    category: "Seafood",
    duration: "30 menit",
    portion: "4 orang",
    description:
      "Kerang hijau segar dimasak dengan saus Padang yang pedas, asam, manis, dan gurih. Rasa saus yang khas dan kerang yang empuk.",
    imagePlaceholder: "8e44ad/ffffff?text=KERANG+SAUS+PADANG",
    imageUrl:
      "https://www.omahresep.com/wp-content/uploads/2022/01/209202580_4367262613305741_8839564509801657278_n-1041x1300.jpg",
    ingredients: [
      "1 kg Kerang Hijau",
      "5 siung Bawang Putih",
      "1 buah Bawang Bombay",
      "10 buah Cabai Merah",
      "2 buah Tomat",
      "2 sdm Saus Tomat",
      "1 sdm Saus Sambal",
      "1 sdm Saus Tiram",
      "Daun Bawang dan Seledri",
    ],
    steps: [
      "Bersihkan kerang hijau, rendam dengan air garam untuk mengeluarkan pasir.",
      "Rebus kerang sebentar hingga cangkang terbuka, tiriskan.",
      "Haluskan cabai merah, bawang putih, dan tomat.",
      "Tumis bawang bombay hingga harum, masukkan bumbu halus.",
      "Tambahkan saus tomat, saus sambal, dan saus tiram.",
      "Masukkan kerang, aduk rata.",
      "Beri sedikit air, masak hingga bumbu meresap.",
      "Taburi daun bawang dan seledri iris, sajikan hangat.",
    ],
    ratings: [4, 5, 4, 4],
    comments: [
      {
        user: "Yudi",
        rating: 5,
        text: "Kerangnya empuk, saus Padangnya autentik!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-20",
    isPublic: true,
  },
  // KATEGORI: SAYURAN (10 resep)
  {
    id: "gado-gado",
    title: "Gado-Gado Jakarta",
    category: "Sayuran",
    duration: "1 jam",
    portion: "6 orang",
    description:
      "Salad sayur khas Indonesia dengan saus kacang yang kental dan gurih, disajikan dengan lontong.",
    imagePlaceholder: "f39c12/ffffff?text=GADO+GADO",
    imageUrl:
      "https://www.cookmeindonesian.com/wp-content/uploads/2022/06/gado-gado-jakarta2.jpg",
    ingredients: [
      "100 gr Kacang Panjang",
      "100 gr Tauge",
      "100 gr Kol",
      "2 buah Kentang",
      "2 buah Telur Rebus",
      "100 gr Tahu dan Tempe Goreng",
      "Lontong atau Nasi",
      "Bahan Saus Kacang",
    ],
    steps: [
      "Rebus semua sayuran secara terpisah.",
      "Goreng tahu dan tempe hingga kecokelatan.",
      "Rebus kentang hingga matang, potong dadu.",
      "Siapkan piring, tata sayuran, tahu, tempe, kentang, dan telur.",
      "Siram dengan saus kacang.",
      "Sajikan dengan lontong atau nasi.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Nina",
        rating: 5,
        text: "Saus kacangnya enak banget!",
        date: "2025-01-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-21",
    isPublic: true,
  },
  {
    id: "karedok",
    title: "Karedok (Sunda)",
    category: "Sayuran",
    duration: "30 menit",
    portion: "4 orang",
    description:
      "Salad sayur mentah khas Sunda dengan saus kacang yang pedas dan segar. Sayuran segar yang tidak dimasak memberikan tekstur renyah.",
    imagePlaceholder: "16a085/ffffff?text=KAREDOK",
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2022/02/06/resep-karedok-sunda-1_43.jpeg?w=700&q=90",
    ingredients: [
      "100 gr Kacang Panjang muda",
      "100 gr Tauge",
      "100 gr Kol",
      "1 buah Mentimun",
      "1 buah Terong lalap",
      "2 sdm Kacang Tanah Sangrai",
      "5 buah Cabai Rawit",
      "2 siung Bawang Putih",
      "2 sdm Gula Merah",
      "Air Asam Jawa secukupnya",
    ],
    steps: [
      "Iris tipis semua sayuran (kacang panjang, kol, mentimun, terong).",
      "Cuci tauge hingga bersih.",
      "Haluskan kacang tanah, cabai rawit, bawang putih, dan gula merah.",
      "Campur bumbu halus dengan air asam jawa, aduk hingga menjadi saus kental.",
      "Campur semua sayuran dengan saus kacang.",
      "Aduk hingga rata dan semua sayuran terlumuri saus.",
      "Sajikan segera dengan kerupuk atau emping.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Sandi",
        rating: 5,
        text: "Segar dan pedas, perfect!",
        date: "2025-02-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-22",
    isPublic: true,
  },
  {
    id: "sayur-asem",
    title: "Sayur Asem Jawa Barat",
    category: "Sayuran",
    duration: "45 menit",
    portion: "5 orang",
    description:
      "Sayur bening dengan rasa asam segar dari asam jawa dan berbagai sayuran segar. Cocok dinikmati saat cuaca panas.",
    imagePlaceholder: "27ae60/ffffff?text=SAYUR+ASEM",
    imageUrl:
      "https://www.primarasa.co.id/images/images/Sayur%20Asem%20-%20Resep(2).jpg",
    ingredients: [
      "100 gr Kacang Panjang",
      "100 gr Labu Siam",
      "2 buah Jagung Manis",
      "5 buah Kacang Tanah",
      "2 sdm Asam Jawa",
      "3 siung Bawang Merah",
      "2 siung Bawang Putih",
      "1 sdt Terasi (opsional)",
      "Garam dan Gula",
    ],
    steps: [
      "Rebus air hingga mendidih.",
      "Masukkan jagung dan kacang tanah, rebus hingga setengah matang.",
      "Masukkan labu siam dan kacang panjang.",
      "Tambahkan bawang merah dan bawang putih iris.",
      "Beri asam jawa yang sudah dilarutkan dengan air, garam, dan gula.",
      "Masak hingga semua sayuran matang.",
      "Koreksi rasa, tambahkan terasi jika suka.",
      "Sajikan hangat dengan nasi dan sambal terasi.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Dian",
        rating: 5,
        text: "Asamnya segar, cocok untuk cuaca panas!",
        date: "2025-01-30",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-23",
    isPublic: true,
  },
  {
    id: "tumis-kangkung",
    title: "Tumis Kangkung Terasi",
    category: "Sayuran",
    duration: "15 menit",
    portion: "3 orang",
    description:
      "Kangkung segar ditumis dengan terasi dan bumbu sederhana. Masak cepat untuk menu sehari-hari yang sehat dan lezat.",
    imagePlaceholder: "2ecc71/ffffff?text=TUMIS+KANGKUNG",
    imageUrl:
      "https://th.bing.com/th/id/OIP.QqM-0YQyyBMgrCuPQhC_ewHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "2 ikat Kangkung",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "5 buah Cabai Rawit",
      "1 sdt Terasi",
      "1 sdm Saus Tiram",
      "Garam dan Gula secukupnya",
      "Minyak untuk menumis",
    ],
    steps: [
      "Bersihkan kangkung, potong-potong.",
      "Iris tipis bawang merah, bawang putih, dan cabai rawit.",
      "Panaskan minyak, tumis terasi hingga harum.",
      "Masukkan bawang merah, bawang putih, dan cabai, tumis hingga harum.",
      "Masukkan kangkung, aduk rata.",
      "Tambahkan saus tiram, garam, dan gula.",
      "Masak sebentar hingga kangkung layu tapi masih renyah.",
      "Sajikan hangat dengan nasi.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Harum terasinya menggugah selera!",
        date: "2025-02-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-24",
    isPublic: true,
  },
  {
    id: "capcay-sayuran",
    title: "Capcay Sayuran",
    category: "Sayuran",
    duration: "30 menit",
    portion: "4 orang",
    description:
      "Tumis berbagai sayuran dengan saus tiram yang gurih, bisa ditambahkan ayam atau seafood. Sayuran tetap renyah dengan saus yang lezat.",
    imagePlaceholder: "e74c3c/ffffff?text=CAPCAY+SAYURAN",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gXhr-ezCpPjta2AIKutNmQHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "100 gr Brokoli",
      "100 gr Kembang Kol",
      "1 buah Wortel",
      "5 buah Jamur Kuping",
      "5 buah Jagung Putren",
      "1 buah Sawi Putih",
      "3 siung Bawang Putih",
      "2 sdm Saus Tiram",
      "Garam dan Merica",
    ],
    steps: [
      "Potong semua sayuran sesuai selera.",
      "Tumis bawang putih hingga harum.",
      "Masukkan wortel dan jagung putren, tumis sebentar.",
      "Masukkan brokoli, kembang kol, dan jamur.",
      "Tambahkan sawi putih.",
      "Beri sedikit air, masak hingga sayuran matang tapi masih renyah.",
      "Beri saus tiram, garam, dan merica.",
      "Sajikan hangat dengan nasi.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Linda",
        rating: 5,
        text: "Sayurannya masih crunchy, enak!",
        date: "2025-02-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-25",
    isPublic: true,
  },
  {
    id: "pecel",
    title: "Pecel (Jawa Timur)",
    category: "Sayuran",
    duration: "1 jam",
    portion: "5-6 orang",
    description:
      "Sayuran rebus disajikan dengan saus kacang pedas khas Jawa Timur. Biasanya disajikan dengan nasi atau lontong.",
    imagePlaceholder: "d4ac0d/ffffff?text=PECEL",
    imageUrl:
      "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2023/05/11/resep-pecel-madiun-menu-simple-20230511022024.jpg",
    ingredients: [
      "100 gr Kacang Panjang",
      "100 gr Tauge",
      "100 gr Bayam",
      "100 gr Kangkung",
      "1 buah Mentimun",
      "150 gr Kacang Tanah Sangrai",
      "5 buah Cabai Rawit",
      "3 siung Bawang Putih",
      "2 sdm Gula Merah",
      "Asam Jawa dan Kencur secukupnya",
    ],
    steps: [
      "Rebus semua sayuran secara terpisah hingga matang, tiriskan.",
      "Haluskan kacang tanah, cabai rawit, bawang putih, gula merah, dan kencur.",
      "Campur bumbu halus dengan air asam jawa hingga menjadi saus kental.",
      "Siapkan piring, tata sayuran rebus.",
      "Siram dengan saus pecel.",
      "Sajikan dengan nasi, lontong, atau peyek.",
    ],
    ratings: [5, 4, 5, 4],
    comments: [
      {
        user: "Toni",
        rating: 5,
        text: "Saus kacangnya pedas dan gurih!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-26",
    isPublic: true,
  },
  {
    id: "lalapan-sambal",
    title: "Lalapan dengan Sambal",
    category: "Sayuran",
    duration: "20 menit",
    portion: "4 orang",
    description:
      "Sayuran segar mentah disajikan dengan berbagai jenis sambal. Menu sehat yang menyegarkan dan cocok dengan berbagai lauk.",
    imagePlaceholder: "27ae60/ffffff?text=LALAPAN+SAMBAL",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/b6e75df2f705bb4b/751x532cq70/lalapan-sederhana-ikan-asin-sambel-terasi-bakar-foto-resep-utama.jpg",
    ingredients: [
      "1 ikat Selada",
      "1 buah Timun",
      "1 buah Tomat",
      "5 lembar Kol",
      "5 buah Cabai Rawit",
      "2 siung Bawang Putih",
      "2 siung Bawang Merah",
      "1 buah Tomat untuk sambal",
      "Terasi dan Garam secukupnya",
    ],
    steps: [
      "Cuci bersih semua sayuran untuk lalapan.",
      "Potong timun dan tomat sesuai selera.",
      "Untuk sambal: ulek cabai rawit, bawang putih, bawang merah, tomat, dan terasi.",
      "Tambahkan garam secukupnya.",
      "Sajikan lalapan dengan sambal di atas cobek atau piring kecil.",
      "Bisa ditambahkan perasan jeruk limau pada sambal jika suka.",
      "Sajikan bersama nasi dan lauk pilihan.",
    ],
    ratings: [4, 5, 4, 4],
    comments: [
      {
        user: "Sari",
        rating: 5,
        text: "Sederhana tapi selalu bikin nambah nasi!",
        date: "2025-02-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-27",
    isPublic: true,
  },
  {
    id: "urap-sayuran",
    title: "Urap Sayuran (Jawa)",
    category: "Sayuran",
    duration: "45 menit",
    portion: "5 orang",
    description:
      "Campuran sayuran rebus dengan parutan kelapa berbumbu yang gurih dan pedas. Kelapa sangrai memberikan aroma yang khas.",
    imagePlaceholder: "f1c40f/ffffff?text=URAP+SAYURAN",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/a2848f70425bc2b4/680x482cq70/urap-jawa-foto-resep-utama.jpg",
    ingredients: [
      "100 gr Kacang Panjang",
      "100 gr Tauge",
      "100 gr Bayam",
      "1 buah Kelapa Parut (setengah tua)",
      "5 buah Cabai Rawit",
      "3 siung Bawang Putih",
      "2 sdm Gula Merah",
      "Garam secukupnya",
    ],
    steps: [
      "Rebus semua sayuran secara terpisah, tiriskan.",
      "Haluskan cabai rawit, bawang putih, garam, dan gula merah.",
      "Campur bumbu halus dengan kelapa parut.",
      "Kukus campuran kelapa selama 15 menit.",
      "Campur sayuran dengan kelapa berbumbu.",
      "Aduk hingga semua sayuran terlumuri bumbu.",
      "Sajikan sebagai lauk pendamping.",
    ],
    ratings: [5, 4, 5, 4],
    comments: [
      {
        user: "Toni",
        rating: 5,
        text: "Kelapanya wangi, bumbunya pas!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-28",
    isPublic: true,
  },
  {
    id: "tahu-tempe-kuah-santan",
    title: "Tahu Tempe Kuah Santan",
    category: "Sayuran",
    duration: "40 menit",
    portion: "4 orang",
    description:
      "Tahu dan tempe dimasak dalam kuah santan yang gurih dengan bumbu kuning. Menu sederhana namun mengenyangkan.",
    imagePlaceholder: "FFA500/ffffff?text=TAHU+TEMPE+SANTAN",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/61cd417afe564463/680x482cq70/tahu-tempe-kuah-santan-foto-resep-utama.jpg",
    ingredients: [
      "5 buah Tahu Putih",
      "2 papan Tempe",
      "500 ml Santan",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "3 cm Kunyit",
      "2 cm Jahe",
      "2 lembar Daun Salam",
      "Serai dan Lengkuas",
    ],
    steps: [
      "Potong tahu dan tempe sesuai selera.",
      "Goreng tahu dan tempe setengah matang.",
      "Haluskan bawang merah, bawang putih, kunyit, dan jahe.",
      "Tumis bumbu halus dengan daun salam, serai, dan lengkuas hingga harum.",
      "Masukkan santan, aduk terus agar tidak pecah.",
      "Masukkan tahu dan tempe yang sudah digoreng.",
      "Masak dengan api kecil hingga bumbu meresap.",
      "Bumbui dengan garam dan gula, sajikan hangat.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Budi",
        rating: 5,
        text: "Gurihnya santan pas banget!",
        date: "2025-03-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-29",
    isPublic: true,
  },
  {
    id: "perkedel-kentang",
    title: "Perkedel Kentang",
    category: "Sayuran",
    duration: "1 jam",
    portion: "4-5 orang",
    description:
      "Kentang tumbuk dicampur dengan daging sapi cincang dan bumbu, dibentuk bulat lalu digoreng hingga kecokelatan. Cocok untuk lauk atau camilan.",
    imagePlaceholder: "DAA520/ffffff?text=PERKEDEL+KENTANG",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mfnGtNhRiu1oK9AMNlnNHwHaFj?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "500 gr Kentang",
      "100 gr Daging Sapi Cincang",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "2 batang Daun Bawang",
      "2 batang Seledri",
      "2 butir Telur",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Kupas kentang, potong-potong, goreng atau kukus hingga matang.",
      "Haluskan kentang dengan ditumbuk (jangan diblender).",
      "Tumis bawang merah dan bawang putih iris hingga harum, masukkan daging cincang, masak hingga matang.",
      "Campur kentang tumbuk dengan tumisan daging, daun bawang, seledri, garam, dan merica.",
      "Bentuk adonan menjadi bulatan pipih.",
      "Kocok telur, celupkan perkedel ke dalam telur.",
      "Goreng dalam minyak panas hingga kecokelatan.",
      "Sajikan sebagai lauk pendamping.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Lembut di dalam, renyah di luar!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-30",
    isPublic: true,
  },

  // KATEGORI: MAKANAN RINGAN (10 resep)
  {
    id: "martabak-telur",
    title: "Martabak Telur (Sumatra)",
    category: "Makanan Ringan",
    duration: "1.5 jam",
    portion: "6-8 orang",
    description:
      "Martabak dengan kulit tipis renyah berisi campuran daging sapi cincang, telur, dan bumbu rempah. Sering disajikan dengan acar dan saus kari.",
    imagePlaceholder: "d35400/ffffff?text=MARTABAK+TELUR",
    imageUrl:
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/11/Resep-Martabak-telur.jpg?fit=1300%2C1235&ssl=1",
    ingredients: [
      "250 gr Tepung Terigu",
      "1 butir Telur",
      "400 ml Air",
      "300 gr Daging Sapi Cincang",
      "3 butir Telur (untuk isian)",
      "2 buah Bawang Bombay",
      "5 siung Bawang Putih",
      "3 batang Daun Bawang",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Campur tepung, telur, dan air, aduk hingga menjadi adonan encer, diamkan 30 menit.",
      "Tumis bawang bombay dan bawang putih hingga harum, masukkan daging cincang, masak hingga matang.",
      "Tambahkan daun bawang iris, garam, dan merica.",
      "Panaskan wajan dengan sedikit minyak, tuang adonan kulit, ratakan tipis-tipis.",
      "Setelah kulit setengah matang, beri isian daging dan pecahkan 1 butir telur di atasnya.",
      "Lipat kulit martabak menjadi bentuk persegi, tekan-tekan pinggirannya.",
      "Goreng hingga kecokelatan dan renyah, angkat, tiriskan.",
      "Potong-potong, sajikan dengan acar dan saus kari.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Dewi",
        rating: 5,
        text: "Renyaah banget kulitnya, isiannya gurih!",
        date: "2025-02-01",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-01-31",
    isPublic: true,
  },
  {
    id: "pastel",
    title: "Pastel Goreng",
    category: "Makanan Ringan",
    duration: "1.5 jam",
    portion: "25 buah",
    description:
      "Kulit pastel yang renyah berisi sayuran dan bihun, digoreng hingga kecokelatan. Camilan gurih yang cocok untuk berbagai acara.",
    imagePlaceholder: "f1c40f/ffffff?text=PASTEL+GORENG",
    imageUrl:
      "https://tse1.mm.bing.net/th/id/OIP.TRqMbY2YwkEiofyoUhejewHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "250 gr Tepung Terigu",
      "50 gr Margarin",
      "1 butir Telur",
      "100 ml Air",
      "Isian: Wortel, Kol, Bihun, Ayam Cincang",
      "Bumbu: Bawang Putih, Merica, Garam",
      "Minyak untuk menggoreng",
      "Telur untuk perekat",
    ],
    steps: [
      "Campur tepung, margarin, telur, dan air, uleni hingga kalis.",
      "Diamkan adonan 30 menit.",
      "Tumis bumbu untuk isian, masukkan sayuran dan ayam.",
      "Ambil sejumput adonan, pipihkan, beri isian.",
      "Lipat dan rekatkan dengan telur.",
      "Goreng dalam minyak panas hingga kecokelatan.",
      "Angkat dan tiriskan.",
      "Sajikan hangat dengan saus sambal.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Toni",
        rating: 5,
        text: "Kulitnya renyah, isiannya gurih!",
        date: "2025-02-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-01",
    isPublic: true,
  },
  {
    id: "lemper-ayam",
    title: "Lemper Ayam",
    category: "Makanan Ringan",
    duration: "2 jam",
    portion: "15 buah",
    description:
      "Ketupat pulen berisi ayam suwir dibungkus daun pisang, cocok untuk camilan atau bekal. Tekstur ketan yang kenyal dan isian ayam yang gurih.",
    imagePlaceholder: "f1c40f/ffffff?text=LEMPER+AYAM",
    imageUrl:
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/03/Resep-Lemper-Ayam.jpg?fit=1444%2C1382&ssl=1",
    ingredients: [
      "500 gr Beras Ketan",
      "300 ml Santan",
      "200 gr Ayam Suwir",
      "5 siung Bawang Merah",
      "3 siung Bawang Putih",
      "Daun Pisang",
      "Garam dan Gula",
      "Minyak untuk menumis",
    ],
    steps: [
      "Rendam beras ketan semalaman, kukus hingga setengah matang.",
      "Campur ketan dengan santan dan garam, kukus kembali hingga matang.",
      "Tumis bumbu halus, masukkan ayam suwir, beri garam dan gula.",
      "Ambil ketan, pipihkan, beri ayam suwir, gulung.",
      "Bungkus dengan daun pisang.",
      "Kukus sebentar agar daun pisang layu.",
      "Bisa juga dipanggang sebentar.",
      "Sajikan hangat atau dingin.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Budi",
        rating: 5,
        text: "Ketannya pulen, ayam suwirnya gurih!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-02",
    isPublic: true,
  },
  {
    id: "risoles",
    title: "Risoles Mayo",
    category: "Makanan Ringan",
    duration: "2 jam",
    portion: "20 buah",
    description:
      "Kulit risoles yang lembut berisi sayuran dan mayonaise, digoreng tepung panir hingga renyah. Isian creamy dengan kulit yang crispy.",
    imagePlaceholder: "f39c12/ffffff?text=RISOLES+MAYO",
    imageUrl:
      "https://asset.kompas.com/crops/SxpOoy1cPpEkGyNPzNBbTLywlkQ=/205x17:858x453/750x500/data/photo/2021/07/13/60ed5b53cf277.jpg",
    ingredients: [
      "Kulit: Tepung Terigu, Telur, Susu Cair",
      "Isian: Wortel, Kentang, Daging Ayam, Mayonaise",
      "Pelapis: Telur, Tepung Panir",
      "Bumbu: Bawang Putih, Merica, Garam",
      "Minyak untuk menggoreng",
      "Seledri untuk isian",
      "Margarin untuk menumis",
      "Tepung Maizena untuk pengental",
    ],
    steps: [
      "Buat kulit risoles: campur tepung, telur, susu, masak seperti dadar.",
      "Tumis bumbu, masukkan sayuran dan ayam, beri maizena.",
      "Ambil selembar kulit, beri isian dan mayonaise, lipat.",
      "Celupkan risoles ke telur, gulingkan di tepung panir.",
      "Goreng dalam minyak panas hingga kecokelatan.",
      "Angkat dan tiriskan.",
      "Sajikan hangat dengan saus sambal.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Linda",
        rating: 5,
        text: "Renyaah banget, mayonaise nya melimpah!",
        date: "2025-02-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-03",
    isPublic: true,
  },
  {
    id: "pisang-goreng",
    title: "Pisang Goreng Kriuk",
    category: "Makanan Ringan",
    duration: "30 menit",
    portion: "4 orang",
    description:
      "Pisang raja atau kepok dibalut adonan tepung yang renyah, digoreng hingga kecokelatan. Camilan sederhana yang selalu disukai.",
    imagePlaceholder: "f39c12/ffffff?text=PISANG+GORENG",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.DIHTMD7GPKmpoC2dp3TFGAHaIF?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "6 buah Pisang Kepok atau Raja",
      "100 gr Tepung Terigu",
      "2 sdm Tepung Beras",
      "1 sdm Gula Pasir",
      "1/4 sdt Garam",
      "200 ml Air",
      "Minyak untuk menggoreng",
      "Taburan: Gula Halus atau Keju",
    ],
    steps: [
      "Kupas pisang, belah dua memanjang.",
      "Campur tepung terigu, tepung beras, gula, garam, dan air.",
      "Aduk hingga adonan kental.",
      "Celupkan pisang ke dalam adonan.",
      "Goreng dalam minyak panas hingga kecokelatan.",
      "Angkat dan tiriskan.",
      "Taburi dengan gula halus atau keju parut.",
      "Sajikan hangat.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Rudi",
        rating: 5,
        text: "Renyah di luar, lembut di dalam!",
        date: "2025-02-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-04",
    isPublic: true,
  },
  {
    id: "tahu-isi",
    title: "Tahu Isi (Jawa Barat)",
    category: "Makanan Ringan",
    duration: "45 menit",
    portion: "4-5 orang",
    description:
      "Tahu pong diisi dengan campuran sayuran dan bihun, dilapisi adonan tepung kemudian digoreng hingga renyah. Cocok untuk camilan sore.",
    imagePlaceholder: "FFD700/ffffff?text=TAHU+ISI",
    imageUrl:
      "https://cdn-brilio-net.akamaized.net/news/2020/06/19/186773/1252185-1000xauto-resep-tahu-isi.jpg",
    ingredients: [
      "10 buah Tahu Pong",
      "100 gr Bihun",
      "100 gr Wortel",
      "100 gr Kol",
      "2 batang Daun Bawang",
      "150 gr Tepung Terigu",
      "50 gr Tepung Beras",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Rendam bihun dengan air panas hingga lunak, tiriskan, potong pendek.",
      "Parut wortel, iris tipis kol dan daun bawang.",
      "Campur bihun dan sayuran, bumbui dengan garam dan merica.",
      "Belah tahu pong bagian atas, isi dengan campuran sayuran.",
      "Buat adonan tepung: campur tepung terigu, tepung beras, garam, dan air hingga kental.",
      "Celupkan tahu yang sudah diisi ke dalam adonan tepung.",
      "Goreng dalam minyak panas hingga kecokelatan dan renyah.",
      "Sajikan hangat dengan saus sambal atau cabai rawit.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Wati",
        rating: 5,
        text: "Tahunya lembut, isiannya beragam!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-05",
    isPublic: true,
  },
  {
    id: "bakwan-jagung",
    title: "Bakwan Jagung (Jawa)",
    category: "Makanan Ringan",
    duration: "40 menit",
    portion: "4-5 orang",
    description:
      "Perkedel jagung dengan campuran tepung dan bumbu, digoreng hingga renyah. Tekstur jagung yang manis dan renyah saat digigit.",
    imagePlaceholder: "FFA500/ffffff?text=BAKWAN+JAGUNG",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.KXmbriFRmNQMscKr73PRQgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "2 buah Jagung Manis",
      "150 gr Tepung Terigu",
      "50 gr Tepung Beras",
      "2 batang Daun Bawang",
      "2 batang Seledri",
      "3 siung Bawang Putih",
      "2 siung Bawang Merah",
      "Garam dan Merica secukupnya",
    ],
    steps: [
      "Serut jagung atau pisahkan bijinya dengan pisau.",
      "Iris tipis daun bawang dan seledri.",
      "Haluskan bawang putih dan bawang merah.",
      "Campur jagung, tepung terigu, tepung beras, daun bawang, seledri, dan bumbu halus.",
      "Tambahkan air sedikit demi sedikit hingga adonan kental.",
      "Panaskan minyak, ambil satu sendok adonan, goreng hingga kecokelatan.",
      "Balik bakwan, goreng sisi lainnya hingga matang.",
      "Angkat, tiriskan, sajikan hangat dengan saus sambal.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Sari",
        rating: 5,
        text: "Jagungnya manis, bakwannya renyah!",
        date: "2025-02-25",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-06",
    isPublic: true,
  },
  {
    id: "cireng",
    title: "Cireng (Bandung)",
    category: "Makanan Ringan",
    duration: "1 jam",
    portion: "6 orang",
    description:
      "Aci digoreng, jajanan khas Bandung dari tepung tapioka yang kenyal dengan berbagai varian rasa. Bisa disajikan dengan bubuk cabai atau saus kacang.",
    imagePlaceholder: "95a5a6/ffffff?text=CIRENG",
    imageUrl:
      "https://cdn.idntimes.com/content-images/community/2022/11/fromandroid-c348e3ca89ec79a7bcd7f44709cecf2c.jpg",
    ingredients: [
      "200 gr Tepung Tapioka",
      "100 gr Tepung Terigu",
      "3 siung Bawang Putih",
      "Daun Bawang",
      "Air Panas",
      "Garam dan Merica",
      "Bubuk Cabai atau Saus Kacang",
      "Minyak untuk menggoreng",
    ],
    steps: [
      "Haluskan bawang putih, campur dengan tepung tapioka, terigu, garam, merica, dan daun bawang iris.",
      "Tuang air panas sedikit demi sedikit, uleni hingga kalis.",
      "Ambil sedikit adonan, bentuk bulat lalu pipihkan.",
      "Goreng dalam minyak panas dengan api kecil hingga mengembang dan kecokelatan.",
      "Angkat dan tiriskan.",
      "Taburi dengan bubuk cabai atau celupkan ke saus kacang.",
      "Bisa juga dibuat isian dengan keju, sosis, atau ayam.",
      "Sajikan hangat.",
    ],
    ratings: [4, 5, 4, 4, 5],
    comments: [
      {
        user: "Yudi",
        rating: 5,
        text: "Kenyalnya pas, enak dicocol saus!",
        date: "2025-03-01",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-07",
    isPublic: true,
  },
  {
    id: "tauge-goreng",
    title: "Tauge Goreng (Bogor)",
    category: "Makanan Ringan",
    duration: "1 jam",
    portion: "4-5 orang",
    description:
      "Tauge segar disajikan dengan mie, ketupat, dan saus oncom khas Bogor. Rasa gurih, pedas, dan segar dari tauge yang masih renyah.",
    imagePlaceholder: "d4ac0d/ffffff?text=TAUGE+GORENG",
    imageUrl:
      "https://cdn.yummy.co.id/content-images/images/20231208/8wXhDNm9S5W9AThNxtDSemmhO4yYlzhF-31373032303138313730d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/format,webp",
    ingredients: [
      "300 gr Tauge",
      "200 gr Mie Kuning",
      "4 buah Ketupat",
      "150 gr Oncom",
      "5 siung Bawang Putih",
      "5 buah Cabai Rawit",
      "3 sdm Kecap Manis",
      "Garam dan Gula secukupnya",
    ],
    steps: [
      "Rebus tauge sebentar hingga setengah matang, tiriskan.",
      "Rebus mie kuning, tiriskan.",
      "Potong ketupat menjadi kotak-kotak kecil.",
      "Haluskan oncom, bawang putih, dan cabai rawit.",
      "Tumis bumbu oncom hingga harum, tambahkan sedikit air.",
      "Masukkan kecap manis, garam, dan gula, masak hingga mengental.",
      "Siapkan piring, tata tauge, mie, dan ketupat.",
      "Siram dengan saus oncom, sajikan dengan kerupuk.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Bambang",
        rating: 5,
        text: "Khas Bogor banget, saus oncomnya enak!",
        date: "2025-03-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-08",
    isPublic: true,
  },
  {
    id: "lumpia-basah",
    title: "Lumpia Basah (Semarang)",
    category: "Makanan Ringan",
    duration: "2 jam",
    portion: "20 buah",
    description:
      "Lumpia dengan kulit tipis berisi rebung dan ayam, disajikan dengan saus kental manis gurih khas Semarang. Berbeda dengan lumpia goreng, ini disajikan basah.",
    imagePlaceholder: "d35400/ffffff?text=LUMPIA+BASAH",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/8228bb531e991836/680x482cq70/lumpia-basah-foto-resep-utama.jpg",
    ingredients: [
      "20 lembar Kulit Lumpia",
      "200 gr Rebung",
      "150 gr Ayam Cincang",
      "5 siung Bawang Putih",
      "3 siung Bawang Merah",
      "100 gr Gula Merah",
      "2 sdm Kecap Manis",
      "1 sdm Tepung Maizena",
    ],
    steps: [
      "Rebus rebung hingga lunak, iris tipis.",
      "Tumis bawang merah dan bawang putih hingga harum.",
      "Masukkan ayam cincang, tumis hingga matang.",
      "Tambahkan rebung, masak hingga bumbu meresap.",
      "Bungkus isian dengan kulit lumpia, bentuk seperti lumpia biasa.",
      "Untuk saus: larutkan gula merah dengan air, tambahkan kecap manis.",
      "Kental dengan tepung maizena yang dilarutkan dengan sedikit air.",
      "Sajikan lumpia dengan disiram saus atau saus dipisah.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Sari",
        rating: 5,
        text: "Sausnya manis gurih, lumpianya lembut!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-09",
    isPublic: true,
  },

  // KATEGORI: MAKANAN PENUTUP (10 resep)
  {
    id: "klepon",
    title: "Klepon Gula Merah",
    category: "Makanan Penutup",
    duration: "1 jam",
    portion: "15 buah",
    description:
      "Bola-bola ketan hijau berisi gula merah yang meleleh saat digigit, taburan kelapa parut. Jajanan tradisional yang lembut dan manis.",
    imagePlaceholder: "27ae60/ffffff?text=KLEPON",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.d1iCV1rixXVrtO24mbcqYAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "200 gr Tepung Ketan",
      "50 gr Tepung Beras",
      "Pewarna Hijau (daun pandan/suji)",
      "100 gr Gula Merah, potong dadu kecil",
      "100 gr Kelapa Parut Setengah Tua",
      "Garam secukupnya",
      "Air Panas",
      "Daun Pandan untuk mengukus kelapa",
    ],
    steps: [
      "Campur tepung ketan dan tepung beras, beri air panas sedikit demi sedikit.",
      "Uleni hingga kalis, beri pewarna hijau.",
      "Ambil adonan, pipihkan, beri gula merah, bulatkan.",
      "Rebus dalam air mendidih hingga mengapung.",
      "Angkat, tiriskan, gulingkan di kelapa parut yang sudah dikukus dengan garam.",
      "Sajikan klepon.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Sari",
        rating: 5,
        text: "Gula merahnya meleleh pas di mulut!",
        date: "2025-02-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-10",
    isPublic: true,
  },
  {
    id: "getuk-lindri",
    title: "Getuk Lindri (Jawa Tengah)",
    category: "Makanan Penutup",
    duration: "1.5 jam",
    portion: "10 potong",
    description:
      "Olahan singkong yang dikukus, dihaluskan, diberi pewarna, dan dicetak dengan alat khusus. Tekstur lembut dengan warna-warni cantik.",
    imagePlaceholder: "d4ac0d/ffffff?text=GETUK+LINDRI",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/e898594099e32d45/1200x630cq70/photo.jpg",
    ingredients: [
      "1 kg Singkong",
      "200 gr Gula Pasir",
      "1/2 sdt Garam",
      "Pewarna Makanan: Hijau, Merah, Kuning",
      "Kelapa Parut Setengah Tua",
      "Daun Pandan untuk mengukus kelapa",
      "Cetakan getuk lindri (opsional)",
    ],
    steps: [
      "Kupas singkong, potong-potong, kukus hingga matang.",
      "Haluskan singkong selagi panas, campur dengan gula dan garam.",
      "Bagi adonan menjadi beberapa bagian, beri pewarna berbeda.",
      "Masukkan adonan ke dalam cetakan getuk lindri, tekan.",
      "Keluar dari cetakan, potong sesuai ukuran.",
      "Kukus kelapa parut dengan garam dan daun pandan.",
      "Sajikan getuk dengan taburan kelapa parut.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Sandi",
        rating: 5,
        text: "Warnanya cantik, rasanya enak!",
        date: "2025-03-10",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-11",
    isPublic: true,
  },
  {
    id: "bika-ambon",
    title: "Bika Ambon (Medan)",
    category: "Makanan Penutup",
    duration: "3-4 jam + Fermentasi 12 jam",
    portion: "20 potong",
    description:
      "Kue tradisional Medan yang berongga dan kenyal, dengan rasa legit dan aroma tape yang khas. Membutuhkan proses fermentasi yang panjang.",
    imagePlaceholder: "f39c12/ffffff?text=BIKA+AMBON",
    imageUrl:
      "https://jatenglive.com/images/news/Meski-Bernama-Bika-Ambon---Ternyata-Kue-Satu-Ini-Merupakan-Makanan-Khas-Medan.-news20220914-bika.jpg",
    ingredients: [
      "500 gr Tepung Terigu",
      "250 gr Gula Pasir",
      "6 butir Telur",
      "200 ml Santan",
      "100 gr Tape Singkong",
      "1 sdt Ragi Instan",
      "1 sdt Baking Soda",
      "Daun Pandan dan Saffron untuk pewarna",
    ],
    steps: [
      "Blender tape singkong dengan santan hingga halus, saring.",
      "Campur tepung terigu, gula, telur, dan tape yang sudah diblender.",
      "Tambahkan ragi, aduk rata, diamkan selama 12 jam (fermentasi).",
      "Setelah fermentasi, tambahkan baking soda, aduk rata.",
      "Panaskan loyang yang sudah dioles minyak dan dialasi daun pandan.",
      "Tuang adonan ke dalam loyang, panggang dengan api atas bawah 180°C selama 1 jam.",
      "Setelah matang, biarkan dalam oven hingga dingin baru dikeluarkan.",
      "Potong-potong bika ambon, sajikan.",
    ],
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Rongganya banyak, teksturnya kenyal!",
        date: "2025-02-12",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-12",
    isPublic: true,
  },
  {
    id: "dadar-gulung",
    title: "Dadar Gulung Unti Kelapa",
    category: "Makanan Penutup",
    duration: "1 jam",
    portion: "10 buah",
    description:
      "Kulit dadar hijau dari daun suji berisi unti kelapa manis, jajanan tradisional yang legendaris. Kulit lembut dengan isian manis legit.",
    imagePlaceholder: "2ecc71/ffffff?text=DADAR+GULUNG",
    imageUrl:
      "https://www.cookmeindonesian.com/wp-content/uploads/2021/08/dadar-gulung-fin1.jpg",
    ingredients: [
      "200 gr Tepung Terigu",
      "1 butir Telur",
      "400 ml Santan",
      "Pewarna Hijau (daun suji/pandan)",
      "Isian: Kelapa Parut, Gula Merah, Daun Pandan",
      "Garam secukupnya",
      "Minyak untuk menggoreng kulit",
      "Mentega untuk olesan wajan",
    ],
    steps: [
      "Campur tepung, telur, santan, garam, dan pewarna hijau.",
      "Saring adonan, diamkan 15 menit.",
      "Masak unti: campur kelapa, gula merah, daun pandan, masak hingga kering.",
      "Panaskan wajan, olesi mentega, buat dadar tipis.",
      "Ambil selembar kulit, beri unti kelapa, lipat seperti amplop.",
      "Lakukan hingga adonan habis.",
      "Sajikan dadar gulung.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Maya",
        rating: 5,
        text: "Kulitnya lembut, untinya manis pas!",
        date: "2025-03-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-13",
    isPublic: true,
  },
  {
    id: "lapis-legit",
    title: "Lapis Legit (Spekuk)",
    category: "Makanan Penutup",
    duration: "3 jam",
    portion: "20 potong",
    description:
      "Kue lapis legit dengan ratusan lapisan yang dimasak satu per satu, butuh kesabaran namun hasilnya luar biasa. Tekstur padat dan kaya rempah.",
    imagePlaceholder: "8b4513/ffffff?text=LAPIS+LEGIT",
    imageUrl:
      "https://cdn.tasteatlas.com/images/dishes/e6968d53489f4c0fbf8459e978b55256.jpg",
    ingredients: [
      "500 gr Mentega",
      "500 gr Gula Pasir",
      "20 butir Kuning Telur",
      "5 butir Putih Telur",
      "200 gr Tepung Terigu",
      "50 gr Tepung Maizena",
      "1 sdm Susu Bubuk",
      "1 sdm Kayu Manis Bubuk",
    ],
    steps: [
      "Kocok mentega dan gula hingga putih dan mengembang.",
      "Masukkan kuning telur satu per satu, kocok rata.",
      "Kocok putih telur hingga kaku, masukkan ke adonan mentega.",
      "Ayak tepung terigu, maizena, susu bubuk, kayu manis.",
      "Masukkan ke adonan, aduk rata.",
      "Panaskan oven, siapkan loyang, olesi margarin dan alasi kertas roti.",
      "Tuang 2 sendok sayur adonan, ratakan, panggang 5-7 menit.",
      "Ulangi hingga adonan habis.",
      "Setelah matang, keluarkan dari oven, dinginkan.",
      "Potong lapis legit.",
    ],
    ratings: [5, 5, 5, 5, 5],
    comments: [
      {
        user: "Budi",
        rating: 5,
        text: "Butuh kesabaran tapi hasilnya worth it!",
        date: "2025-03-05",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-14",
    isPublic: true,
  },
  {
    id: "putu-ayu",
    title: "Putu Ayu Ketan Hitam",
    category: "Makanan Penutup",
    duration: "1.5 jam",
    portion: "15 buah",
    description:
      "Kue tradisional dari adonan ketan hitam dengan topping kelapa parut, dikukus hingga matang. Wangi ketan hitam yang khas.",
    imagePlaceholder: "2c3e50/ffffff?text=PUTU+AYU",
    imageUrl:
      "https://tse1.mm.bing.net/th/id/OIP.rgjm4uINvzuclXOU_mLUUAHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "200 gr Tepung Ketan Hitam",
      "150 gr Gula Pasir",
      "200 ml Santan",
      "2 butir Telur",
      "1/2 sdt Vanili",
      "1/2 sdt Garam",
      "Topping: Kelapa Parut Setengah Tua, Garam, Daun Pandan",
      "Cetakan putu ayu",
    ],
    steps: [
      "Kukus kelapa parut dengan garam dan daun pandan, sisihkan.",
      "Kocok telur dan gula hingga larut.",
      "Campur tepung ketan hitam, santan, vanili, garam, aduk rata.",
      "Tuang ke dalam cetakan yang sudah dioles minyak dan dilapisi kelapa parut.",
      "Kukus selama 20 menit hingga matang.",
      "Angkat, dinginkan, keluarkan dari cetakan.",
      "Sajikan putu ayu.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Wangi ketan hitamnya enak banget!",
        date: "2025-02-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-15",
    isPublic: true,
  },
  {
    id: "serabi-solo",
    title: "Serabi Solo (Kinca)",
    category: "Makanan Penutup",
    duration: "1 jam",
    portion: "10 buah",
    description:
      "Panekuk kecil dari santan dan tepung beras, disajikan dengan saus gula merah kental (kinca). Tekstur lembut dengan saus manis legit.",
    imagePlaceholder: "f39c12/ffffff?text=SERABI+SOLO",
    imageUrl:
      "https://resepmamiku.com/wp-content/uploads/2021/10/235988220_361304635532731_4189301197831501295_n-850x1063.jpg",
    ingredients: [
      "200 gr Tepung Beras",
      "400 ml Santan",
      "1/2 sdt Garam",
      "1/2 sdt Ragi Instan",
      "50 gr Tepung Terigu",
      "Saus Kinca: Gula Merah, Santan, Daun Pandan",
      "Cetakan serabi atau teflon kecil",
      "Minyak untuk olesan",
    ],
    steps: [
      "Campur tepung beras, tepung terigu, ragi, dan garam.",
      "Tuang santan sedikit demi sedikit, aduk hingga licin.",
      "Diamkan adonan 30 menit hingga mengembang.",
      "Panaskan cetakan, olesi minyak, tuang adonan.",
      "Tutup, masak hingga permukaan berlubang dan matang.",
      "Saus kinca: rebus gula merah, santan, dan daun pandan hingga kental.",
      "Sajikan serabi dengan saus kinca.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Wati",
        rating: 5,
        text: "Lembut dan manisnya pas!",
        date: "2025-03-01",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-16",
    isPublic: true,
  },
  {
    id: "kue-cubit",
    title: "Kue Cubit (Jakarta)",
    category: "Makanan Penutup",
    duration: "45 menit",
    portion: "20 buah",
    description:
      "Kue kecil yang dimasak dalam cetakan khusus, dengan topping meses, keju, atau coklat. Tekstur lembut dengan bagian tengah yang masih basah.",
    imagePlaceholder: "FFD700/ffffff?text=KUE+CUBIT",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.nb5kOHrK8lUFBpxnmPBcAwHaEL?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "200 gr Tepung Terigu",
      "2 butir Telur",
      "150 gr Gula Pasir",
      "1/2 sdt Vanili",
      "1/2 sdt Baking Powder",
      "200 ml Susu Cair",
      "Topping: Meses, Keju, Coklat",
      "Cetakan kue cubit atau teflon kecil",
    ],
    steps: [
      "Kocok telur dan gula hingga larut.",
      "Campur tepung terigu, baking powder, dan vanili.",
      "Tuang susu cair sedikit demi sedikit sambil diaduk hingga licin.",
      "Diamkan adonan 15 menit.",
      "Panaskan cetakan kue cubit, olesi mentega atau minyak.",
      "Tuang adonan hingga 3/4 penuh, taburi topping sesuai selera.",
      "Tutup cetakan, masak hingga matang dan bagian atasnya mengering.",
      "Angkat, sajikan hangat.",
    ],
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        user: "Dian",
        rating: 5,
        text: "Lembut di dalam, toppingnya beragam!",
        date: "2025-03-20",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-17",
    isPublic: true,
  },
  {
    id: "kue-lapis",
    title: "Kue Lapis Beras (Jawa)",
    category: "Makanan Penutup",
    duration: "2 jam",
    portion: "20 potong",
    description:
      "Kue lapis beras dengan warna-warni yang cantik, dikukus lapis demi lapis. Tekstur kenyal dengan rasa santan yang gurih.",
    imagePlaceholder: "FF69B4/ffffff?text=KUE+LAPIS",
    imageUrl:
      "https://s4.bukalapak.com/uploads/content_attachment/e61a25c7869bd5237a7720b5/original/foto_utama_kue_lapis.jpg",
    ingredients: [
      "400 gr Tepung Beras",
      "200 gr Tapioka",
      "800 ml Santan",
      "300 gr Gula Pasir",
      "1/2 sdt Garam",
      "Pewarna Makanan: Hijau, Merah, Kuning",
      "Daun Pandan untuk aroma",
      "Cetakan kue lapis persegi",
    ],
    steps: [
      "Campur tepung beras, tapioka, gula, dan garam.",
      "Tuang santan sedikit demi sedikit, aduk hingga licin, bagi menjadi beberapa bagian.",
      "Beri pewarna berbeda pada masing-masing bagian adonan.",
      "Panaskan kukusan, siapkan cetakan yang sudah dioles minyak.",
      "Tuang satu warna adonan (sekitar 100 ml), kukus 5 menit hingga matang.",
      "Tuang warna berikutnya, kukus lagi 5 menit, ulangi hingga adonan habis.",
      "Kukus lapisan terakhir selama 15 menit.",
      "Setelah matang, dinginkan, keluarkan dari cetakan, potong-potong.",
    ],
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        user: "Lisa",
        rating: 5,
        text: "Warnanya cantik, teksturnya kenyal!",
        date: "2025-02-18",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-18",
    isPublic: true,
  },
  {
    id: "kue-putu-bambu",
    title: "Kue Putu Bambu",
    category: "Makanan Penutup",
    duration: "1.5 jam",
    portion: "15 buah",
    description:
      "Kue tradisional dari tepung beras berisi gula merah, dimasak dalam cetakan bambu, dengan aroma daun pandan. Khas bunyi pluit saat matang.",
    imagePlaceholder: "27ae60/ffffff?text=KUE+PUTU+BAMBU",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.rBlXhqz2vmo9UfZSwFD2bAHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: [
      "300 gr Tepung Beras",
      "150 ml Air Pandan",
      "1/4 sdt Garam",
      "150 gr Gula Merah, potong kecil",
      "100 gr Kelapa Parut Setengah Tua",
      "Daun Pandan untuk mengukus kelapa",
      "Cetakan bambu atau plastik tahan panas",
      "Daun Pisang untuk alas",
    ],
    steps: [
      "Campur tepung beras, garam, dan air pandan sedikit demi sedikit.",
      "Aduk hingga menjadi butiran-butiran halus.",
      "Kukus kelapa parut dengan garam dan daun pandan, sisihkan.",
      "Siapkan cetakan, isi sebagian dengan adonan tepung.",
      "Beri potongan gula merah, tutup dengan adonan tepung lagi.",
      "Kukus selama 15-20 menit hingga matang.",
      "Keluar dari cetakan, taburi kelapa parut.",
      "Sajikan kue putu selagi hangat.",
    ],
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        user: "Rina",
        rating: 5,
        text: "Bunyi pluitnya khas, gula merahnya meleleh!",
        date: "2025-03-15",
      },
    ],
    addedBy: "admin",
    addedDate: "2025-02-19",
    isPublic: true,
  },
];

// Data tambahan untuk aplikasi
let userSuggestions = [];
let currentUser = null;
let currentFilter = "all";
let currentCategoryFilter = "all";

// Kategori yang tersedia
const categories = [
  "Daging",
  "Seafood",
  "Sayuran",
  "Makanan Ringan",
  "Makanan Penutup",
];

// ============================================
// FUNGSI UTILITAS
// ============================================

// Format tanggal
function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate ID unik
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Hitung rating rata-rata
function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) return 0;
  const sum = ratings.reduce((a, b) => a + b, 0);
  return (sum / ratings.length).toFixed(1);
}

// Simpan data ke localStorage
function saveData() {
  localStorage.setItem("recipes", JSON.stringify(allRecipes));
  localStorage.setItem("suggestions", JSON.stringify(userSuggestions));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

// Load data dari localStorage
function loadData() {
  const savedRecipes = localStorage.getItem("recipes");
  const savedSuggestions = localStorage.getItem("suggestions");
  const savedUser = localStorage.getItem("currentUser");

  if (savedRecipes) allRecipes = JSON.parse(savedRecipes);
  if (savedSuggestions) userSuggestions = JSON.parse(savedSuggestions);
  if (savedUser) currentUser = JSON.parse(savedUser);
}

// Update tampilan header berdasarkan user
function updateHeader() {
  const accountInitial = document.getElementById("account-initial");
  const navContact = document.getElementById("nav-contact");

  if (currentUser) {
    // Tampilkan inisial user
    const initials = currentUser.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .substr(0, 2);

    accountInitial.innerHTML = initials;

    // Sembunyikan nav kontak untuk admin
    if (currentUser.isAdmin && navContact) {
      navContact.style.display = "none";
    } else if (navContact) {
      navContact.style.display = "block";
    }

    // Update menu navigasi untuk admin
    if (currentUser.isAdmin) {
      // Admin tidak melihat favorit dan disimpan, tapi melihat kelola resep dan saran
      document.getElementById("nav-favorites")?.remove();
      document.getElementById("nav-saved")?.remove();

      // Tambahkan navigasi untuk admin jika belum ada
      const mainNav = document.getElementById("main-nav");
      const existingManage = document.getElementById("nav-manage");
      const existingSuggestions = document.getElementById("nav-suggestions");

      if (!existingManage) {
        const manageBtn = document.createElement("button");
        manageBtn.id = "nav-manage";
        manageBtn.className =
          "nav-link text-white hover:text-amber-100 px-3 py-2 rounded-full transition duration-200 relative z-10 text-sm sm:text-base";
        manageBtn.innerHTML = "Kelola Resep";
        manageBtn.onclick = () => navigate("manage");
        // Sisipkan sebelum tombol akun
        const accountBtn = document.getElementById("nav-account");
        mainNav.insertBefore(manageBtn, accountBtn);
      }

      if (!existingSuggestions) {
        const suggestionsBtn = document.createElement("button");
        suggestionsBtn.id = "nav-suggestions";
        suggestionsBtn.className =
          "nav-link text-white hover:text-amber-100 px-3 py-2 rounded-full transition duration-200 relative z-10 text-sm sm:text-base";
        suggestionsBtn.innerHTML = "Saran Pengguna";
        suggestionsBtn.onclick = () => navigate("suggestions");
        // Sisipkan sebelum tombol akun
        const accountBtn = document.getElementById("nav-account");
        mainNav.insertBefore(suggestionsBtn, accountBtn);
      }
    } else {
      // User biasa: sembunyikan navigasi admin jika ada
      document.getElementById("nav-manage")?.remove();
      document.getElementById("nav-suggestions")?.remove();

      // Tambahkan navigasi favorit dan disimpan jika belum ada
      const mainNav = document.getElementById("main-nav");
      const existingFavorites = document.getElementById("nav-favorites");
      const existingSaved = document.getElementById("nav-saved");

      if (!existingFavorites) {
        const favoritesBtn = document.createElement("button");
        favoritesBtn.id = "nav-favorites";
        favoritesBtn.className =
          "nav-link text-white hover:text-amber-100 px-3 py-2 rounded-full transition duration-200 relative z-10 text-sm sm:text-base";
        favoritesBtn.innerHTML = "Favorit";
        favoritesBtn.onclick = () => navigate("favorites");
        // Sisipkan sebelum tombol akun
        const accountBtn = document.getElementById("nav-account");
        mainNav.insertBefore(favoritesBtn, accountBtn);
      }

      if (!existingSaved) {
        const savedBtn = document.createElement("button");
        savedBtn.id = "nav-saved";
        savedBtn.className =
          "nav-link text-white hover:text-amber-100 px-3 py-2 rounded-full transition duration-200 relative z-10 text-sm sm:text-base";
        savedBtn.innerHTML = "Disimpan";
        savedBtn.onclick = () => navigate("saved");
        // Sisipkan sebelum tombol akun
        const accountBtn = document.getElementById("nav-account");
        mainNav.insertBefore(savedBtn, accountBtn);
      }
    }
  } else {
    // User belum login
    accountInitial.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    `;

    // Tampilkan nav kontak untuk user belum login
    if (navContact) {
      navContact.style.display = "block";
    }

    // Hapus navigasi khusus user dan admin
    document.getElementById("nav-favorites")?.remove();
    document.getElementById("nav-saved")?.remove();
    document.getElementById("nav-manage")?.remove();
    document.getElementById("nav-suggestions")?.remove();
  }
}

// ============================================
// FUNGSI NAVIGASI
// ============================================

// Navigasi antar halaman
function navigate(page) {
  // Sembunyikan semua halaman
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.remove("active");
  });

  // Tampilkan halaman yang dipilih
  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add("active");

    // Update indikator navigasi
    updateActiveIndicator(page);

    // Load konten berdasarkan halaman
    switch (page) {
      case "home":
        loadHomePage();
        break;
      case "recipes":
        loadRecipesPage();
        break;
      case "favorites":
        loadFavoritesPage();
        break;
      case "saved":
        loadSavedPage();
        break;
      case "manage":
        loadManagePage();
        break;
      case "suggestions":
        loadSuggestionsPage();
        break;
      case "about":
      case "contact":
        // Halaman statis, tidak perlu load data
        break;
    }

    // Scroll ke atas
    window.scrollTo(0, 0);
  }
}

// Update indikator navigasi aktif
function updateActiveIndicator(activePage) {
  const indicator = document.getElementById("active-indicator");
  const navButtons = {
    home: document.getElementById("nav-home"),
    recipes: document.getElementById("nav-recipes"),
    about: document.getElementById("nav-about"),
    contact: document.getElementById("nav-contact"),
    favorites: document.getElementById("nav-favorites"),
    saved: document.getElementById("nav-saved"),
    manage: document.getElementById("nav-manage"),
    suggestions: document.getElementById("nav-suggestions"),
  };

  const activeButton = navButtons[activePage];

  if (activeButton && indicator) {
    setTimeout(() => {
      const buttonRect = activeButton.getBoundingClientRect();
      const navRect = indicator.parentElement.getBoundingClientRect();

      // Set posisi dan ukuran indikator
      indicator.style.width = `${buttonRect.width}px`;
      indicator.style.height = `${buttonRect.height}px`;
      indicator.style.left = `${buttonRect.left - navRect.left}px`;
      indicator.style.top = `${buttonRect.top - navRect.top}px`;
      indicator.style.borderRadius = "9999px";

      // Update class aktif pada tombol
      document.querySelectorAll(".nav-link").forEach((btn) => {
        btn.classList.remove("active-text");
      });
      activeButton.classList.add("active-text");
    }, 50);
  }
}

// ============================================
// FUNGSI MODAL
// ============================================

// Buka modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 10);

    // Isi dropdown kategori untuk modal tambah dan edit resep
    if (modalId === "add-recipe-modal" || modalId === "edit-recipe-modal") {
      const categorySelect =
        modalId === "add-recipe-modal"
          ? document.getElementById("new-category")
          : document.getElementById("edit-category");

      if (categorySelect) {
        categorySelect.innerHTML = '<option value="">Pilih Kategori</option>';
        categories.forEach((category) => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
        });
      }
    }
  }
}

// Tutup modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }
}

// Modal akun
function openAccountMenu(event) {
  if (event) {
    event.stopPropagation();
  }

  const modal = document.getElementById("account-modal");
  const modalContent = document.querySelector(".modal-content");

  if (modal && modalContent) {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.style.opacity = "1";
      const container = document.getElementById("modal-content-container");
      container.style.opacity = "1";
      container.style.transform = "scale(1)";
    }, 10);

    // Tampilkan konten berdasarkan status login
    if (currentUser) {
      if (currentUser.isAdmin) {
        modalContent.innerHTML = getAdminProfileContent();
      } else {
        modalContent.innerHTML = getUserProfileContent();
      }
    } else {
      modalContent.innerHTML = getLoginForm();
    }
  }
}

function closeAccountModal() {
  const modal = document.getElementById("account-modal");
  if (modal) {
    const container = document.getElementById("modal-content-container");
    container.style.opacity = "0";
    container.style.transform = "scale(0.95)";

    setTimeout(() => {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    }, 200);
  }
}

// ============================================
// FUNGSI AUTHENTIKASI
// ============================================

// Form login dengan email
function getLoginForm() {
  return `
    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Masuk ke Akun</h3>
      <p class="text-gray-600 mb-6">Akses fitur lengkap dengan login</p>
      
      <form onsubmit="handleLogin(event)" class="space-y-4">
        <div>
          <div class="relative">
            <input type="email" id="login-email" placeholder="Email" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition pr-12">
          </div>
          <div id="login-email-error" class="text-red-500 text-xs mt-1 text-left"></div>
        </div>
        <div>
          <div class="relative password-input-container">
            <input type="password" id="login-password" placeholder="Password" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
            <button type="button" onclick="togglePasswordVisibility('login-password', 'login-eye-icon', event)" 
              class="password-toggle-btn">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <div id="login-password-error" class="text-red-500 text-xs mt-1 text-left"></div>
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <button type="button" onclick="showForgotPasswordForm(event)" class="text-sm text-amber-600 hover:text-amber-700 font-medium">
            Lupa kata sandi?
          </button>
        </div>
        
        <button type="submit" 
          class="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-amber-700 hover:to-orange-600 transition duration-200">
          Masuk
        </button>
      </form>
      
      <div class="mt-6 pt-6 border-t border-gray-200">
        <p class="text-gray-600 mb-3">Belum punya akun?</p>
        <button type="button" onclick="showRegisterForm(event)" 
          class="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition duration-200">
          Daftar Akun Baru
        </button>
      </div>
      
      <p class="text-xs text-gray-500 mt-6">
        © Resep Dapur Nusantara - Kebijakan Privasi, Lindungi Pengguna.
      </p>
    </div>
  `;
}

// Handle login dengan email
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Reset error messages
  document.getElementById("login-email-error").textContent = "";
  document.getElementById("login-password-error").textContent = "";

  // Validasi
  let isValid = true;

  if (!email) {
    document.getElementById("login-email-error").textContent =
      "Silahkan isi Email anda";
    isValid = false;
  }

  if (!password) {
    document.getElementById("login-password-error").textContent =
      "Silahkan masukkan Password anda";
    isValid = false;
  }

  if (!isValid) return;

  // Login admin menggunakan email khusus
  if (
    email === "admin@resepnusantara.id" &&
    password === "resepdapurnusantara"
  ) {
    currentUser = {
      id: "admin",
      name: "Administrator",
      phone: "(+6289529436725)",
      email: "admin@resepnusantara.id",
      isAdmin: true,
    };

    saveData();
    updateHeader();
    closeAccountModal();
    showMessage("Login berhasil sebagai admin!", "success");
    return;
  }

  // Login user biasa berdasarkan email
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      favorites: user.favorites || [],
      saved: user.saved || [],
      isAdmin: false,
    };

    saveData();
    updateHeader();
    closeAccountModal();
    showMessage("Login berhasil!", "success");
  } else {
    // Jika email ditemukan tapi password salah
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      document.getElementById("login-password-error").textContent =
        "Kata sandi anda salah";
    } else {
      document.getElementById("login-email-error").textContent =
        "Email tidak ditemukan";
    }
  }
}

// Form register dengan nomor telepon
function getRegisterForm() {
  return `
    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Daftar Akun Baru</h3>
      <p class="text-gray-600 mb-6">Bergabung dengan komunitas pecinta masakan Nusantara</p>
      
      <form id="register-form" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="reg-name" class="block text-sm text-gray-600 mb-1 text-left">Nama Lengkap</label>
            <input type="text" id="reg-name" placeholder="Masukkan nama lengkap" required 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition">
            <div id="name-error" class="text-red-500 text-xs mt-1 text-left hidden"></div>
          </div>
          <div>
            <label for="reg-phone" class="block text-sm text-gray-600 mb-1 text-left">Nomor Telepon</label>
            <input type="tel" id="reg-phone" placeholder="Masukkan No Telepon" required 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition">
            <div id="phone-error" class="text-red-500 text-xs mt-1 text-left hidden"></div>
          </div>
        </div>
        
        <div>
          <label for="reg-email" class="block text-sm text-gray-600 mb-1 text-left">Email</label>
          <input type="email" id="reg-email" placeholder="Masukkan Email" required 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition">
          <div id="email-error" class="text-red-500 text-xs mt-1 text-left hidden"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="reg-password" class="block text-sm text-gray-600 mb-1 text-left">Password</label>
            <div class="relative password-input-container">
              <input type="password" id="reg-password" placeholder="Minimal 8 karakter" required 
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
              <button type="button" onclick="togglePasswordVisibility('reg-password', 'reg-password-eye', event)" 
                class="password-toggle-btn">
               
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div id="password-error" class="text-red-500 text-xs mt-1 text-left hidden"></div>
          </div>
          <div>
            <label for="reg-confirm-password" class="block text-sm text-gray-600 mb-1 text-left">Konfirmasi Password</label>
            <div class="relative password-input-container">
              <input type="password" id="reg-confirm-password" placeholder="Ulangi password" required 
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
              <button type="button" onclick="togglePasswordVisibility('reg-confirm-password', 'reg-confirm-eye', event)" 
                class="password-toggle-btn">
               
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div id="confirm-error" class="text-red-500 text-xs mt-1 text-left hidden"></div>
          </div>
        </div>
        
        <div class="text-left">
          <label class="flex items-center">
            <input type="checkbox" id="reg-terms" required 
              class="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500">
            <span class="text-sm text-gray-600">
              Saya menyetujui 
              <button type="button" onclick="showTerms(event)" class="text-amber-600 hover:text-amber-700 font-medium">
                Syarat & Ketentuan
              </button>
              dan 
              <button type="button" onclick="showPrivacy(event)" class="text-amber-600 hover:text-amber-700 font-medium">
                Kebijakan Privasi
              </button>
            </span>
          </label>
          <div id="terms-error" class="text-red-500 text-xs mt-1 hidden"></div>
        </div>
        
        <div id="register-message" class="hidden p-3 rounded-lg text-sm font-medium"></div>
        
        <button type="button" onclick="handleRegisterSubmit()"
          class="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-amber-700 hover:to-orange-600 transition duration-200 flex items-center justify-center gap-2">
          <svg id="register-spinner" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span id="register-text">Daftar Sekarang</span>
        </button>
      </form>
      
      <div class="mt-6 pt-6 border-t border-gray-200">
        <div class="flex items-center justify-center mb-3">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-4 text-gray-500 text-sm">Sudah punya akun?</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <button type="button" onclick="showLoginForm(event)" 
          class="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition duration-200 border border-gray-300">
          Masuk ke Akun
        </button>
      </div>
      
      <p class="text-xs text-gray-500 mt-6">
        © Resep Dapur Nusantara - Melindungi data pengguna dengan enkripsi.
      </p>
    </div>
  `;
}

// Tampilkan form register
function showRegisterForm(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modalContent = document.querySelector(".modal-content");
  if (modalContent) {
    modalContent.innerHTML = getRegisterForm();
  }
}

// Handle register submit dengan validasi nomor telepon
function handleRegisterSubmit() {
  // Reset pesan error
  hideAllErrors();
  const messageDiv = document.getElementById("register-message");
  if (messageDiv) {
    messageDiv.classList.add("hidden");
  }

  // Ambil nilai dari form
  const name = document.getElementById("reg-name")?.value.trim() || "";
  const phone = document.getElementById("reg-phone")?.value.trim() || "";
  const email = document.getElementById("reg-email")?.value.trim() || "";
  const password = document.getElementById("reg-password")?.value || "";
  const confirmPassword =
    document.getElementById("reg-confirm-password")?.value || "";
  const terms = document.getElementById("reg-terms")?.checked || false;

  // Validasi
  let isValid = true;

  if (!name || name.length < 3) {
    showError("name-error", "Nama minimal 3 karakter");
    isValid = false;
  }

  // Validasi nomor telepon
  const phoneRegex = /^[0-9]{10,13}$/;
  if (!phone || !phoneRegex.test(phone)) {
    showError("phone-error", "Nomor telepon harus 10-13 digit angka");
    isValid = false;
  }

  if (!email || !isValidEmail(email)) {
    showError("email-error", "Email tidak valid");
    isValid = false;
  }

  if (!password || password.length < 8) {
    showError("password-error", "Password minimal 8 karakter");
    isValid = false;
  }

  if (password !== confirmPassword) {
    showError("confirm-error", "Password tidak cocok");
    isValid = false;
  }

  if (!terms) {
    showError("terms-error", "Anda harus menyetujui syarat dan ketentuan");
    isValid = false;
  }

  if (!isValid) {
    showMessageInForm("Harap perbaiki kesalahan di atas", "error");
    return;
  }

  // Tampilkan loading state
  const spinner = document.getElementById("register-spinner");
  const buttonText = document.getElementById("register-text");
  if (spinner) spinner.classList.remove("hidden");
  if (buttonText) buttonText.textContent = "Mendaftarkan...";

  // Simulasi delay untuk UX yang lebih baik
  setTimeout(() => {
    // Cek apakah nomor telepon/email sudah ada
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.phone === phone)) {
      if (spinner) spinner.classList.add("hidden");
      if (buttonText) buttonText.textContent = "Daftar Sekarang";
      showError("phone-error", "Nomor telepon sudah terdaftar");
      showMessageInForm(
        "Nomor telepon sudah terdaftar. Silakan gunakan nomor lain.",
        "error"
      );
      return;
    }

    if (users.find((u) => u.email === email)) {
      if (spinner) spinner.classList.add("hidden");
      if (buttonText) buttonText.textContent = "Daftar Sekarang";
      showError("email-error", "Email sudah terdaftar");
      showMessageInForm(
        "Email sudah terdaftar. Silakan gunakan email lain.",
        "error"
      );
      return;
    }

    // Buat user baru dengan nomor telepon
    const newUser = {
      id: generateId(),
      name,
      phone,
      email,
      password,
      favorites: [],
      saved: [],
      joined: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Login otomatis
    currentUser = {
      id: newUser.id,
      name: newUser.name,
      phone: newUser.phone,
      email: newUser.email,
      favorites: [],
      saved: [],
      isAdmin: false,
    };

    saveData();
    updateHeader();

    // Tampilkan pesan sukses
    showMessageInForm(
      "🎉 Pendaftaran berhasil! Anda akan diarahkan...",
      "success"
    );

    // Tunggu sebentar sebelum menutup modal dan menampilkan welcome message
    setTimeout(() => {
      closeAccountModal();
      showMessage(`Selamat datang, ${name}! 🍽️`, "success");

      // Redirect ke halaman home
      navigate("home");
    }, 1500);
  }, 1000);
}

function togglePasswordVisibility(inputId, eyeIconId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const input = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeIconId);

  if (!input || !eyeIcon) return;

  if (input.type === "password") {
    input.type = "text";
    eyeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 015.143 5M6.59 6.59l10.83 10.83" />
    `;
  } else {
    input.type = "password";
    eyeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    `;
  }
}

function showError(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = message;
    element.classList.remove("hidden");
  }
}

function hideAllErrors() {
  const errorElements = document.querySelectorAll('[id$="-error"]');
  errorElements.forEach((el) => {
    el.classList.add("hidden");
    el.textContent = "";
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showMessageInForm(message, type) {
  const messageDiv = document.getElementById("register-message");
  messageDiv.textContent = message;
  messageDiv.className = "p-3 rounded-lg text-sm font-medium ";

  if (type === "success") {
    messageDiv.classList.add(
      "bg-green-100",
      "text-green-700",
      "border",
      "border-green-200"
    );
  } else {
    messageDiv.classList.add(
      "bg-red-100",
      "text-red-700",
      "border",
      "border-red-200"
    );
  }

  messageDiv.classList.remove("hidden");
}

function showTerms(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `
    <div class="text-left">
      <button type="button" onclick="showRegisterForm(event)" class="mb-4 text-amber-600 hover:text-amber-700 font-medium flex items-center">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </button>
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Syarat & Ketentuan</h3>
      <div class="max-h-96 overflow-y-auto pr-2">
        <div class="space-y-4 text-gray-600">
          <p><strong>1. Penerimaan Syarat</strong><br>
          Dengan mendaftar di Resep Dapur Nusantara, Anda menyetujui syarat dan ketentuan ini.</p>
          
          <p><strong>2. Akun Pengguna</strong><br>
          Anda bertanggung jawab menjaga kerahasiaan akun dan password. Semua aktivitas yang terjadi di akun Anda menjadi tanggung jawab Anda.</p>
          
          <p><strong>3. Konten Pengguna</strong><br>
          Resep yang Anda bagikan harus orisinil dan tidak melanggar hak cipta orang lain.</p>
          
          <p><strong>4. Privasi</strong><br>
          Data pribadi Anda dilindungi sesuai dengan Kebijakan Privasi kami.</p>
          
          <p><strong>5. Perubahan</strong><br>
          Kami berhak mengubah syarat dan ketentuan ini kapan saja.</p>
          
          <p><strong>6. Pembatasan</strong><br>
          Anda tidak diperbolehkan menggunakan layanan untuk aktivitas ilegal atau melanggar hukum.</p>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-gray-200">
        <button type="button" onclick="showRegisterForm(event)" 
          class="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition duration-200">
          Kembali ke Pendaftaran
        </button>
      </div>
    </div>
  `;
}

function showPrivacy(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `
    <div class="text-left">
      <button type="button" onclick="showRegisterForm(event)" class="mb-4 text-amber-600 hover:text-amber-700 font-medium flex items-center">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </button>
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Kebijakan Privasi</h3>
      <div class="max-h-96 overflow-y-auto pr-2">
        <div class="space-y-4 text-gray-600">
          <p><strong>1. Informasi yang Kami Kumpulkan</strong><br>
          Kami mengumpulkan informasi yang Anda berikan saat mendaftar, seperti nama, email, dan nomor telepon.</p>
          
          <p><strong>2. Penggunaan Informasi</strong><br>
          Informasi digunakan untuk mengelola akun, personalisasi pengalaman, dan mengirim pembaruan.</p>
          
          <p><strong>3. Perlindungan Data</strong><br>
          Data Anda dilindungi dengan enkripsi dan tidak akan dijual atau dibagikan tanpa izin.</p>
          
          <p><strong>4. Cookie</strong><br>
          Kami menggunakan cookie untuk meningkatkan pengalaman pengguna.</p>
          
          <p><strong>5. Hak Anda</strong><br>
          Anda berhak mengakses, memperbaiki, atau menghapus data pribadi Anda.</p>
          
          <p><strong>6. Kontak</strong><br>
          Untuk pertanyaan privasi, hubungi: privacy@resepnusantara.id</p>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-gray-200">
        <button type="button" onclick="showRegisterForm(event)" 
          class="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition duration-200">
          Kembali ke Pendaftaran
        </button>
      </div>
    </div>
  `;
}

// Tampilkan form login
function showLoginForm(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modalContent = document.querySelector(".modal-content");
  if (modalContent) {
    modalContent.innerHTML = getLoginForm();
  }
}

// Tampilkan form lupa password dengan email
function showForgotPasswordForm(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modalContent = document.querySelector(".modal-content");
  if (modalContent) {
    modalContent.innerHTML = `
      <div class="text-center">
        <button type="button" onclick="showLoginForm(event)" class="mb-4 text-amber-600 hover:text-amber-700 font-medium flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali
        </button>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Lupa Kata Sandi</h3>
        <p class="text-gray-600 mb-6">Masukkan email untuk mereset kata sandi</p>
        
        <form onsubmit="handleForgotPassword(event)" class="space-y-4">
          <div>
            <input type="email" id="forgot-email" placeholder="Email" required 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition">
          </div>
          
          <button type="submit" 
            class="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-amber-700 hover:to-orange-600 transition duration-200">
            Reset Kata Sandi
          </button>
        </form>
      </div>
    `;
  }
}

// Handle forgot password dengan email
function handleForgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById("forgot-email").value;

  // Cari user berdasarkan email
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email);

  if (user) {
    // Generate password baru
    const newPassword = Math.random().toString(36).slice(-8);
    user.password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    showMessage(
      `Password baru telah dikirim ke ${email}. Password baru: ${newPassword}`,
      "success"
    );
    showLoginForm();
  } else {
    showMessage("Email tidak ditemukan!", "error");
  }
}

// Profil user dengan nomor telepon
function getUserProfileContent() {
  return `
    <div class="text-center">
      <div class="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
        ${currentUser.name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()
          .substr(0, 2)}
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-1">${currentUser.name}</h3>
      <p class="text-gray-600 mb-2">${currentUser.phone}</p>
      <p class="text-gray-500 text-sm mb-6">${currentUser.email}</p>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-amber-50 p-4 rounded-xl">
          <p class="text-2xl font-bold text-amber-700">${
            currentUser.favorites?.length || 0
          }</p>
          <p class="text-sm text-gray-600">Resep Favorit</p>
        </div>
        <div class="bg-orange-50 p-4 rounded-xl">
          <p class="text-2xl font-bold text-orange-700">${
            currentUser.saved?.length || 0
          }</p>
          <p class="text-sm text-gray-600">Resep Disimpan</p>
        </div>
      </div>
      
      <div class="space-y-3">
        <button type="button" onclick="closeAccountModal(); navigate('favorites')" 
          class="w-full bg-amber-100 text-amber-700 font-bold py-3 rounded-lg hover:bg-amber-200 transition duration-200">
          Lihat Favorit
        </button>
        <button type="button" onclick="closeAccountModal(); navigate('saved')" 
          class="w-full bg-orange-100 text-orange-700 font-bold py-3 rounded-lg hover:bg-orange-200 transition duration-200">
          Lihat Disimpan
        </button>
        <button type="button" onclick="handleLogout()" 
          class="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition duration-200">
          Keluar
        </button>
      </div>
    </div>
  `;
}

// Profil admin - DIPERBAIKI dengan nomor telepon baru
function getAdminProfileContent() {
  return `
    <div class="text-center">
      <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
        AD
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-1">Administrator</h3>
      <p class="text-gray-600 mb-2">${currentUser.phone}</p>
      <p class="text-gray-500 text-sm mb-6">${currentUser.email}</p>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-purple-50 p-4 rounded-xl">
          <p class="text-2xl font-bold text-purple-700">${allRecipes.length}</p>
          <p class="text-sm text-gray-600">Total Resep</p>
        </div>
        <div class="bg-indigo-50 p-4 rounded-xl">
          <p class="text-2xl font-bold text-indigo-700">${userSuggestions.length}</p>
          <p class="text-sm text-gray-600">Saran Masuk</p>
        </div>
      </div>
      
      <div class="space-y-3">
        <button type="button" onclick="closeAccountModal(); navigate('manage')" 
          class="w-full bg-purple-100 text-purple-700 font-bold py-3 rounded-lg hover:bg-purple-200 transition duration-200">
          Kelola Resep
        </button>
        <button type="button" onclick="closeAccountModal(); navigate('suggestions')" 
          class="w-full bg-indigo-100 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-200 transition duration-200">
          Lihat Saran
        </button>
        <button type="button" onclick="handleLogout()" 
          class="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition duration-200">
          Keluar
        </button>
      </div>
    </div>
  `;
}

// Handle logout - DIPERBAIKI untuk kembali ke beranda
function handleLogout() {
  currentUser = null;
  saveData();
  updateHeader();
  closeAccountModal();
  showMessage("Logout berhasil!", "success");

  // Kembali ke beranda dan reset indikator navigasi
  navigate("home");
}

// ============================================
// FUNGSI RESEP - TOGGLE FAVORIT & SIMPAN (DIPERBAIKI)
// ============================================

// Toggle favorit - DIPERBAIKI
function toggleFavorite(recipeId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!currentUser) {
    openAccountMenu();
    return;
  }

  // Inisialisasi array favorites jika belum ada
  if (!currentUser.favorites) {
    currentUser.favorites = [];
  }

  const index = currentUser.favorites.indexOf(recipeId);

  if (index === -1) {
    // Tambah ke favorit
    currentUser.favorites.push(recipeId);
    showMessage("Resep ditambahkan ke favorit!", "success");
  } else {
    // Hapus dari favorit
    currentUser.favorites.splice(index, 1);
    showMessage("Resep dihapus dari favorit!", "info");
  }

  // Update localStorage dan header
  saveData();
  updateHeader();

  // Update UI jika di halaman favorit
  if (document.getElementById("favorites").classList.contains("active")) {
    loadFavoritesPage();
  }

  // Update tombol favorit di card
  const favoriteBtn = event?.target?.closest("button");
  if (favoriteBtn) {
    const isFavorite = currentUser.favorites.includes(recipeId);

    if (isFavorite) {
      favoriteBtn.className =
        "p-2 rounded-full bg-red-500 text-white backdrop-blur-sm hover:bg-red-600 transition duration-200";
      favoriteBtn.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `;
    } else {
      favoriteBtn.className =
        "p-2 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white transition duration-200";
      favoriteBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `;
    }

    // Update card di halaman detail jika sedang terbuka
    updateDetailPageButtons(recipeId);
  }
}

// Toggle saved - DIPERBAIKI
function toggleSaved(recipeId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!currentUser) {
    openAccountMenu();
    return;
  }

  // Inisialisasi array saved jika belum ada
  if (!currentUser.saved) {
    currentUser.saved = [];
  }

  const index = currentUser.saved.indexOf(recipeId);

  if (index === -1) {
    // Tambah ke saved
    currentUser.saved.push(recipeId);
    showMessage("Resep disimpan!", "success");
  } else {
    // Hapus dari saved
    currentUser.saved.splice(index, 1);
    showMessage("Resep dihapus dari simpanan!", "info");
  }

  // Update localStorage dan header
  saveData();
  updateHeader();

  // Update UI jika di halaman saved
  if (document.getElementById("saved").classList.contains("active")) {
    loadSavedPage();
  }

  // Update tombol saved di card
  const savedBtn = event?.target?.closest("button");
  if (savedBtn) {
    const isSaved = currentUser.saved.includes(recipeId);

    if (isSaved) {
      savedBtn.className =
        "p-2 rounded-full bg-blue-500 text-white backdrop-blur-sm hover:bg-blue-600 transition duration-200";
      savedBtn.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      `;
    } else {
      savedBtn.className =
        "p-2 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white transition duration-200";
      savedBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      `;
    }

    // Update card di halaman detail jika sedang terbuka
    updateDetailPageButtons(recipeId);
  }
}

// Fungsi baru untuk update tombol di halaman detail
function updateDetailPageButtons(recipeId) {
  if (!document.getElementById("detail").classList.contains("active")) return;

  const recipe = allRecipes.find((r) => r.id === recipeId);
  if (!recipe) return;

  // Update tombol di halaman detail
  const isFavorite = currentUser?.favorites
    ? currentUser.favorites.includes(recipeId)
    : false;
  const isSaved = currentUser?.saved
    ? currentUser.saved.includes(recipeId)
    : false;

  // Update tombol favorit di detail
  const detailFavoriteBtn = document.querySelector(
    '#detail button[onclick*="toggleFavorite"]'
  );
  if (detailFavoriteBtn) {
    if (isFavorite) {
      detailFavoriteBtn.className =
        "p-3 rounded-full bg-red-500 text-white backdrop-blur-sm shadow-lg hover:bg-red-600 transition duration-200";
      detailFavoriteBtn.innerHTML = `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `;
    } else {
      detailFavoriteBtn.className =
        "p-3 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm shadow-lg hover:bg-white transition duration-200";
      detailFavoriteBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `;
    }
  }

  // Update tombol saved di detail
  const detailSavedBtn = document.querySelector(
    '#detail button[onclick*="toggleSaved"]'
  );
  if (detailSavedBtn) {
    if (isSaved) {
      detailSavedBtn.className =
        "p-3 rounded-full bg-blue-500 text-white backdrop-blur-sm shadow-lg hover:bg-blue-600 transition duration-200";
      detailSavedBtn.innerHTML = `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      `;
    } else {
      detailSavedBtn.className =
        "p-3 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm shadow-lg hover:bg-white transition duration-200";
      detailSavedBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      `;
    }
  }
}

// ============================================
// FUNGSI RESEP
// ============================================

// Card resep
function createRecipeCard(recipe) {
  const rating = calculateAverageRating(recipe.ratings);
  const isFavorite = currentUser?.favorites
    ? currentUser.favorites.includes(recipe.id)
    : false;
  const isSaved = currentUser?.saved
    ? currentUser.saved.includes(recipe.id)
    : false;

  // Gunakan imageUrl jika ada, jika tidak gunakan placeholder
  const imageUrl =
    recipe.imageUrl ||
    `https://via.placeholder.com/400x300/${
      recipe.imagePlaceholder || "f59e0b/ffffff?text=RESEP"
    }`;

  return `
    <div class="recipe-card bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300">
      <div class="relative">
        <img src="${imageUrl}" alt="${recipe.title}" 
          class="w-full h-48 object-cover" 
          onerror="this.src='https://via.placeholder.com/400x300/f59e0b/ffffff?text=RESEP'">
        
        ${
          currentUser && !currentUser.isAdmin
            ? `
          <div class="absolute top-3 right-3 flex space-x-2">
            <button onclick="toggleFavorite('${recipe.id}', event)" 
              class="p-2 rounded-full ${
                isFavorite
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white/80 text-gray-700 hover:bg-white"
              } backdrop-blur-sm transition duration-200">
              <svg class="w-5 h-5" fill="${
                isFavorite ? "currentColor" : "none"
              }" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="${
                  isFavorite ? "0" : "2"
                }" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button onclick="toggleSaved('${recipe.id}', event)" 
              class="p-2 rounded-full ${
                isSaved
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white/80 text-gray-700 hover:bg-white"
              } backdrop-blur-sm transition duration-200">
              <svg class="w-5 h-5" fill="${
                isSaved ? "currentColor" : "none"
              }" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="${
                  isSaved ? "0" : "2"
                }" 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        `
            : ""
        }
        
        <div class="absolute bottom-3 left-3">
          <span class="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${recipe.category}
          </span>
        </div>
      </div>
      
      <div class="p-5 recipe-card-content">
        <h3 class="text-xl font-bold text-gray-800 mb-2 truncate-title">${
          recipe.title
        }</h3>
        
        <div class="flex items-center text-gray-600 mb-3">
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm mr-4">${recipe.duration}</span>
          
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          <span class="text-sm">${recipe.portion}</span>
        </div>
        
        <div class="flex items-center mb-4">
          <div class="flex text-amber-500">
            ${[1, 2, 3, 4, 5]
              .map(
                (i) => `
              <svg class="w-5 h-5 ${
                i <= rating ? "fill-current" : "fill-none stroke-current"
              }" 
                viewBox="0 0 24 24">
                <path ${i <= rating ? "" : 'stroke-width="2"'} 
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            `
              )
              .join("")}
          </div>
          <span class="ml-2 text-gray-700 font-semibold">${rating}</span>
          <span class="ml-1 text-gray-500 text-sm">(${
            recipe.ratings?.length || 0
          })</span>
        </div>
        
        <p class="text-gray-600 mb-4 recipe-card-description limit-description">${
          recipe.description
        }</p>
        
        <div class="recipe-card-button">
          <button onclick="showRecipeDetail('${recipe.id}')" 
            class="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition duration-200">
            Lihat Resep
          </button>
        </div>
      </div>
    </div>
  `;
}

// Card resep untuk admin (dengan tombol edit/hapus)
function createManageRecipeCard(recipe) {
  const rating = calculateAverageRating(recipe.ratings);
  const imageUrl =
    recipe.imageUrl ||
    `https://via.placeholder.com/400x300/${
      recipe.imagePlaceholder || "f59e0b/ffffff?text=RESEP"
    }`;

  return `
    <div class="manage-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
      <div class="relative">
        <img src="${imageUrl}" alt="${recipe.title}" 
          class="w-full h-48 object-cover" 
          onerror="this.src='https://via.placeholder.com/400x300/f59e0b/ffffff?text=RESEP'">
        
        <div class="absolute top-3 right-3">
          <span class="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${recipe.category}
          </span>
        </div>
      </div>
      
      <div class="p-5">
        <h3 class="text-xl font-bold text-gray-800 mb-2 truncate-title">${
          recipe.title
        }</h3>
        
        <div class="flex items-center text-gray-600 mb-3">
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm mr-4">${recipe.duration}</span>
          
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          <span class="text-sm">${recipe.portion}</span>
        </div>
        
        <div class="flex items-center mb-4">
          <div class="flex text-amber-500">
            ${[1, 2, 3, 4, 5]
              .map(
                (i) => `
              <svg class="w-5 h-5 ${
                i <= rating ? "fill-current" : "fill-none stroke-current"
              }" 
                viewBox="0 0 24 24">
                <path ${i <= rating ? "" : 'stroke-width="2"'} 
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            `
              )
              .join("")}
          </div>
          <span class="ml-2 text-gray-700 font-semibold">${rating}</span>
          <span class="ml-1 text-gray-500 text-sm">(${
            recipe.ratings?.length || 0
          })</span>
        </div>
        
        <p class="text-gray-600 mb-4 limit-description">${
          recipe.description
        }</p>
        
        <div class="flex space-x-3">
          <button onclick="editRecipe('${recipe.id}')" 
            class="flex-1 bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-200">
            Edit
          </button>
          <button onclick="deleteRecipe('${recipe.id}')" 
            class="flex-1 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-200">
            Hapus
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// FUNGSI ADMIN - EDIT RESEP (DIPERBAIKI)
// ============================================

// Edit resep - FIXED: Mengisi form edit dengan benar
function editRecipe(recipeId) {
  console.log("Editing recipe:", recipeId);
  const recipe = allRecipes.find((r) => r.id === recipeId);
  if (!recipe) {
    console.error("Recipe not found:", recipeId);
    return;
  }

  // Isi form edit dengan data resep
  document.getElementById("edit-id").value = recipe.id;
  document.getElementById("edit-title").value = recipe.title;
  document.getElementById("edit-description").value = recipe.description;
  document.getElementById("edit-duration").value = recipe.duration;
  document.getElementById("edit-portion").value = recipe.portion;
  document.getElementById("edit-image-url").value = recipe.imageUrl || "";

  // Isi kategori
  const categorySelect = document.getElementById("edit-category");
  if (categorySelect) {
    categorySelect.value = recipe.category;
  }

  // Isi bahan-bahan (array -> string dipisah koma)
  document.getElementById("edit-ingredients").value = Array.isArray(
    recipe.ingredients
  )
    ? recipe.ingredients.join(", ")
    : recipe.ingredients;

  // Isi langkah-langkah (array -> string dipisah titik koma)
  document.getElementById("edit-steps").value = Array.isArray(recipe.steps)
    ? recipe.steps.join("; ")
    : recipe.steps;

  // Buka modal edit
  openModal("edit-recipe-modal");
}

// Update resep - FIXED: Menyimpan perubahan dengan benar
function updateRecipe(event) {
  event.preventDefault();

  const recipeId = document.getElementById("edit-id").value;
  const recipeIndex = allRecipes.findIndex((r) => r.id === recipeId);

  if (recipeIndex === -1) {
    showMessage("Resep tidak ditemukan!", "error");
    return;
  }

  // Ambil nilai dari form
  const updatedRecipe = {
    ...allRecipes[recipeIndex],
    title: document.getElementById("edit-title").value,
    category: document.getElementById("edit-category").value,
    duration: document.getElementById("edit-duration").value,
    portion: document.getElementById("edit-portion").value,
    description: document.getElementById("edit-description").value,
    imageUrl: document.getElementById("edit-image-url").value,
    ingredients: document
      .getElementById("edit-ingredients")
      .value.split(",")
      .map((item) => item.trim())
      .filter((item) => item !== ""),
    steps: document
      .getElementById("edit-steps")
      .value.split(";")
      .map((step) => step.trim())
      .filter((step) => step !== ""),
  };

  // Update resep
  allRecipes[recipeIndex] = updatedRecipe;

  // Simpan ke localStorage
  saveData();

  // Tutup modal dan refresh halaman
  closeModal("edit-recipe-modal");
  showMessage("Resep berhasil diperbarui!", "success");

  // Refresh halaman yang aktif
  if (document.getElementById("manage").classList.contains("active")) {
    loadManagePage();
  } else if (document.getElementById("recipes").classList.contains("active")) {
    loadRecipesPage();
  }
}

// ============================================
// FUNGSI ADMIN - TAMBAH RESEP (DIPERBAIKI)
// ============================================

// Tambah resep baru
function addRecipe(event) {
  event.preventDefault();

  // Ambil nilai dari form
  const newRecipe = {
    id: generateId(),
    title: document.getElementById("new-title").value,
    category: document.getElementById("new-category").value,
    duration: document.getElementById("new-duration").value,
    portion: document.getElementById("new-portion").value,
    description: document.getElementById("new-description").value,
    imageUrl: document.getElementById("new-image-url").value || "",
    imagePlaceholder: "",
    ingredients: document
      .getElementById("new-ingredients")
      .value.split(",")
      .map((item) => item.trim())
      .filter((item) => item !== ""),
    steps: document
      .getElementById("new-steps")
      .value.split(";")
      .map((step) => step.trim())
      .filter((step) => step !== ""),
    ratings: [],
    comments: [],
    addedBy: currentUser?.id || "admin",
    addedDate: new Date().toISOString(),
    isPublic: true,
  };

  // Validasi
  if (
    !newRecipe.title ||
    !newRecipe.category ||
    !newRecipe.duration ||
    !newRecipe.portion ||
    !newRecipe.description ||
    newRecipe.ingredients.length === 0 ||
    newRecipe.steps.length === 0
  ) {
    showMessage("Harap isi semua field yang diperlukan!", "error");
    return;
  }

  // Tambahkan resep baru
  allRecipes.push(newRecipe);

  // Simpan ke localStorage
  saveData();

  // Reset form
  event.target.reset();

  // Tutup modal dan refresh halaman
  closeModal("add-recipe-modal");
  showMessage("Resep baru berhasil ditambahkan!", "success");

  // Refresh halaman yang aktif
  if (document.getElementById("manage").classList.contains("active")) {
    loadManagePage();
  } else if (document.getElementById("recipes").classList.contains("active")) {
    loadRecipesPage();
  }
}

// Hapus resep
function deleteRecipe(recipeId) {
  if (!confirm("Apakah Anda yakin ingin menghapus resep ini?")) return;

  const recipeIndex = allRecipes.findIndex((r) => r.id === recipeId);
  if (recipeIndex !== -1) {
    allRecipes.splice(recipeIndex, 1);
    saveData();
    showMessage("Resep berhasil dihapus!", "success");

    // Refresh halaman manage
    if (document.getElementById("manage").classList.contains("active")) {
      loadManagePage();
    }
  }
}

// ============================================
// FUNGSI RESEP DETAIL
// ============================================

// Tampilkan detail resep
function showRecipeDetail(recipeId) {
  const recipe = allRecipes.find((r) => r.id === recipeId);
  if (!recipe) return;

  const detailSection = document.getElementById("detail");
  if (!detailSection) return;

  const rating = calculateAverageRating(recipe.ratings);
  const imageUrl =
    recipe.imageUrl ||
    `https://via.placeholder.com/800x500/${
      recipe.imagePlaceholder || "f59e0b/ffffff?text=RESEP"
    }`;
  const isFavorite = currentUser?.favorites
    ? currentUser.favorites.includes(recipeId)
    : false;
  const isSaved = currentUser?.saved
    ? currentUser.saved.includes(recipeId)
    : false;

  detailSection.innerHTML = `
    <div class="max-w-6xl mx-auto animate-fadeInUp">
      <button onclick="navigate('recipes')" 
        class="mb-6 flex items-center text-amber-600 hover:text-amber-700 font-semibold">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Resep
      </button>
      
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="relative">
          <img src="${imageUrl}" alt="${recipe.title}" 
            class="w-full h-64 md:h-80 object-cover"
            onerror="this.src='https://via.placeholder.com/800x500/f59e0b/ffffff?text=RESEP'">
          
          <div class="absolute top-4 right-4 flex space-x-2">
            ${
              currentUser && !currentUser.isAdmin
                ? `
              <button onclick="toggleFavorite('${recipe.id}', event)" 
                class="p-3 rounded-full ${
                  isFavorite
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-white/80 text-gray-700 hover:bg-white"
                } backdrop-blur-sm shadow-lg transition duration-200">
                <svg class="w-6 h-6" fill="${
                  isFavorite ? "currentColor" : "none"
                }" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="${
                    isFavorite ? "0" : "2"
                  }" 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button onclick="toggleSaved('${recipe.id}', event)" 
                class="p-3 rounded-full ${
                  isSaved
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-white/80 text-gray-700 hover:bg-white"
                } backdrop-blur-sm shadow-lg transition duration-200">
                <svg class="w-6 h-6" fill="${
                  isSaved ? "currentColor" : "none"
                }" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="${
                    isSaved ? "0" : "2"
                  }" 
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            `
                : ""
            }
          </div>
          
          <div class="absolute bottom-4 left-4">
            <span class="bg-amber-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              ${recipe.category}
            </span>
          </div>
        </div>
        
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">${
                recipe.title
              }</h2>
              <div class="flex items-center text-gray-600 mb-2">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span class="text-lg mr-6">${recipe.duration}</span>
                
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <span class="text-lg">${recipe.portion}</span>
              </div>
            </div>
            
            <div class="mt-4 md:mt-0">
              <div class="flex items-center">
                <div class="flex text-amber-500">
                  ${[1, 2, 3, 4, 5]
                    .map(
                      (i) => `
                    <svg class="w-8 h-8 ${
                      i <= rating ? "fill-current" : "fill-none stroke-current"
                    }" 
                      viewBox="0 0 24 24">
                      <path ${i <= rating ? "" : 'stroke-width="2"'} 
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  `
                    )
                    .join("")}
                </div>
                <span class="ml-3 text-2xl font-bold text-gray-800">${rating}</span>
                <span class="ml-1 text-gray-500">(${
                  recipe.ratings?.length || 0
                } rating)</span>
              </div>
            </div>
          </div>
          
          <p class="text-gray-700 text-lg mb-8 leading-relaxed">${
            recipe.description
          }</p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">📋 Bahan-bahan</h3>
              <ul class="space-y-2">
                ${recipe.ingredients
                  .map(
                    (ingredient) => `
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-amber-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-gray-700">${ingredient}</span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
            
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">👨‍🍳 Langkah-langkah</h3>
              <ol class="space-y-4">
                ${recipe.steps
                  .map(
                    (step, index) => `
                  <li class="flex">
                    <span class="bg-amber-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      ${index + 1}
                    </span>
                    <span class="text-gray-700 pt-1">${step}</span>
                  </li>
                `
                  )
                  .join("")}
              </ol>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">💬 Komentar dan Rating</h3>
            
            ${
              currentUser && !currentUser.isAdmin
                ? `
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-gray-700 mb-3">Berikan Rating</h4>
                <div class="flex items-center mb-6">
                  <span class="mr-3 text-gray-700">Rating:</span>
                  <div class="flex">
                    ${[1, 2, 3, 4, 5]
                      .map(
                        (i) => `
                      <button onclick="rateRecipe('${
                        recipe.id
                      }', ${i})" class="mr-1 focus:outline-none">
                        <svg class="w-8 h-8 ${
                          i <= (currentUser.ratings?.[recipe.id] || 0)
                            ? "text-amber-500 fill-current"
                            : "text-gray-300 fill-none stroke-current"
                        }" 
                          viewBox="0 0 24 24">
                          <path ${
                            i <= (currentUser.ratings?.[recipe.id] || 0)
                              ? ""
                              : 'stroke-width="2"'
                          } 
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                
                <h4 class="text-lg font-semibold text-gray-700 mb-3">Tambah Komentar (Opsional)</h4>
                <div class="mb-3">
                  <textarea id="comment-text" placeholder="Tulis komentar Anda (opsional)..." 
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"></textarea>
                </div>
                <button onclick="addComment('${recipe.id}')" 
                  class="bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-200">
                  Kirim Komentar
                </button>
              </div>
            `
                : currentUser && currentUser.isAdmin
                ? `<div class="bg-amber-50 p-4 rounded-lg mb-8">
                    <p class="text-amber-700">Admin tidak dapat memberikan rating dan komentar.</p>
                  </div>`
                : `
              <div class="bg-amber-50 p-4 rounded-lg mb-8">
                <p class="text-amber-700">Silakan <button onclick="openAccountMenu()" class="font-semibold underline">login</button> untuk memberikan rating dan komentar.</p>
              </div>
            `
            }
            
            <div class="space-y-6">
              ${
                recipe.comments && recipe.comments.length > 0
                  ? recipe.comments
                      .map(
                        (comment) => `
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex justify-between items-start mb-2">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold mr-3">
                          ${comment.user.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h5 class="font-bold text-gray-800">${
                            comment.user
                          }</h5>
                          <p class="text-gray-500 text-sm">${formatDate(
                            comment.date
                          )}</p>
                        </div>
                      </div>
                      <div class="flex text-amber-500">
                        ${[1, 2, 3, 4, 5]
                          .map(
                            (i) => `
                          <svg class="w-5 h-5 ${
                            i <= comment.rating
                              ? "fill-current"
                              : "fill-none stroke-current"
                          }" 
                            viewBox="0 0 24 24">
                            <path ${
                              i <= comment.rating ? "" : 'stroke-width="2"'
                            } 
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        `
                          )
                          .join("")}
                      </div>
                    </div>
                    <p class="text-gray-700">${comment.text}</p>
                  </div>
                `
                      )
                      .join("")
                  : `<p class="text-gray-500 text-center py-4">Belum ada komentar. Jadilah yang pertama berkomentar!</p>`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Tampilkan halaman detail
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.remove("active");
  });
  detailSection.classList.add("active");

  // Update indikator navigasi
  updateActiveIndicator("recipes");
}

// Rate resep
function rateRecipe(recipeId, rating) {
  if (!currentUser) {
    openAccountMenu();
    return;
  }

  const recipe = allRecipes.find((r) => r.id === recipeId);
  if (!recipe) return;

  // Simpan rating user untuk resep ini
  if (!currentUser.ratings) currentUser.ratings = {};
  currentUser.ratings[recipeId] = rating;

  // Tambahkan rating ke resep
  if (!recipe.ratings) recipe.ratings = [];
  recipe.ratings.push(rating);

  // Update localStorage
  saveData();

  // Update UI
  showRecipeDetail(recipeId);
  showMessage("Rating berhasil diberikan!", "success");
}

// Tambah komentar
function addComment(recipeId) {
  if (!currentUser) {
    openAccountMenu();
    return;
  }

  const commentText = document.getElementById("comment-text").value;
  if (!commentText.trim()) {
    showMessage("Komentar tidak boleh kosong!", "error");
    return;
  }

  const recipe = allRecipes.find((r) => r.id === recipeId);
  if (!recipe) return;

  // Tambahkan komentar
  if (!recipe.comments) recipe.comments = [];
  recipe.comments.unshift({
    user: currentUser.name,
    rating: currentUser.ratings?.[recipeId] || 5,
    text: commentText,
    date: new Date().toISOString(),
  });

  // Update localStorage
  saveData();

  // Update UI
  showRecipeDetail(recipeId);
  showMessage("Komentar berhasil ditambahkan!", "success");
}

// ============================================
// FUNGSI FILTER DAN PENCARIAN
// ============================================

// Filter resep berdasarkan pencarian dan kategori
function filterRecipes() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const noResults = document.getElementById("no-results");
  const recipesContainer = document.getElementById("recipes-container");

  if (!recipesContainer) return;

  // Filter resep
  let filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.category.toLowerCase().includes(searchTerm);
    const matchesCategory =
      currentCategoryFilter === "all" ||
      recipe.category === currentCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Tampilkan resep
  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = "";
    if (noResults) noResults.classList.remove("hidden");
  } else {
    if (noResults) noResults.classList.add("hidden");
    recipesContainer.innerHTML = filteredRecipes.map(createRecipeCard).join("");
  }
}

// Filter resep beranda
function filterHomeRecipes() {
  const recipesContainer = document.getElementById("home-recipes-container");
  if (!recipesContainer) return;

  // Ambil 8 resep acak untuk beranda
  const shuffled = [...allRecipes].sort(() => 0.5 - Math.random());
  const homeRecipes = shuffled.slice(0, 8);

  recipesContainer.innerHTML = homeRecipes.map(createRecipeCard).join("");
}

// Filter berdasarkan kategori
function filterByCategory(category) {
  currentCategoryFilter = category;
  filterRecipes();

  // Update tombol kategori aktif
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("bg-amber-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  const activeBtn = document.querySelector(
    `.filter-btn[data-category="${category}"]`
  );
  if (activeBtn) {
    activeBtn.classList.remove("bg-gray-200", "text-gray-700");
    activeBtn.classList.add("bg-amber-600", "text-white");
  }
}

// Buat filter kategori
function createCategoryFilters() {
  const filtersContainer = document.getElementById("category-filters");
  if (!filtersContainer) return;

  filtersContainer.innerHTML = `
    <button onclick="filterByCategory('all')" 
      class="filter-btn bg-amber-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-700 transition duration-200" data-category="all">
      Semua
    </button>
    ${categories
      .map(
        (category) => `
      <button onclick="filterByCategory('${category}')" 
        class="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-200" data-category="${category}">
        ${category}
      </button>
    `
      )
      .join("")}
  `;
}

// ============================================
// FUNGSI FILTER SARAN (DIPERBAIKI)
// ============================================

function filterSuggestions(filter) {
  console.log("Filtering suggestions with:", filter);
  currentFilter = filter;

  const container = document.getElementById("suggestions-list");
  const noSuggestions = document.getElementById("no-suggestions");

  if (!container) {
    console.error("Container not found!");
    return;
  }

  // Filter saran berdasarkan status
  let filteredSuggestions = [];
  if (filter === "all") {
    filteredSuggestions = [...userSuggestions];
  } else if (filter === "unread") {
    filteredSuggestions = userSuggestions.filter((s) => s.status === "unread");
  } else if (filter === "read") {
    filteredSuggestions = userSuggestions.filter((s) => s.status === "read");
  }

  console.log("Filtered results:", filteredSuggestions.length);

  // Update tombol filter - FIXED
  document
    .querySelectorAll("#suggestions-filter-buttons .filter-btn")
    .forEach((btn) => {
      btn.classList.remove("active-filter");
      btn.classList.add("inactive-filter");
    });

  const activeBtn = document.querySelector(
    `#suggestions-filter-buttons .filter-btn[data-filter="${filter}"]`
  );
  if (activeBtn) {
    activeBtn.classList.remove("inactive-filter");
    activeBtn.classList.add("active-filter");
  }

  // Tampilkan hasil
  if (filteredSuggestions.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 animate-fadeIn">
        <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <h3 class="text-xl font-bold text-gray-700 mb-2">
            ${
              filter === "all"
                ? "Tidak Ada Saran"
                : filter === "unread"
                ? "Tidak Ada Saran Belum Dibaca"
                : "Tidak Ada Saran Sudah Dibaca"
            }
          </h3>
          <p class="text-gray-500">Tidak ada saran yang ditemukan.</p>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = filteredSuggestions
      .map(
        (suggestion, index) => `
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-4 animate-fadeInUp" style="animation-delay: ${
        index * 100
      }ms">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-bold text-gray-800">${
              suggestion.subject || "Tanpa Judul"
            }</h4>
            <p class="text-gray-600">Dari: ${suggestion.name} (${
          suggestion.email
        })</p>
            <p class="text-gray-500 text-sm">${formatDate(suggestion.date)}</p>
          </div>
          <span class="px-3 py-1 rounded-full text-sm font-semibold ${
            suggestion.status === "unread"
              ? "bg-amber-100 text-amber-800"
              : "bg-green-100 text-green-800"
          }">
            ${
              suggestion.status === "unread"
                ? "📨 Belum Dibaca"
                : "✅ Sudah Dibaca"
            }
          </span>
        </div>
        
        <p class="text-gray-700 mb-4">${suggestion.message}</p>
        
        <div class="flex justify-end space-x-3">
          ${
            suggestion.status === "unread"
              ? `<button onclick="markSuggestionRead('${suggestion.id}')" class="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
              ✅ Tandai Sudah Dibaca
            </button>`
              : `<button onclick="markSuggestionUnread('${suggestion.id}')" class="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-200">
              📨 Tandai Belum Dibaca
            </button>`
          }
          <button onclick="deleteSuggestion('${
            suggestion.id
          }')" class="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
            🗑️ Hapus
          </button>
        </div>
      </div>
    `
      )
      .join("");
  }
}

// ============================================
// FUNGSI HALAMAN
// ============================================

// Load halaman beranda
function loadHomePage() {
  filterHomeRecipes();
}

// Load halaman resep
function loadRecipesPage() {
  createCategoryFilters();
  filterRecipes();
}

// Load halaman favorit
function loadFavoritesPage() {
  if (!currentUser) {
    openAccountMenu();
    return;
  }

  const container = document.getElementById("favorites-container");
  if (!container) return;

  const favoriteRecipes = allRecipes.filter((recipe) =>
    currentUser.favorites?.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Favorit</h3>
          <p class="text-gray-500 mb-4">Tambahkan resep ke favorit untuk melihatnya di sini.</p>
          <button onclick="navigate('recipes')" 
            class="bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-200">
            Jelajahi Resep
          </button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = favoriteRecipes.map(createRecipeCard).join("");
  }
}

// Load halaman disimpan
function loadSavedPage() {
  if (!currentUser) {
    openAccountMenu();
    return;
  }

  const container = document.getElementById("saved-container");
  if (!container) return;

  const savedRecipes = allRecipes.filter((recipe) =>
    currentUser.saved?.includes(recipe.id)
  );

  if (savedRecipes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Resep Disimpan</h3>
          <p class="text-gray-500 mb-4">Simpan resep untuk melihatnya di sini.</p>
          <button onclick="navigate('recipes')" 
            class="bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-200">
            Jelajahi Resep
          </button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = savedRecipes.map(createRecipeCard).join("");
  }
}

// Load halaman kelola resep (admin)
function loadManagePage() {
  if (!currentUser || !currentUser.isAdmin) {
    showMessage("Akses ditolak. Hanya untuk admin.", "error");
    navigate("home");
    return;
  }

  const container = document.getElementById("manage-container");
  if (!container) return;

  if (allRecipes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Resep</h3>
          <p class="text-gray-500 mb-4">Tambahkan resep pertama Anda.</p>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = allRecipes.map(createManageRecipeCard).join("");
  }
}

// Load halaman saran (admin) - DIPERBAIKI
function loadSuggestionsPage() {
  console.log("Loading suggestions page...");

  if (!currentUser || !currentUser.isAdmin) {
    showMessage("Akses ditolak. Hanya untuk admin.", "error");
    navigate("home");
    return;
  }

  // Buat tombol filter jika belum ada
  const filterContainer = document.getElementById("suggestions-filter-buttons");
  if (filterContainer) {
    const unreadCount = userSuggestions.filter(
      (s) => s.status === "unread"
    ).length;
    const readCount = userSuggestions.filter((s) => s.status === "read").length;
    const totalCount = userSuggestions.length;

    filterContainer.innerHTML = `
      <button onclick="filterSuggestions('all')" 
        data-filter="all"
        class="filter-btn ${
          currentFilter === "all" ? "active-filter" : "inactive-filter"
        } px-4 py-2 rounded-lg font-semibold transition duration-200">
        📋 Semua (${totalCount})
      </button>
      <button onclick="filterSuggestions('unread')" 
        data-filter="unread"
        class="filter-btn ${
          currentFilter === "unread" ? "active-filter" : "inactive-filter"
        } px-4 py-2 rounded-lg font-semibold transition duration-200">
        📨 Belum Dibaca (${unreadCount})
      </button>
      <button onclick="filterSuggestions('read')" 
        data-filter="read"
        class="filter-btn ${
          currentFilter === "read" ? "active-filter" : "inactive-filter"
        } px-4 py-2 rounded-lg font-semibold transition duration-200">
        ✅ Sudah Dibaca (${readCount})
      </button>
    `;
  }

  // Load data
  filterSuggestions(currentFilter);
}

// ============================================
// FUNGSI ADMIN - MANAJEMEN SARAN
// ============================================

// Tandai saran sudah dibaca
function markSuggestionRead(suggestionId) {
  const suggestion = userSuggestions.find((s) => s.id === suggestionId);
  if (suggestion) {
    suggestion.status = "read";
    saveData();
    filterSuggestions(currentFilter);
    showMessage("Saran ditandai sudah dibaca", "success");
  }
}

// Tandai saran belum dibaca
function markSuggestionUnread(suggestionId) {
  const suggestion = userSuggestions.find((s) => s.id === suggestionId);
  if (suggestion) {
    suggestion.status = "unread";
    saveData();
    filterSuggestions(currentFilter);
    showMessage("Saran ditandai belum dibaca", "success");
  }
}

// Hapus saran
function deleteSuggestion(suggestionId) {
  if (!confirm("Apakah Anda yakin ingin menghapus saran ini?")) return;

  const index = userSuggestions.findIndex((s) => s.id === suggestionId);
  if (index !== -1) {
    userSuggestions.splice(index, 1);
    saveData();
    filterSuggestions(currentFilter);
    showMessage("Saran berhasil dihapus", "success");
  }
}

// ============================================
// FUNGSI FORM KONTAK
// ============================================

// Kirim form kontak
function submitContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validasi
  if (!name || !email || !message) {
    showMessage("Harap isi semua field!", "error");
    return;
  }

  // Buat objek saran
  const suggestion = {
    id: generateId(),
    name,
    email,
    subject: "Saran dari " + name,
    message,
    date: new Date().toISOString(),
    status: "unread",
  };

  // Tambahkan ke array saran
  userSuggestions.push(suggestion);

  // Update localStorage
  saveData();

  // Reset form
  event.target.reset();

  // Tampilkan pesan sukses
  showMessage(
    "Pesan berhasil dikirim! Terima kasih atas saran Anda.",
    "success"
  );

  // Jika admin sedang login, update notifikasi
  if (currentUser?.isAdmin) {
    updateHeader();
  }
}

// ============================================
// FUNGSI UTILITAS LAINNYA
// ============================================

// Tampilkan pesan dengan posisi baru (di atas tengah)
function showMessage(text, type) {
  // Hapus pesan sebelumnya
  const existingMessage = document.getElementById("temp-message");
  if (existingMessage) existingMessage.remove();

  // Buat elemen pesan
  const message = document.createElement("div");
  message.id = "temp-message";
  message.className = `fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 opacity-0 ${
    type === "success"
      ? "bg-green-500 text-white"
      : type === "error"
      ? "bg-red-500 text-white"
      : "bg-blue-500 text-white"
  }`;
  message.textContent = text;
  message.style.maxWidth = "90%";

  // Tambahkan ke body
  document.body.appendChild(message);

  // Animasi masuk
  setTimeout(() => {
    message.style.opacity = "1";
    message.style.top = "20px";
  }, 10);

  // Animasi keluar setelah 3 detik
  setTimeout(() => {
    message.style.opacity = "0";
    message.style.top = "0";
    setTimeout(() => {
      if (message.parentNode) message.parentNode.removeChild(message);
    }, 300);
  }, 3000);
}

// Handle hashchange untuk URL
function handleHashChange() {
  const hash = window.location.hash.substring(1) || "home";
  navigate(hash);
}

// ============================================
// INISIALISASI APLIKASI
// ============================================

// Inisialisasi aplikasi
function initApp() {
  // Load data dari localStorage
  loadData();

  // Hapus saran yang ada di akun admin
  userSuggestions = [];
  saveData();

  // Update header berdasarkan user
  updateHeader();

  // Setup event listener untuk hashchange
  window.addEventListener("hashchange", handleHashChange);

  // Navigasi ke halaman berdasarkan hash URL
  handleHashChange();

  // Setup event listener untuk klik di luar modal
  document.addEventListener("click", function (event) {
    const accountModal = document.getElementById("account-modal");
    const modalContent = document.querySelector("#modal-content-container");

    if (accountModal && !accountModal.classList.contains("hidden")) {
      if (
        !modalContent.contains(event.target) &&
        !event.target.closest("#nav-account")
      ) {
        closeAccountModal();
      }
    }
  });

  // Setup event listener untuk escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAccountModal();
      closeModal("add-recipe-modal");
      closeModal("edit-recipe-modal");
    }
  });

  // Tampilkan pesan selamat datang
  setTimeout(() => {
    if (!localStorage.getItem("welcomeShown")) {
      showMessage("Selamat datang di Resep Dapur Nusantara!", "success");
      localStorage.setItem("welcomeShown", "true");
    }
  }, 1000);
}

// Jalankan aplikasi saat DOM siap
document.addEventListener("DOMContentLoaded", initApp);
