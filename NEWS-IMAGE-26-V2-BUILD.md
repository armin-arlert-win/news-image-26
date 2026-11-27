# NEWS-IMAGE-26 v2 — Build notes

Rebuild penuh edisi 26 November 2026 dengan template Pillow
(`~/workspace/makefun/news-image-template/`), atas persetujuan King
("Gas keduanya", 27 Nov 15:29 WIB). Sekaligus gladi bersih pipeline
Pillow sebelum build utama news-image-27 (28 Nov 08:00 WIB).

## Hasil

- `entry.png`: 1024×1024, 285.249 B, sha256
  `933225ec26e7f628f48f9cb85ee1c7cec0fe3fad476aa0a3b75c094ff88c7941`
- `verify.py`: **ALL CHECKS PASSED** (file/size/layout, 40 cerita
  bernomor, strip 6 angka, label peta min gap 17,0 px, tanpa headline
  terpotong). Render 2× byte-identical; `main.ts` 2× byte-identical.
- Tampil: 35 cerita (3 lead + 10 kartu + 22 ALSO) · 8 region.
  Data berisi 40 cerita; solver memotong ALSO dari bawah (n=36–40
  tidak tampil: AI agents, Asian markets, Rams, West Nile, COP31).
- Masthead jujur (dihitung dari yang tampil): 35 STORIES · 8 REGIONS.

## Perbaikan vs v1 (dari SHARP-BRIEF)

- T5: headline lead 1 netral ("Two Italians killed in Kuwait drone
  strike") + banner art "IRAN DENIES ROLE" + badge REPORTED.
- T3: copy lead 2 menyebut kapal gandum ("two grain ships are struck").
- T4: angka badai AP — 60 mph, 600.000+ (bukan 70 mph / 836.000+).
- T1/T2: lead + kartu adalah scene penuh (ledakan, kota terbakar,
  papan departures, reruntuhan, kilang terbakar, chip, koin €…),
  angka besar hanya badge kecil di sudut art.
- Jazan (26 Nov) sebagai cerita utama; Ras Tanura (25 Nov) tetap di
  DATE CHECK. DATE CHECK 17 item + "Not yet" (4 item) dipertahankan.
- Badge kepercayaan tidak punya field di draw.py — ditempel ke
  `banner_sub` ("… · REPORTED / ONGOING / …"), legenda HOW SURE
  ditambah ONGOING.

## Scene baru (di draw.py salinan v2)

`explosion` (Kuwait), `rubble` (Gaza), `bank` (BoK), `coin` (de Cos),
`fire` (Bangkok), `chip` (Nvidia) — masing-masing ~20–40 baris,
didaftarkan di SCENES. `chart_fall` diperbaiki: label dummy
"CONTOH −4.1% / CHIP −7.8%" dari template dihapus.

## Anggaran copy yang sebenarnya (temuan template — lihat bawah)

Anggaran README template (lead ≤42 karakter, detail ≤145, kartu
≤46, body ≤92) **tidak muat** pada font/ukuran sebenarnya. Yang lolos
verify (CHECK 5 + overflow): headline lead ≤~34 karakter HURUF
BESAR (42 hanya muat untuk sentence case), detail lead ≤~96 karakter
(2 baris), headline kartu ≤~37 karakter, body kartu ≤~66 karakter.
Semua copy dipersingkat ke batas itu dengan fakta + angka dijaga
(mis. headline lead 3 jadi "60 MPH NOR'EASTER GROUNDS PARADE";
"MACY'S" terlalu lebar untuk 2 baris pada 30px).

## File build (di luar repo)

`draw.py`, `verify.py`, `stories.py`, `check/` dipindah ke
`~/workspace/makefun/news-image-26-v2-build/` — repo hanya berisi
`entry.png`, `main.ts`, `LICENSE` (MIT), `README.md`,
`.makefun/owner.json`, dan file ini.

## Verifikasi visual (27 Nov 2026)

- Full-size: tidak ada teks terpotong/bertumpuk/garbled; timeline
  8 penanda s.d. 16:30 tanpa tumpang tindih (label 13:06/16:30
  dipersingkat).
- 300 px: 3 lead terbaca sebagai 3 gambar berbeda (ledakan, kota
  terbakar, papan departures); peta dikenali sebagai peta dunia.
- Catatan: label peta Eropa padat (min gap 17,0 px, batas 16 px) —
  lolos tapi mepet; periksa crop peta tiap edisi. Scene `airport`:
  strip banner/caption menutup sebagian besar baris teks papan
  (hanya kolom status yang sepenuhnya terlihat) — masih terbaca
  sebagai papan departures, tapi scene teks harus menaruh konten
  kunci di pita tengah/panel kanan.

## Status

Build + verifikasi lokal SELESAI 27 Nov ~16:00 WIB. Belum push,
belum submit (butuh browser — parent). Deadline submit 28 Nov
07:00 WIB.
