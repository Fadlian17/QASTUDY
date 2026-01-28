# Template Exploratory Test dengan QA Guard Framework

## Deskripsi
Template ini dirancang untuk mendokumentasikan exploratory testing dengan menggunakan kerangka berfikir **QA Guard**. QA Guard adalah framework yang fokus pada risk-based testing, severity assessment, dan quality gates untuk memastikan kualitas produk secara menyeluruh.

---

## 1. Risk Assessment & Prioritization

### Identifikasi Risk
Sebelum melakukan exploratory test, identifikasi risiko potensial:

| Risk ID | Risk Area | Deskripsi | Severity | Probability | Risk Level |
|---------|-----------|-----------|----------|-------------|-----------|
| R001 | Data Loss | Kehilangan data saat save operation | Critical | High | **CRITICAL** |
| R002 | Performance | Response time lambat saat load data besar | High | Medium | **HIGH** |
| R003 | Security | Akses unauthorized ke data sensitif | Critical | Low | **HIGH** |
| R004 | User Experience | UI tidak responsif di mobile | Medium | High | **MEDIUM** |
| R005 | Data Integrity | Duplikasi data pada concurrent operations | High | Medium | **HIGH** |

### Severity Levels (QA Guard Classification)
- **CRITICAL**: Produk tidak bisa digunakan / data loss / security breach
- **HIGH**: Fitur utama tidak berfungsi / performa buruk
- **MEDIUM**: Fitur minor tidak berfungsi / UX issues
- **LOW**: Kosmetik / minor UI issues

---

## 2. Test Scope & Areas

### Primary Test Areas
Fokus pada area-area kritis berdasarkan risk assessment:

```
🔴 CRITICAL AREAS (High Priority)
├─ Login & Authentication
├─ Data Persistence & Storage
├─ Core Business Logic
├─ Payment/Transaction Processing
└─ Security & Access Control

🟡 HIGH PRIORITY AREAS
├─ Performance & Load
├─ API Integration
├─ Error Handling
└─ User Workflows

🟢 MEDIUM PRIORITY AREAS
├─ UI/UX Responsiveness
├─ Accessibility
├─ Documentation
└─ Edge Cases
```

---

## 3. QA Guard Checkpoints

### Pre-Testing Checkpoint (Gate 1)
Sebelum memulai exploratory test, pastikan:
- [ ] Requirements jelas dan terdokumentasi
- [ ] Environment stable dan dapat diakses
- [ ] Test data siap tersedia
- [ ] Risk assessment sudah dilakukan
- [ ] Severity levels sudah didefinisikan

### During-Testing Checkpoint (Gate 2)
Selama exploratory test:
- [ ] Dokumentasikan setiap test case yang dijalankan
- [ ] Catat hasil (pass/fail) dengan bukti
- [ ] Identifikasi bug dan klassifikasi severity
- [ ] Lakukan follow-up testing untuk bugs
- [ ] Monitor coverage vs risk area

### Post-Testing Checkpoint (Gate 3)
Setelah exploratory test:
- [ ] Semua critical bugs sudah dilaporkan
- [ ] Coverage mencapai minimal 80% untuk critical areas
- [ ] Risk exposure sudah mitigated
- [ ] Quality gate criteria terpenuhi
- [ ] Report & recommendation sudah disiapkan

---

## 4. Test Execution Template

### Session Header
```
Session ID: [Unique Identifier]
Tester: [Nama QA]
Date: [Tanggal]
Duration: [Waktu testing dalam jam]
Risk Area Focus: [Area utama yang ditest]
Test Size: S / M / L / XL [Sesuai capacity]
```

### Test Scenarios & Findings

| Scenario ID | Scenario Description | Test Steps | Expected Result | Actual Result | Status | Bug ID | Severity |
|-------------|----------------------|------------|-----------------|---------------|--------|--------|----------|
| S001 | User login dengan credential valid | 1. Buka login page 2. Masukkan username & password 3. Klik login | Berhasil login & redirect ke dashboard | Berhasil login tetapi lambat (3 detik) | PASS | - | - |
| S002 | Upload file > 100MB | 1. Buka upload page 2. Pilih file besar 3. Klik upload | File berhasil diupload & progress bar muncul | Browser crash saat upload 60% | FAIL | BUG-001 | CRITICAL |
| S003 | Concurrent data edit | 1. User A edit data 2. User B edit data simultaneously | Last-one-wins / conflict handling | Data duplikasi muncul | FAIL | BUG-002 | HIGH |
| S004 | API timeout handling | 1. Test dengan slow network 2. Tunggu >30 detik | Error message user-friendly muncul | Blank page / no feedback | FAIL | BUG-003 | MEDIUM |

---

## 5. Bug Logging Template

### Bug Report Format
```
BUG ID: BUG-XXX
Status: Open / In Progress / Resolved / Closed
Severity: CRITICAL / HIGH / MEDIUM / LOW
Title: [Singkat, deskriptif]

Description:
[Deskripsi detail bug]

Steps to Reproduce:
1. ...
2. ...
3. ...

Expected Result:
[Apa yang seharusnya terjadi]

Actual Result:
[Apa yang benar-benar terjadi]

Environment:
- OS: [e.g., Windows 10, macOS, Ubuntu]
- Browser: [e.g., Chrome 120, Firefox]
- Device: [Desktop / Mobile]
- Build: [Version number]

Attachments:
- Screenshot: [Bukti visual]
- Video: [Recording jika perlu]
- Logs: [Error logs]

Assigned To: [Developer name]
Root Cause: [Setelah investigation]
Fix Plan: [Rencana perbaikan]
```

### Bug Severity Guidelines (QA Guard)
- **CRITICAL**: System crash, data loss, security breach, core function broken
- **HIGH**: Major feature not working, significant performance issue, workaround exists
- **MEDIUM**: Minor feature broken, UI issue, documentation issue
- **LOW**: Cosmetic bug, typo, non-essential functionality

---

## 6. Coverage Analysis

### Risk-Based Coverage Matrix
```
Risk Area | Scenario Count | Pass | Fail | Coverage % | Risk Exposure |
-----------|----------------|------|------|-----------|----------------|
Data Loss | 8 | 6 | 2 | 75% | MEDIUM (2 critical bugs) |
Performance | 6 | 4 | 2 | 67% | HIGH (slow response) |
Security | 5 | 5 | 0 | 100% | LOW |
UX | 10 | 9 | 1 | 90% | LOW |
-----------|----------------|------|------|-----------|----------------|
TOTAL | 29 | 24 | 5 | 83% | MEDIUM |
```

### Coverage Targets (QA Guard Standards)
- **Critical Areas**: Minimal 90% coverage
- **High Priority Areas**: Minimal 80% coverage
- **Medium Priority Areas**: Minimal 70% coverage
- **Overall**: Minimal 80% coverage

---

## 7. Quality Gate Decision

### Gate Criteria
```
✓ PASS Gate Jika:
  - Coverage ≥ 80% untuk critical areas
  - CRITICAL bugs = 0
  - HIGH bugs ≤ 2 (dengan mitigation plan)
  - Test duration sesuai estimation
  
✗ FAIL Gate Jika:
  - Coverage < 80% untuk critical areas
  - CRITICAL bugs ≥ 1 tanpa workaround
  - HIGH bugs > 2 tanpa clear fix date
  - Risk exposure tetap HIGH/CRITICAL
```

### Gate Decision
**Date**: [Tanggal]
**Decision**: PASS / FAIL / CONDITIONAL PASS
**Reason**: [Penjelasan]
**Approval By**: [QA Manager / Lead]

---

## 8. Lesson Learned & Recommendations

### Findings Summary
- **Total Test Cases**: XX
- **Pass**: XX (XX%)
- **Fail**: XX (XX%)
- **Critical Issues**: XX
- **High Issues**: XX
- **Medium Issues**: XX
- **Low Issues**: XX

### Key Findings
1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

### Recommendations
1. [Rekomendasi untuk development]
2. [Rekomendasi untuk testing]
3. [Rekomendasi untuk deployment]

### Risk Mitigation Plan
| Risk | Mitigation Strategy | Owner | Target Date |
|------|-------------------|-------|------------|
| [Risk] | [Strategi] | [Owner] | [Date] |

---

## 9. Quick Reference: QA Guard Mindset

### Testing Philosophy
- **Risk-First**: Fokus pada risiko tertinggi terlebih dahulu
- **Severity-Aware**: Pahami impact setiap bug
- **Quality-Gate**: Jangan pass jika ada critical risk
- **Documentation**: Catat semua untuk future reference
- **Continuous Improvement**: Belajar dari setiap session

### Questions to Ask During Testing
1. Apa yang paling mungkin rusak?
2. Apa impact jika bug ini exists?
3. Apakah ada workaround?
4. Apakah ada data loss risk?
5. Apakah security terjaga?
6. Apakah UX acceptable?

### When to Stop Testing
- Coverage target tercapai ✓
- Critical risks sudah diidentifikasi ✓
- Quality gate criteria met ✓
- No new findings dalam 1 jam testing ✓
- Time budget habis ✓