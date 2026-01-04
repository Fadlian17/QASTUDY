# Template Use Case Diagram dan User Scenarios

## Template Use Case Diagram

Use case diagram adalah representasi visual dari interaksi antara aktor (pengguna atau sistem eksternal) dan use case (fungsi utama sistem). Karena ini adalah template teks, gunakan deskripsi berikut untuk membuat diagram menggunakan tools seperti draw.io, Lucidchart, atau PlantUML.

### Struktur Template Use Case Diagram

1. **Aktor Utama**:
   - QA Manager: Bertanggung jawab atas perencanaan kapasitas tim QA.
   - QA Tester: Menggunakan sistem untuk monitoring tugas harian.
   - IT Admin: Mengelola konfigurasi sistem dan integrasi.
   - System Admin: Mengawasi infrastruktur SaaS.

2. **Use Cases Utama**:
   - Login ke Sistem
   - Plan Capacity: Membuat rencana kapasitas berdasarkan proyek.
   - Monitor Resources: Melihat penggunaan sumber daya real-time.
   - Generate Reports: Membuat laporan analisis kapasitas.
   - Manage Users: Menambah/hapus pengguna (khusus admin).

3. **Relasi**:
   - QA Manager <<include>> Plan Capacity dan Generate Reports.
   - QA Tester <<include>> Monitor Resources.
   - IT Admin <<include>> Manage Users.
   - Semua aktor <<include>> Login ke Sistem.

### Contoh Diagram Teks (PlantUML Syntax)
```
@startuml
actor "QA Manager" as QM
actor "QA Tester" as QT
actor "IT Admin" as IA
actor "System Admin" as SA

usecase "Login ke Sistem" as Login
usecase "Plan Capacity" as PC
usecase "Monitor Resources" as MR
usecase "Generate Reports" as GR
usecase "Manage Users" as MU

QM --> Login
QM --> PC
QM --> GR
QT --> Login
QT --> MR
IA --> Login
IA --> MU
SA --> Login
@enduml
```

Salin syntax di atas ke PlantUML editor untuk menghasilkan diagram visual.

## Template User Scenarios

User scenarios adalah deskripsi narasi langkah demi langkah tentang bagaimana pengguna berinteraksi dengan sistem dalam situasi tertentu. Gunakan template berikut untuk mendokumentasikan skenario.

### Template Struktur User Scenario

1. **Nama Skenario**: Judul singkat (e.g., "QA Manager Plans Capacity for New Project").
2. **Aktor**: Siapa yang terlibat (e.g., QA Manager).
3. **Preconditions**: Kondisi sebelum skenario dimulai (e.g., User sudah login).
4. **Postconditions**: Hasil akhir (e.g., Rencana kapasitas disimpan).
5. **Langkah-langkah Utama**:
   - Langkah 1: Deskripsi tindakan.
   - Langkah 2: dll.
6. **Alternatif/Exception**: Jalur alternatif jika ada error.

### Contoh User Scenarios untuk Proyek Capacity Planning

#### Skenario 1: QA Manager Plans Capacity for New Project
- **Aktor**: QA Manager
- **Preconditions**: QA Manager sudah login ke sistem.
- **Postconditions**: Rencana kapasitas disimpan dan dapat diakses oleh tim.
- **Langkah-langkah Utama**:
  1. QA Manager membuka dashboard capacity planning.
  2. Memilih opsi "Create New Plan".
  3. Memasukkan detail proyek (nama, durasi, jumlah tester diperlukan).
  4. Sistem menghitung kapasitas berdasarkan data historis.
  5. QA Manager meninjau dan menyimpan rencana.
- **Alternatif/Exception**: Jika data historis tidak cukup, sistem meminta input manual.

#### Skenario 2: QA Tester Monitors Daily Resources
- **Aktor**: QA Tester
- **Preconditions**: QA Tester sudah login.
- **Postconditions**: Tester melihat status sumber daya real-time.
- **Langkah-langkah Utama**:
  1. QA Tester membuka halaman monitoring.
  2. Memilih filter berdasarkan proyek atau tanggal.
  3. Melihat grafik penggunaan CPU, memori, dan waktu testing.
  4. Jika ada bottleneck, menerima notifikasi.
- **Alternatif/Exception**: Jika tidak ada data, sistem menampilkan pesan "Data tidak tersedia".

Gunakan template ini untuk menambahkan skenario lebih lanjut sesuai kebutuhan proyek Anda.

## Breakdown Work Variables dan Capacity Planning

### Work Variables (Execution)
- **Business / Project Testing**: Pengujian terkait bisnis atau proyek spesifik.
- **Test Debt**: Hutang pengujian yang perlu diselesaikan.
  - Automation: Hutang terkait pengujian otomatis.
  - Non Functional Test: Hutang terkait pengujian non-fungsional (e.g., performance, security).

### QA Resource
- Total Mandays: Jumlah hari kerja yang diperlukan untuk mendukung business testing.

### Konsep T-Shirt Size Estimation
T-Shirt Size digunakan untuk estimasi cepat kapasitas QA berdasarkan cakupan pengujian:

- **S (Small)**: Hanya regression testing.
- **M (Medium)**: Regression + sanity testing.
- **L (Large)**: Regression + sanity + exploratory testing.
- **XL (Extra Large)**: Full test suite + automation + performance testing.

### Template Internal QA Capacity Planning

| INTERNAL QA CAPACITY PLANNING | Sprint | Q3 2026 | 09/01/2026 |
|-------------------------------|--------|---------|------------|
| QA Manager                    | FADLI  |         |            |
| TASKS CATEGORY                | T.001  | Requirement Define | |
|                               | T.002  | Test Plan | |
|                               | T.003  | Test Cases | |
|                               | T.004  | Manual Test | |
|                               | T.005  | Automation Test | |
|                               | T.006  | Performance Test | |
|                               | T.007  | Test Debt | |
|                               | T.008  | Ceremonial | |
|                               | T.009  | Training & Sharing Session | |
|                               | T.010  | OTHERS | |

Gunakan table ini untuk melacak dan merencanakan kapasitas QA per sprint atau kuartal.