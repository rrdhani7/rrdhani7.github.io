---
order: 1
published: true
listTitle: Claude for QA workflow
listMeta: Note · Read the full workflow ↗
title: Claude untuk workflow QA
description: Workflow Dhani menggunakan Claude untuk menyusun test case QA dari sumber requirement yang dapat ditelusuri.
dek: Dari source of truth ke test case yang siap direview, dengan Claude sebagai rekan kerja QA.
type: NOTE
image: assets/claude-qa-workflow.jpg
imageAlt: 'Diagram workflow Claude: sumber requirement, pemeriksaan perbedaan, penyusunan test case, dan review'
imageCaption: Diagram lengkap workflow Claude untuk QA.
sourceUrl: https://lnkd.in/p/dnWsBRdJ
ctaTitle: Ingin menerapkan workflow serupa?
ctaBody: Saya sedang merapikannya menjadi template dan report praktis. Anda bisa menghubungi saya untuk membahas penerapan atau meminta preview.
ctaLabel: Lihat profil & kontak ↗
ctaHref: index.html?section=about
---

Beberapa bulan terakhir saya mulai pakai Claude untuk membuat test case, dan ternyata cukup membantu untuk pekerjaan QA sehari-hari.

## Mengumpulkan sumber acuan

Prosesnya dimulai dengan mengumpulkan semua source of truth requirement — bisa dari deskripsi tiket Jira, comment di tiket, PRD, sampai percakapan Slack. Saya pakai MCP agar Claude bisa langsung akses sumber-sumber itu tanpa copy-paste manual satu-satu. Saya beri instruksi agar Claude benar-benar membaca baris demi baris agar tidak ada requirement yang tertinggal. Kalau ada Figma, saya juga share screenshot-nya sebagai referensi visual.

## Menemukan discrepancy lebih awal

Setelah semua source of truth terkumpul, selanjutnya Claude saya minta untuk menemukan discrepancy dari masing-masing requirement. Ini penting agar kita bisa segera konfirmasi ke tim Product ataupun Tech sebelum fitur selesai dibuat dan proses testing dimulai. Karena discrepancy requirement akan menjadi potensi bug di kemudian hari.

## Menyusun test case dengan ground truth

Dari semua sumber itu, Claude breakdown menjadi test case dengan format spesifik yang ditentukan — termasuk dengan Ground Truth di tiap scenario. Ini penting untuk mengurangi tingkat halusinasi dari AI. Output-nya langsung jadi file Excel dan siap untuk di-review sebelum masuk ke Test Repository.

## Membuat workflow yang dapat dipakai ulang

Terakhir, semua flow di atas saya rangkum menjadi markdown file berupa CLAUDE.md untuk claude-code, ataupun di section instruksi untuk Claude Desktop. Agar di kemudian hari kita bisa memakai workflow yang sama ketika membuat test case.
