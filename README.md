# Portofolio Theresia Verani Peregrina

Website portofolio bilingual (Indonesia/English) yang dibangun dengan Vinext dan siap dijalankan di Cloudflare Workers.

## Menjalankan di komputer

1. Instal Node.js versi 22 atau lebih baru.
2. Aktifkan pnpm melalui Corepack: `corepack enable`.
3. Instal dependensi: `pnpm install`.
4. Jalankan website: `pnpm dev`.
5. Buka `http://localhost:3000`.

## Menerbitkan ke Cloudflare

Untuk deployment manual dari komputer:

1. Login sekali dengan `pnpm cloudflare:whoami` atau `pnpm exec wrangler login`.
2. Uji paket deployment dengan `pnpm deploy:dry-run`.
3. Terbitkan dengan `pnpm deploy`.

Cloudflare memberikan alamat publik gratis berakhiran `workers.dev`; custom domain tidak diperlukan.

## Deployment otomatis dari GitHub

Hubungkan repository ini melalui **Cloudflare Dashboard → Workers & Pages → Create application → Import a repository** dengan pengaturan:

- Production branch: `main`
- Build command: `pnpm build`
- Deploy command: `pnpm exec wrangler deploy --config dist/server/wrangler.json`
- Root directory: `/`

Setiap perubahan yang dikirim ke branch `main` akan dibangun dan diterbitkan ulang oleh Cloudflare.

## Memperbarui website

Setelah mengubah konten, jalankan `pnpm build`. Jika build berhasil, simpan perubahan ke Git dan kirim ke branch `main`. Jangan menyimpan token, kata sandi, atau file `.env` ke repository.
