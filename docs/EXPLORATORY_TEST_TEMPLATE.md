# Template Exploratory Test - QA Guard Framework

## Deskripsi
Template ini membantu Anda melakukan exploratory testing dengan **QA Guard Framework**. QA Guard fokus pada 3 hal: identifikasi risiko lebih awal, penilaian dampak bug, dan quality gates untuk memastikan produk siap launch.

---

## 📊 Flow Exploratory Testing

```
┌─────────────────────────────────────────────────────────────┐
│                     MULAI TESTING                           │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  GATE 1: PRE-TESTING    │ ← Siap?
        │ (Persiapan & Planning)  │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────────┐
        │  Identifikasi Risk Areas    │
        │  (Apa yg paling berisiko?)  │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │  GATE 2: DURING-TESTING     │
        │  (Eksekusi & Dokumentasi)   │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │  Jalankan Test Scenarios    │
        │  Catat Pass/Fail & Bugs     │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │  Cukup Coverage? (80%+)      │
        └────┬───────────────┬────────┘
             │ Tidak         │ Ya
             │               │
        ┌────▼───────┐   ┌───▼──────────────┐
        │ Lanjut Test │   │ GATE 3: POST     │
        └────┬───────┘   │ (Evaluasi Hasil) │
             │           └───┬──────────────┘
             │               │
             └───────┬───────┘
                     │
        ┌────────────▼────────────────┐
        │  Analisis Bugs & Severity   │
        │  (Critical? High? Medium?)   │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │  Buat Laporan & Rekomendasi │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │  Quality Gate Decision       │
        │  PASS / FAIL / CONDITIONAL  │
        └────────────┬────────────────┘
                     │
        ┌────────────▼────────────────┐
        │   SELESAI TESTING           │
        └────────────────────────────┘
```

---

## Penyederhanaan Bahasa & Struktur:

**Perubahan Utama:**
- ✅ Menghilangkan kata-kata berbelit: "menggunakan kerangka berfikir" → langsung "QA Guard Framework"
- ✅ Istilah lebih sederhana: "Severity Levels Classification" → "Dampak Bug Seperti Apa?"
- ✅ Menggunakan emoji untuk visual cepat (🔴 KRITIS, 🟠 TINGGI, 🟡 SEDANG, 🟢 RENDAH)
- ✅ Tabel lebih ringkas dengan kolom yang essential saja
- ✅ Checklist lebih action-oriented
- ✅ Pertanyaan yang praktis bukan formal

---

## 📈 Visual Flow: Risk Assessment Process

```
IDENTIFIKASI RISIKO
│
├─ Apa fitur paling penting?
├─ Apa yang paling banyak user pakai?
├─ Apa yang paling rentan error?
│
└─> Daftar Risk Area
    │
    ├─ Login/Auth
    ├─ Data Save/Load
    ├─ Payment (jika ada)
    ├─ Security
    └─ Performance
        │
        └─> PRIORITAS TESTING ✓
```

### Risk vs Severity - Perbedaan

```
┌──────────────────────────────────────┐
│ RISK = Kemungkinan terjadi           │
├──────────────────────────────────────┤
│ - High Risk: Sering terjadi          │
│ - Medium Risk: Kadang terjadi        │
│ - Low Risk: Jarang terjadi           │
└──────────────────────────────────────┘
           ×
┌──────────────────────────────────────┐
│ SEVERITY = Dampak kalau terjadi      │
├──────────────────────────────────────┤
│ - KRITIS: Produk rusak total         │
│ - TINGGI: Fitur utama tidak jalan    │
│ - SEDANG: Fitur minor error          │
│ - RENDAH: Minor issue                │
└──────────────────────────────────────┘
           =
    RISK LEVEL (Priority)
    
Contoh:
- High Risk × Low Severity = Test nanti
- Low Risk × Critical Severity = Test dulu!
```

---

## 1. Risk Assessment & Prioritization

### Langkah 1: Identifikasi Risiko
Sebelum testing, identifikasi apa saja yang bisa gagal dan dampaknya:

| ID | Area | Masalah Potensial | Dampak | Kemungkinan | Level |
|---|---|---|---|---|---|
| R001 | Data | Hilang saat save | Critical | Tinggi | 🔴 KRITIS |
| R002 | Performa | Loading lambat | Tinggi | Sedang | 🟠 TINGGI |
| R003 | Security | Akses tanpa izin | Critical | Rendah | 🟠 TINGGI |
| R004 | Mobile | Tidak responsif | Sedang | Tinggi | 🟡 SEDANG |
| R005 | Data | Duplikasi data | Tinggi | Sedang | 🟠 TINGGI |

### Severity: Dampak Bug Seperti Apa?
- 🔴 **KRITIS**: Produk tidak bisa dipakai / data hilang / kebocoran data
- 🟠 **TINGGI**: Fitur utama tidak jalan / lambat parah
- 🟡 **SEDANG**: Fitur minor bermasalah / UX jelek
- 🟢 **RENDAH**: Typo / icon bergeser

---

## 2. Area Testing

### Prioritas Area Testing
Fokus testing sesuai risiko dari tinggi ke rendah:

```
🔴 KRITIS - Test Duluan!
├─ Login & Autentikasi
├─ Simpan & Load Data
├─ Fitur Utama (core feature)
├─ Payment (jika ada)
└─ Keamanan Data

🟠 TINGGI - Penting
├─ Kecepatan Loading
├─ Integrasi API
├─ Pesan Error
└─ Alur User

🟡 SEDANG - Bisa Kemudian
├─ Tampilan Mobile
├─ Aksesibilitas
└─ Kasus Khusus
```

### Flow Testing by Priority

```
START
  │
  ├─→ [KRITIS] Testing 1 jam
  │
  ├─→ [TINGGI] Testing 30 menit
  │
  ├─→ [SEDANG] Testing 20 menit
  │
  └─→ Analisis & Laporan
      │
      └─→ SELESAI
```

### Flow: Dari Risk Area → Test Cases

```
RISK AREA
   │
   ├─ Login & Auth
   │    └─→ Test Case 1: Valid credential
   │    └─→ Test Case 2: Invalid password
   │    └─→ Test Case 3: SQL injection
   │    └─→ Test Case 4: Brute force attempt
   │
   ├─ Data Save
   │    └─→ Test Case 1: Save normal data
   │    └─→ Test Case 2: Save large data
   │    └─→ Test Case 3: Save with timeout
   │    └─→ Test Case 4: Save duplicate
   │
   └─ Performance
        └─→ Test Case 1: Normal load
        └─→ Test Case 2: Heavy load
        └─→ Test Case 3: Slow network
```

---

---

## 3. 3 Quality Gates

Exploratory testing harus melewati 3 checkpoint untuk pastikan kualitas:

### ✓ Gate 1: Sebelum Testing (Persiapan)
Checklist sebelum mulai:
- [ ] Requirements jelas
- [ ] Environment siap & stabil
- [ ] Data test tersedia
- [ ] Sudah identifikasi risiko utama
- [ ] Durasi testing sudah ditentukan

### ✓ Gate 2: Saat Testing (Eksekusi)
Saat testing berlangsung:
- [ ] Catat setiap test case
- [ ] Dokumentasi hasil (pass/fail)
- [ ] Catat bug dengan severity
- [ ] Test ulang bug yang ditemukan
- [ ] Lihat coverage vs risiko

**Saat Testing - Tanyakan pada Diri Sendiri:**
1. Apa fitur yang paling mungkin rusak?
2. Jika rusak, gimana dampaknya? (user frustrated? data hilang?)
3. Ada workaround gak?
4. Data aman gak?
5. Keamanan ok gak?

### ✓ Gate 3: Setelah Testing (Evaluasi)
Sebelum declare PASS:
- [ ] Semua bug KRITIS sudah dilaporkan
- [ ] Coverage minimal 80% untuk area kritis
- [ ] Risk sudah mitigated
- [ ] Report & rekomendasi ready

---

## 4. Cara Catat Testing (Template)

### Header Testing
```
ID: TEST-001
QA: [Nama Anda]
Tanggal: [DD/MM/YYYY]
Durasi: [2 jam]
Focus: [Login & Data]
Size: S / M / L / XL
```

### Tabel Test Results

| # | Test Apa | Langkah | Harapan | Hasil | Status | Bug ID | Level |
|---|---|---|---|---|---|---|---|
| 1 | Login | 1. Buka form 2. Input user & pass 3. Klik login | Masuk ke dashboard | Login tapi loading 3 detik | ✓ PASS | - | - |
| 2 | Upload file 100MB+ | 1. Buka upload 2. Pilih file besar 3. Upload | Upload OK & progress bar | Browser crash 60% | ✗ FAIL | BUG-001 | 🔴 KRITIS |
| 3 | Edit bersamaan | User A edit, User B edit | Handled dengan baik | Data duplikasi | ✗ FAIL | BUG-002 | 🟠 TINGGI |
| 4 | API timeout | Test di slow network (>30 detik) | Pesan error ramah | Blank page | ✗ FAIL | BUG-003 | 🟡 SEDANG |

---

## 5. Laporan Bug (Kalau Ada Masalah)

### Format Bug Report Sederhana
```
BUG ID: BUG-001
Status: Open / Done / Rejected
Level: 🔴 KRITIS / 🟠 TINGGI / 🟡 SEDANG / 🟢 RENDAH
Judul: [Pendek & jelas apa masalahnya]

📝 Deskripsi:
[Apa yang terjadi]

📋 Langkah Ulang:
1. ...
2. ...
3. ...

✓ Harapan:
[Yang seharusnya terjadi]

✗ Kenyataan:
[Yang benar-benar terjadi]

🖥 Environment:
- OS: [Windows 10 / macOS / Ubuntu / Android]
- Browser: [Chrome / Firefox]
- Device: [Desktop / Tablet / Mobile]
- Versi: [1.0.1]

📎 Bukti:
- Screenshot: [Ada?]
- Video: [Ada?]
```

### Severity Level (Dampak Bug)
- 🔴 **KRITIS** = Browser crash / data hilang / security leak / fitur utama jalan gak
- 🟠 **TINGGI** = Fitur penting tapi ada workaround / performa jelek
- 🟡 **SEDANG** = Fitur minor bermasalah / UI error
- 🟢 **RENDAH** = Typo / visual minor

---

## 6. Analisis Hasil Testing

### Flow: Dari Test Results → Decision

```
JALANKAN TEST
│
├─→ Catat Hasil (PASS/FAIL)
│
├─→ Hitung Pass Rate
│
├─→ Kategorisasi Bug
│   ├─ KRITIS = 🔴
│   ├─ TINGGI = 🟠
│   ├─ SEDANG = 🟡
│   └─ RENDAH = 🟢
│
├─→ Hitung Coverage %
│
└─→ ANALISIS
    │
    ├─ Coverage OK? (80%+)
    ├─ Bug KRITIS ada?
    ├─ Bug TINGGI berapa?
    │
    └─→ QUALITY GATE DECISION
```

### Tabel Coverage Ringkas
| Area | Test | Pass | Fail | % | Risk |
|---|---|---|---|---|---|
| Data Loss | 8 | 6 | 2 | 75% | Sedang (2 bugs) |
| Performa | 6 | 4 | 2 | 67% | Tinggi |
| Security | 5 | 5 | 0 | 100% | Rendah |
| UX | 10 | 9 | 1 | 90% | Rendah |
| **TOTAL** | **29** | **24** | **5** | **83%** | **Sedang** |

### Target Coverage (Standar QA Guard)
- **Area Kritis**: Minimal 90% testing
- **Area Tinggi**: Minimal 80% testing
- **Area Sedang**: Minimal 70% testing
- **Overall**: Minimal 80% testing

---

## 7. Keputusan Quality Gate

### Kriteria PASS/FAIL Gate

**✓ PASS Jika:**
- Coverage ≥ 80% untuk area kritis
- Bug KRITIS = 0
- Bug TINGGI ≤ 2 (ada rencana fix)
- Waktu testing sesuai rencana

**✗ FAIL Jika:**
- Coverage < 80% untuk area kritis
- Ada bug KRITIS tanpa solusi
- Bug TINGGI > 2 tanpa jelas kapan fix
- Risk masih TINGGI/KRITIS

### Hasil Keputusan
**Tanggal**: [DD/MM/YYYY]
**Keputusan**: ✓ PASS / ✗ FAIL / ⚠️ CONDITIONAL PASS
**Alasan**: [Penjelasan singkat]
**Approved By**: [QA Lead]

### Decision Flow

```
START DECISION
│
├─ Ada Bug KRITIS?
│  └─ YES → ✗ FAIL GATE
│  └─ NO → lanjut
│
├─ Coverage ≥ 80%?
│  └─ NO → ✗ FAIL GATE
│  └─ YES → lanjut
│
├─ Bug TINGGI ≤ 2?
│  └─ NO → ⚠️ CONDITIONAL PASS
│       (tunggu fix, baru bisa launch)
│  └─ YES → lanjut
│
└─ ✓ PASS GATE
   Ready to Launch!
```

### Severity Priority Matrix

```
             HIGH SEVERITY
                  │
        ┌─────────┼─────────┐
        │         │         │
RARE ───┤ MEDIUM  │ URGENT  │─── COMMON
        │ PRIORITY│ PRIORITY│
        └─────────┼─────────┘
                  │
             LOW SEVERITY

Contoh:
- Bug KRITIS (High Severity) di area KRITIS (Common) 
  → URGENT! Stop testing, fix dulu!

- Bug KRITIS (High Severity) di area jarang pakai (Rare)
  → Penting tapi bisa fix kemudian

- Bug RENDAH (Low Severity) di mana saja
  → Test terus, log ulang release
```

---

---

## 8. Hasil & Rekomendasi

### Ringkasan Hasil
- **Total Test**: XX
- **Pass**: XX (XX%)
- **Fail**: XX (XX%)
- **Bug KRITIS**: XX
- **Bug TINGGI**: XX
- **Bug SEDANG**: XX

### Key Findings (3 Hal Paling Penting)
1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

### Rekomendasi Untuk Developer
1. [Apa yang harus diperbaiki]
2. [Apa yang harus dioptimasi]
3. [Apa yang harus ditingkatkan]

### Plan Mitigasi Risk
| Risk | Solusi | Siapa | Target |
|---|---|---|---|
| [Risiko] | [Aksi] | [Owner] | [Tgl] |

---

## 9. QA Guard Mindset - Ingat Ini!

### 5 Prinsip Testing
1. **Risk First** → Test area paling berisiko dulu
2. **Impact Aware** → Pahami dampak setiap bug
3. **Quality Gate** → Jangan PASS kalau ada bug kritis
4. **Document All** → Catat semua untuk referensi
5. **Keep Learning** → Improve setiap session

### Saat Testing, Selalu Tanya Diri Sendiri:
- ❓ Apa fitur yang bisa paling jelek?
- ❓ Jika rusak, user rugi apa?
- ❓ Ada cara obatin/work-around?
- ❓ Data aman dan tidak hilang?
- ❓ Keamanan sistem ok?
- ❓ UX bisa diterima user?

### Kapan Berhenti Testing?
- ✓ Coverage sudah tercapai 80%+
- ✓ Risk utama sudah ketemu
- ✓ Quality gate criteria terpenuhi
- ✓ 1 jam tidak ada bug baru
- ✓ Waktu alokasi habis

### Testing Journey Chart

```
┌─────────────────────────────────────────────────────┐
│         QA GUARD EXPLORATORY TESTING JOURNEY        │
└─────────────────────────────────────────────────────┘

FASE 1: PLANNING
─────────────────
[  ] Identifikasi Risk
[  ] Prioritas Area
[  ] Alokasi Waktu
[  ] Siap Resources
   └─→ Time: 10% dari total

FASE 2: EXECUTION
─────────────────
[  ] Setup Environment
[  ] Jalankan Test
[  ] Catat Pass/Fail
[  ] Log Bugs
   └─→ Time: 70% dari total

FASE 3: ANALYSIS
─────────────────
[  ] Hitung Coverage
[  ] Kategorisasi Bug
[  ] Risk Assessment
[  ] Quality Gate
   └─→ Time: 20% dari total

HASIL
─────
✓ PASS    → Ready Launch
⚠️ CONDITIONAL → Tunggu Fix
✗ FAIL    → Fix, Test Ulang
```

---

## 📋 Quick Checklist: Sebelum Testing

```
PRE-TESTING CHECKLIST

ENV & SETUP
└─ [ ] Server jalan?
  [ ] Database ready?
  [ ] Test data ada?
  [ ] Akses permission ok?

DOCUMENTATION
└─ [ ] Requirements jelas?
  [ ] Risk list sudah dibuat?
  [ ] Test plan ready?
  [ ] Template siap?

TOOLS & RESOURCES
└─ [ ] Browser/device siap?
  [ ] Screenshot tool ready?
  [ ] Bug tracking system siap?
  [ ] QA Guard template terbuka?

TIME ALLOCATION
└─ [ ] Jadwal disiapkan?
  [ ] Duration ditentukan?
  [ ] Break time included?
  [ ] Buffer time ada?

STATUS: READY TO TEST? → YES / NO
```

---