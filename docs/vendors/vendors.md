---
sidebar_position: 3
---

# Supported Formats

xspool is designed to be compatible with multiple spool data formats, ensuring seamless integration with different systems. Below are the supported formats and their details.

## 📌 **Supported Formats**

### **1. TigerTag Format**

- <a href="http://tigertag.io" target="_blank">https://tigertag.io</a>
- **Description**: TigerTag is an innovative, hybrid NFC/RFID chip specifically designed for 3D printing filament management.
- **Tag Type**: **Ntag213, Ntag215, Ntag216**
- **Compatibility**:
  - Can be read and written by xspool.
  - Supports spool assignment to AMS slots.
  - Supports spool assignment to CFS slots.
  - Syncs with BambuStudio and OrcaSlicer.

### **2. BambuLab Official Spool Data**

- **Description**: The native format used by BambuLab for its official spools.
- **Tag Type**: **MIFARE 1K**
- **Compatibility**:
  - Can be read by xspool but not modified.
  - Allows easy viewing of filament details.
  - Supports spool assignment to AMS slots.

### **3. Creality CFS Format**

- **Description**: The format used by Creality’s CFS (Creality Filament System).
- **Tag Type**: **MIFARE 1K**
- **Compatibility**:
  - xspool can read and write spool data.
  - Works with both encrypted and non-encrypted CFS spools.
  - Supports spool assignment to CFS slots.

### **4. Anycubic ACE PRO**

- **Description**: The format used by Anycubic ACE PRO.
- **Tag Type**: **Ntag213, Ntag215, Ntag216**
- **Compatibility**:
  - xspool can read and write spool data.
  - Works with both encrypted and non-encrypted CFS spools.

## 🔎 **Key Differences**

| Format                | Tag Type        | Readable | Writable | Extra Metadata |
| --------------------- | --------------- | -------- | -------- | -------------- |
| **TigerTag**          | Ntag213/215/216 | ✅       | ✅       | ✅             |
| **BambuLab Official** | MIFARE 1K       | ✅       | ❌       | ❌             |
| **Creality CFS**      | MIFARE 1K       | ✅       | ✅       | ❌             |
| **Anycubic ACE PRO**  | Ntag213/215/216 | ✅       | ✅       | ❌             |

xspool ensures broad compatibility with various spool systems, allowing you to manage your filament inventory more efficiently. 🚀
