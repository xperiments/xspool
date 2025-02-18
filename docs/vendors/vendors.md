---
sidebar_position: 3
---

# Supported Formats

xspool is designed to be compatible with multiple spool data formats, ensuring seamless integration with different systems. Below are the supported formats and their details.

## 📌 **Supported Formats**

### **1. OpenBamboo Format**

- **Description**: A universal and extensible format for managing spool data. It contains all standard BambuLab spool information plus additional enhanced metadata for better spool management.
- **Tag Type**: **Ntag213, Ntag215, Ntag216**
- **Compatibility**:
  - Can be read and written by xspool.
  - Supports spool assignment to AMS slots.
  - Syncs with BambuStudio and OrcaSlicer.

### **2. BambuLab Official Spool Data**

- **Description**: The native format used by BambuLab for its official spools.
- **Tag Type**: **MIFARE 1K**
- **Compatibility**:
  - Can be read by xspool but not modified.
  - Allows easy viewing of filament details.

### **3. Creality CFS Format**

- **Description**: The format used by Creality’s CFS (Creality Filament System).
- **Tag Type**: **MIFARE 1K** (Supports both encrypted and non-encrypted versions)
- **Compatibility**:
  - xspool can read and write spool data.
  - Works with both encrypted and non-encrypted CFS spools.

## 🔎 **Key Differences**

| Format                | Tag Type        | Readable | Writable | Extra Metadata |
| --------------------- | --------------- | -------- | -------- | -------------- |
| **OpenBamboo**        | Ntag213/215/216 | ✅       | ✅       | ✅             |
| **BambuLab Official** | MIFARE 1K       | ✅       | ❌       | ❌             |
| **Creality CFS**      | MIFARE 1K       | ✅       | ✅       | ❌             |

xspool ensures broad compatibility with various spool systems, allowing you to manage your filament inventory more efficiently. 🚀
