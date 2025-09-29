Buatlah Single Page Application menggunakan React dengan kriteria berikut ini.

Kriteria Utama 1: Minimal terdapat 2 halaman yang berbeda
Berikut detail dari kriterianya.

Halaman 1: menampilkan daftar catatan.
Halaman 2: menampilkan detail catatan atau catatan secara tunggal.

Kriteria Utama 2: Daftar catatan
Berikut detail dari kriterianya.

Menampilkan daftar catatan dengan data awal (initial data) yang kami sediakan.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.

Kriteria Utama 3: Detail catatan
Berikut detail dari kriterianya.

Menampilkan catatan tunggal yang dipilih pengguna dari daftar catatan aktif atau diarsipkan.
Menggunakan id catatan sebagai path parameter dalam menampilkan halaman detail catatan.
Catatan yang tampil harus sesuai dengan id yang terdapat pada path parameter.
Halaman Detil Catatan harus dapat diakses langsung dengan menggunakan URL.

Kriteria Utama 4: Menambahkan catatan baru
Aplikasi mampu menambahkan catatan baru dengan kriteria berikut.

Memanfaatkan controlled component dalam membuat form input.
Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh). Kami sarankan untuk memanfaatkan fungsi menyimpan catatan yang disediakan.
Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut:
{
id: string,
title: string,
body: string,
archived: boolean,
createdAt: string,
}
Berikut contoh data riilnya:
{
id: 'notes-1',
title: "Babel",
body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
archived: false,
createdAt: '2022-04-14T04:27:34.572Z'
}
Catatan tambahan
Properti id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().
Fungsi tambah catatan bisa ditampilkan pada halaman terpisah. Contohnya, pada URL /notes/new.

Kriteria Utama 5: Menghapus catatan
Aplikasi mampu menghapus catatan yang tersimpan. Berikut detailnya.

Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.
Tombol hapus boleh diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.
Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.

Kriteria Opsional 1: Arsip Catatan
Berikut detail dari kriterianya.

Catatan terarsip adalah catatan yang properti archived bernilai true.
Menyediakan halaman baru untuk menampilkan daftar catatan yang terarsip.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Arsip kosong” atau pesan apa pun yang mengindikasikan data catatan terarsip kosong.
Mengarsipkan catatan.
Aplikasi harus menyediakan tombol arsip dan batal arsip untuk mengarsipkan dan memindahkan catatan dari arsip.
Tombol arsip dan batal arsip bisa diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.

Kriteria Opsional 2: Pencarian catatan
Berikut detail dari kriterianya.

Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.
Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
Memanfaatkan search parameter agar pencarian bersifat shareable melalui URL.
Memanfaatkan controlled component dalam membangun input pencarian.

Kriteria Opsional 3: 404 Pages
Aplikasi menyediakan halaman khusus bila pengguna mengakses URL aplikasi dengan alamat yang tidak diketahui/diharapkan.

Manfaatkan atribut contentEditable sebagai input isi (body) catatan
Aplikasi akan lebih keren bila isi catatan mendukung rich format sehingga dapat menampilkan format baris baru, bold, italic, dan sebagainya. Untuk mendukung hal tersebut, pada isi catatan, alih-alih menyimpan plain text, simpanlah teks yang sudah terformat dengan HTML. Masalahnya adalah, bila Anda memanfaatkan input seperti textarea, value yang dihasilkan input hanyalah plain text, bukan HTML formatted text. Bagaimana cara membuat input seperti text area, tetapi menghasilkan format HTML?

Untuk mencapai tujuan tersebut, alih-alih menggunakan textarea, gunakanlah block elemen (contohnya div) dengan menambahkan atirbut bernama contentEditable.

// UI

<div
  className="add-new-page__input__body"
  data-placeholder="Sebenarnya saya adalah ...."
  contentEditable
/>
Anda bisa sinkronisasi nilai di dalam contentEditable dengan komponen state melalui event onInput seperti ini.

// handler
onInputHandler(event) {
this.setState(() => {
return {
body: event.target.innerHTML, // Ingat! innerHTML, bukan value.
}
});
}

// UI on render()

<div
  className="add-new-page__input__body"
  data-placeholder="Sebenarnya saya adalah ...."
  contentEditable
  onInput={this.onInputHandler}
/>
Dengan begitu, body akan menyimpan nilai HTML formatted text. Contohnya.

'<p>Ini adalah <strong>contoh nilai string</strong> yang berada di dalam state body</p>'
Selanjutnya, untuk merender teks tersebut dalam bentuk HTML, kami sarankan Anda untuk menggunakan package html-react-parser agar prosesnya mudah.

import parser from 'html-react-parser';

function SomeComponent({ body }) {
return (

<div>
{parser(body)}
</div>
)
}

Buat folder dalam mengelompokkan berkas JavaScript yang dibuat
Agar source code dari aplikasi Anda mudah untuk dikelola dan disenangi oleh reviewer, kami sangat menyarankan Anda untuk mengelompokkan berkas JavaScript berdasarkan peran dan fungsinya. Contoh, Anda bisa membuat folder bernama pages untuk menampung seluruh berkas komponen yang berperan sebagai “halaman aplikasi”. Berikut adalah struktur folder yang kami rekomendasikan pada submission ini.

- public // menampung berkas statis yang dapat diakses melalui URL (public)
- src // menampung seluruh berkas source code (di luar konfigurasi)
  - components // folder yang berisi React Component
  - pages // folder yang berisi React Component yang berperan sebagai pages
  - styles // folder yang berisi CSS
  - utils // folder yang berisi fungsi yang bersifat reusable antar komponen
  - index.js // berkas JavaScript utama
  - App.js // berkas komponen aplikasi

Submission Anda akan dinilai oleh Reviewer dengan skala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut:

Menerapkan kriteria opsional 1: Terdapat Fitur Pencarian Catatan.
Menerapkan kriteria opsional 2: Terdapat Fitur Arsip Catatan.
Menerapkan kriteria opsional 3: Menyediakan halaman 404.
Menuliskan kode dengan baik.
Membuat Class Component hanya jika diperlukan saja. Contohnya, ketika sebuah komponen perlu menggunakan state atau memanfaatkan lifecycle method. Selebihnya, gunakanlah function component.
Memecah UI menjadi komponen sekecil mungkin (sesuai tanggung jawabnya).
Gaya penulisan kode harus konsisten, seperti penggunaan single quote/double quote ketika membuat nilai string, jumlah spasi dalam indentasi kode, atau penggunaan semicolon pada akhir statement.
