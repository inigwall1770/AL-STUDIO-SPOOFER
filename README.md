# ⬡ AL STUDIO — Asset Spoofer

> Build · Code · Create | Your Idea, Our Creation!

Tool web untuk spoof, upload, dan export asset Roblox (animasi & audio) dengan antarmuka dark-blue RGB.

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🎭 **Spoofer** | Drop banyak ID sekaligus via `.txt`/`.csv`, proses batch |
| ☁️ **Upload Roblox** | Upload asset ke akun / group via Roblox Open Cloud API |
| 📦 **Export RBXM** | Export hasil sebagai `.rbxm` / `.rbxl` siap import Studio |
| ⚙️ **API Config** | Setup API Key, User ID, Group ID, proxy |
| 📋 **Log** | Full activity log, bisa diexport |

---

## 🚀 Cara Pakai

### 1. Buka Langsung (tanpa install)
Buka file `src/index.html` di browser — tidak perlu server.

### 2. Via Live Server (opsional)
```bash
npm install
npm run dev
```

### 3. Deploy GitHub Pages
```bash
node scripts/build.js
```
Lalu push ke GitHub → Settings → Pages → Branch: main → Folder: `/docs`

---

## 📁 Struktur Project

```
al-studio-spoofer/
├── src/
│   └── index.html          # Main web app (single file)
├── config/
│   ├── app.json            # App configuration
│   ├── api.json            # API config template
│   └── assets.json         # Asset type definitions & RBXM templates
├── scripts/
│   ├── build.js            # Build untuk GitHub Pages
│   └── zip.js              # Export zip
├── docs/                   # GitHub Pages output (auto-generated)
├── assets/                 # Logo, gambar, dll
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Konfigurasi API

1. Buka tab **API Config** di web
2. Masukkan **Roblox API Key** dari [create.roblox.com/credentials](https://create.roblox.com/credentials)
3. Masukkan **User ID** atau **Group ID**
4. Klik **Test Koneksi**

> ⚠️ **JANGAN** push API key ke GitHub! Simpan di `config/api.local.json` (sudah ada di `.gitignore`)

---

## 📜 Lisensi

MIT © 2026 AL STUDIO

---

<div align="center">
  <b>⬡ AL STUDIO</b> · Build · Code · Create
</div>
