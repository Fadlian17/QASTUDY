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

## Capacity Planning Formulas

### Rumus Dasar Kapasitas QA

1. **Total Available Hours per Tester**:
   - Formula: (Working Days per Month × Hours per Day) - Overhead
   - Contoh: (20 hari × 8 jam) - 10% overhead = 144 jam efektif per bulan

2. **Capacity Utilization Rate**:
   - Formula: (Actual Hours Worked / Total Available Hours) × 100%
   - Target: 80-90% untuk menghindari burnout

3. **Test Execution Velocity**:
   - Formula: Test Cases Completed per Hour
   - Contoh: 5 test cases/jam untuk manual testing

### Estimasi Kapasitas Berdasarkan T-Shirt Size

- **S (Small)**: 20-40 jam QA effort
- **M (Medium)**: 40-80 jam QA effort  
- **L (Large)**: 80-160 jam QA effort
- **XL (Extra Large)**: 160+ jam QA effort

## Additional User Scenarios

#### Skenario 3: IT Admin Manages User Access
- **Aktor**: IT Admin
- **Preconditions**: IT Admin sudah login dengan hak akses admin.
- **Postconditions**: Pengguna baru ditambahkan atau akses pengguna diubah.
- **Langkah-langkah Utama**:
  1. IT Admin membuka halaman user management.
  2. Memilih "Add New User" atau "Edit User".
  3. Memasukkan detail pengguna (nama, email, role).
  4. Menetapkan permissions berdasarkan role.
  5. Sistem mengirim email konfirmasi ke pengguna baru.
- **Alternatif/Exception**: Jika email sudah terdaftar, sistem menampilkan error.

#### Skenario 4: System Admin Monitors Infrastructure
- **Aktor**: System Admin
- **Preconditions**: System Admin sudah login.
- **Postconditions**: Status infrastruktur SaaS ditampilkan.
- **Langkah-langkah Utama**:
  1. System Admin mengakses dashboard infrastruktur.
  2. Melihat metrics server (CPU, memory, disk usage).
  3. Mengecek status services dan databases.
  4. Jika ada alert, mengambil tindakan remedial.
- **Alternatif/Exception**: Jika sistem down, menerima notifikasi otomatis.

#### Skenario 5: QA Manager Generates Capacity Report
- **Aktor**: QA Manager
- **Preconditions**: Data capacity planning tersedia.
- **Postconditions**: Laporan PDF/Excel dihasilkan.
- **Langkah-langkah Utama**:
  1. QA Manager memilih periode laporan.
  2. Sistem mengumpulkan data dari berbagai sumber.
  3. Menghasilkan visualisasi (charts, graphs).
  4. QA Manager mengekspor laporan.
- **Alternatif/Exception**: Jika data tidak lengkap, laporan menunjukkan disclaimer.

## Tools and Technologies Recommendations

### Diagram Tools
- PlantUML: Untuk membuat use case diagrams
- Draw.io: Alternatif gratis untuk diagram visual
- Lucidchart: Tools berbasis cloud

### Capacity Planning Tools
- Jira: Untuk tracking tasks dan capacity
- Excel/Google Sheets: Untuk kalkulasi manual
- Custom dashboard dengan Python/Pandas untuk analisis data

### Monitoring Tools
- Grafana + Prometheus: Untuk real-time monitoring
- New Relic atau Datadog: Application performance monitoring
- ELK Stack: Untuk log analysis

## Best Practices for Capacity Planning

1. **Regular Reviews**: Lakukan review capacity planning mingguan.
2. **Data-Driven Decisions**: Gunakan data historis untuk estimasi akurat.
3. **Buffer Time**: Sisakan 20% buffer untuk unexpected issues.
4. **Cross-Training**: Pastikan tim QA memiliki skill overlap.
5. **Automation Focus**: Prioritaskan automation untuk repetitive tasks.
6. **Stakeholder Communication**: Komunikasikan capacity constraints early.

## Implementation Notes

- Integrasikan dengan existing CI/CD pipeline
- Gunakan API untuk data integration
- Implement role-based access control
- Pastikan scalability untuk multiple projects
- Monitor KPIs: Test Coverage, Defect Leakage, Time to Market