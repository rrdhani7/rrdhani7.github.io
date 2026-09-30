# DeepQA portfolio

Sumber situs ada di `src/`. Astro menghasilkan HTML statis di `dist/`.
Sites membaca folder ini lewat `.openai/hosting.json`. Jangan edit hasil build
di `dist/` secara langsung. Situs HTML lama tetap ada di riwayat Git.

## Menjalankan situs

Gunakan Node.js 22.12 atau lebih baru dan pnpm 11.25.

```sh
pnpm install
pnpm dev
```

Server pengembangan memakai port 4174. Hentikan server lama di port itu sebelum
menjalankan perintah tersebut. Situs baru berada di `/`.

```sh
pnpm check   # cek tipe dan template
pnpm test    # build lalu cek halaman dan tautan
pnpm build   # hasil statis di dist/
```

## Deploy ke GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` akan membangun dan menerbitkan situs
setiap kali ada push ke branch `main`.

1. Push repository ini ke GitHub.
2. Buka `Settings → Pages` di repository tersebut.
3. Pada `Build and deployment`, pilih `GitHub Actions`.
4. Push perubahan ke `main`, atau jalankan workflow secara manual dari tab `Actions`.

Workflow membaca path repository dari GitHub Pages. Karena itu, tautan dan aset
tetap bekerja pada repository project maupun repository user-site.

## Mengelola konten

- `src/content/work/`: satu berkas Markdown per pengalaman. Urutkan dengan `order`.
  `published: false` menampilkan ringkasan tanpa halaman detail.
- `src/content/explorations/`: tulisan, opini, workflow, dan eksperimen.
  Konten yang `published: true` mendapat kartu dan halaman detail.
- `src/layouts/` dan `src/components/`: struktur halaman yang dipakai bersama.
- `src/styles/global.css`: gaya visual yang disetujui.
- `public/assets/`: gambar dan berkas statis.

Halaman Work berada di `/work/`. Konten Explorations berada di
`/explorations/`. Alamat lama catatan Claude di `/notes/` tetap
mengarah ke halaman baru.

## Batas pembayaran

Situs ini belum memproses pembayaran. Kunci rahasia gateway tidak boleh masuk ke
`public/`, komponen browser, atau repo. Setelah gateway dan cara pemberian akses
produk dipilih, tambahkan endpoint server untuk membuat checkout dan menerima
webhook. Simpan status pesanan di penyimpanan server. Halaman statis dan konten
publik tetap di proyek yang sama; hosting saat itu harus mendukung fungsi server.
