# Dashboard Lab RS 2026

## Struktur File

```
├── index.html                  ← Dashboard utama
├── netlify.toml                ← Konfigurasi Netlify
├── netlify/
│   └── functions/
│       └── config.js           ← Function pengaman GS_URL
└── README.md
```

---

## Setup Setelah Push ke GitHub

### 1. Push semua file ini ke GitHub
Pastikan struktur folder sama persis seperti di atas.

### 2. Set Environment Variable di Netlify

1. Buka **Netlify Dashboard** → pilih site Anda
2. Klik **Site configuration** → **Environment variables**
3. Klik **Add a variable**
4. Isi:
   - **Key:** `GS_URL`
   - **Value:** `https://script.google.com/macros/s/XXXXX.../exec`
5. Klik **Save**
6. Klik **Deploys** → **Trigger deploy** → **Deploy site**

### 3. Selesai
Dashboard akan otomatis terhubung ke Google Sheets tanpa pengguna perlu melakukan apapun.

---

## Kenapa Cara Ini Aman?

| Yang Terlihat di GitHub | Yang TIDAK Terlihat di GitHub |
|---|---|
| `index.html` (kode dashboard) | URL Google Sheets Anda |
| `netlify/functions/config.js` | Isi Environment Variable |
| `netlify.toml` | — |

GS_URL hanya ada di server Netlify dan dikirim ke browser saat halaman dimuat — tidak pernah tersimpan di kode atau repository.
