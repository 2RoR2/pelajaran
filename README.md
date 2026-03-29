# Elektromekanikal

Projek ini ialah laman pembelajaran interaktif bertema kampus untuk topik elektromekanikal. Pengguna bermula di halaman pembukaan, memilih watak, masuk ke peta kampus, dan kemudian boleh meneroka bilik-bilik pembelajaran seperti nota, kuiz, bengkel simulasi, dan perpustakaan.

## Aliran Projek

Aliran pengguna semasa:

1. `Opening Scene`
2. `Pilih Watak`
3. `Peta Kampus`
4. Pilih salah satu bangunan:
   - `Bilik Nota`
   - `Bilik Kuiz`
   - `Bengkel Simulasi`
   - `Perpustakaan`

## Cara Halaman Berfungsi

### 1. Opening Scene

Halaman pertama memaparkan identiti projek dan butang `MULA PERMAINAN`.

Apa yang berlaku:

- Tekan `MULA PERMAINAN` akan bawa pengguna ke halaman pilih watak.
- Muzik latar peta digunakan untuk opening, pilih watak, dan peta.
- Audio hanya mula dimainkan selepas interaksi pengguna pertama kerana sekatan autoplay pelayar.

### 2. Pilih Watak

Halaman ini membenarkan pengguna memilih watak sebelum masuk ke peta.

Apa yang berlaku:

- Senarai watak dijana daripada `CHARACTER_OPTIONS` dalam [script.js](/workspace/c/Users/User/Downloads/Elektromekanikal/script.js).
- Watak yang dipilih disimpan dalam `localStorage`.
- Watak yang sama akan dipaparkan pada peta dan kotak dialog.

### 3. Peta Kampus

Peta kampus ialah hub utama projek.

Apa yang berlaku:

- Pengguna boleh klik bangunan untuk masuk ke scene tertentu.
- Watak akan "berjalan" ke bangunan sebelum scene bertukar.
- Peta mengandungi elemen visual seperti jalan, plaza, pokok, lampu, taman, pond, dan bangunan.
- Banyak aturan responsif dalam [style.css](/workspace/c/Users/User/Downloads/Elektromekanikal/style.css) digunakan untuk telefon, tablet, iPad, Surface, dan paparan landscape.

Bangunan pada peta:

- `Bilik Nota`
- `Bilik Kuiz`
- `Bengkel Simulasi`
- `Perpustakaan`

### 4. Bilik Nota

Bilik Nota memaparkan kandungan pembelajaran elektromekanikal mengikut kategori.

Struktur nota:

- `Komponen Elektrik`
- `Komponen Elektronik`
- `Komponen Mekanikal`

Apa yang berlaku:

- Paparan awal menunjukkan tajuk-tajuk nota.
- Bila pengguna klik sesuatu tajuk, paparan detail akan dibuka.
- Kad nota tertentu memaparkan imej peralatan daripada folder `src/images/equipment`.

Imej peralatan digunakan untuk:

- Plag 3 Pin
- Motor
- Panel Kawalan
- Sensor
- Takal
- Tali Sawat
- Gear
- Gegancu

### 5. Bilik Kuiz

Bilik Kuiz membolehkan pengguna menjawab kuiz mengikut kategori.

Kategori kuiz disimpan dalam `QUIZ_CATEGORIES` di [script.js](/workspace/c/Users/User/Downloads/Elektromekanikal/script.js).

Ciri utama:

- Soalan pilihan jawapan
- Had masa bagi kategori tertentu
- Markah disimpan dalam `localStorage`
- Maklum balas segera selepas menjawab

### 6. Bengkel Simulasi

Bengkel Simulasi memfokuskan pembinaan kereta elektromekanikal.

Apa yang berlaku:

- Paparan simulasi 3D dipaparkan menggunakan `Three.js`
- Panel langkah di sebelah atau di bawah akan berubah ikut peranti
- Panel rujukan boleh dikembangkan untuk melihat maklumat tambahan
- Pengguna boleh bergerak melalui langkah pembinaan satu demi satu

Kandungan simulasi datang daripada:

- `RC_CAR_STEPS`
- `SIM_STEPS`
- `SIM_REFERENCE`

Susun atur responsif:

- Desktop: simulasi dan panel langkah bersebelahan
- iPad / tablet: simulasi di kiri, langkah di kanan, rujukan di bawah
- Telefon: disusun semula supaya tetap muat dan mudah dibaca

### 7. Perpustakaan

Perpustakaan ialah halaman khas untuk membuka bahan rujukan interaktif.

Apa yang berlaku:

- Dua bahan bacaan komik FlippingBook dipaparkan dalam halaman ini
- Pengguna boleh membaca versi `Bahasa Melayu` dan `Bahasa Cina`
- Setiap bahan juga mempunyai butang untuk dibuka dalam tab baharu
- Tiada muzik latar scene dalam halaman ini supaya kandungan lebih jelas

## Struktur Fail Utama

### [index.html](/workspace/c/Users/User/Downloads/Elektromekanikal/index.html)

Mengandungi semua scene utama:

- Opening scene
- Character scene
- World map scene
- Notes scene
- Quiz scene
- Simulator scene
- Video scene untuk Perpustakaan

### [script.js](/workspace/c/Users/User/Downloads/Elektromekanikal/script.js)

Mengandungi logik utama projek:

- data kuiz
- data nota
- data watak
- pertukaran scene
- audio scene
- render nota
- render kuiz
- render simulator
- logik simulasi 3D

Bahagian penting:

- `CHARACTER_OPTIONS`: senarai watak
- `NOTES_SECTIONS`: kandungan nota
- `QUIZ_CATEGORIES`: data kuiz
- `SIM_REFERENCE`: maklumat rujukan simulasi
- `SCENE_AUDIO_MAP`: audio bagi setiap scene
- `setScene()` dan `performSceneChange()`: pertukaran scene

### [style.css](/workspace/c/Users/User/Downloads/Elektromekanikal/style.css)

Mengandungi semua gaya visual projek:

- gaya opening page
- gaya pilih watak
- gaya peta kampus
- gaya nota, kuiz, simulasi, video
- aturan responsif untuk pelbagai saiz skrin

Folder penting:

- `src/images/character/`: sprite watak
- `src/images/equipment/`: imej komponen untuk nota
- `src/videos/`: audio/video yang digunakan dalam projek

## Audio dan Video

### Audio Scene

Audio scene ditetapkan melalui `SCENE_AUDIO_MAP`.

Pemetaan semasa:

- `opening-scene` -> audio peta
- `character-scene` -> audio peta
- `world-scene` -> audio peta
- `notes-scene` -> audio nota
- `quiz-scene` -> audio kuiz
- `simulator-scene` -> audio bengkel simulasi
- `video-scene` -> tiada audio latar

### Video

Media utama yang digunakan:

- `https://online.flippingbook.com/view/846804014/` untuk versi Bahasa Cina
- `https://online.flippingbook.com/view/846908624/` untuk versi Bahasa Melayu

Digunakan dalam:

- `Perpustakaan`

## Cara Jalankan Projek

Ini ialah projek HTML/CSS/JavaScript biasa.

Cara paling mudah:

1. Buka folder projek
2. Buka `index.html` dalam pelayar

Jika mahu pengalaman lebih stabil, jalankan melalui local server, contohnya Live Server dalam VS Code.

## Ringkasan Cara Semuanya Bersambung

- `index.html` menyediakan struktur semua scene
- `script.js` mengawal logik, data, scene, audio, dan interaksi
- `style.css` mengawal rupa dan susun atur responsif
- imej dan video berada dalam `src/images` dan `src/videos`
- `localStorage` digunakan untuk menyimpan pilihan watak dan skor kuiz

## Nota Penyelenggaraan

Jika mahu tambah kandungan baru:

- tambah watak baru dalam `CHARACTER_OPTIONS`
- tambah nota baru dalam `NOTES_SECTIONS`
- tambah kategori kuiz baru dalam `QUIZ_CATEGORIES`
- tambah media baru dalam `src/images` atau `src/videos`
- kemas kini gaya responsif dalam `style.css` jika susun atur berubah
