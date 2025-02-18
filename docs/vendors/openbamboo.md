---
sidebar_position: 2
---

# OpenBamboo Format

## Overview

The **OpenBamboo** format is a structured data format designed for storing filament spool information on **NFC tags**. It allows for better organization, tracking, and compatibility with AMS (Automatic Material System) while supporting **custom filament profiles**.

OpenBamboo uses **Ntag213, Ntag215, Ntag216**, and **MIFARE Classic 1K** NFC tags to store spool data, ensuring flexibility across different storage capacities.

## 📌 **Supported NFC Tags & Storage**

| Tag Type              | Storage Capacity |
| --------------------- | ---------------- |
| **Ntag213**           | 144 bytes        |
| **Ntag215**           | 504 bytes        |
| **Ntag216**           | 888 bytes        |
| **MIFARE Classic 1K** | 716 bytes        |

## 📂 **Data Structure**

The OpenBamboo format consists of multiple fields that store essential information about a filament spool. These fields are structured as a fixed-size **C++ struct** to ensure efficient storage and fast access.

### **1. Identification & General Information**

| Field Name     | Type       | Size (Bytes) | Description                                                |
| -------------- | ---------- | ------------ | ---------------------------------------------------------- |
| `magicNumber`  | `uint16_t` | 2            | Fixed identifier (`0xCAFE`) to validate OpenBamboo format. |
| `vendor`       | `char[16]` | 16           | Brand or manufacturer of the filament.                     |
| `name`         | `char[32]` | 32           | Custom spool name for easy identification.                 |
| `materialID`   | `char[8]`  | 8            | Short identifier for filament material.                    |
| `filamentType` | `char[16]` | 16           | Type of filament (e.g., PLA, ABS, PETG).                   |

### **2. Physical Properties**

| Field Name                 | Type       | Size (Bytes) | Description                                                  |
| -------------------------- | ---------- | ------------ | ------------------------------------------------------------ |
| `colorRGBA`                | `uint32_t` | 4            | Color representation in RGBA format. _(Editable)_            |
| `spoolWeight`              | `uint16_t` | 2            | Weight of the empty spool (grams). _(Editable)_              |
| `filamentDiameter`         | `uint16_t` | 2            | Filament diameter in mm (e.g., 175 for 1.75mm). _(Editable)_ |
| `density`                  | `uint16_t` | 2            | Material density value.                                      |
| `flowRatio`                | `uint16_t` | 2            | Filament flow ratio for extrusion tuning.                    |
| `temperatureVitrification` | `uint16_t` | 2            | Temperature at which material transitions to a solid.        |
| `pressureAdvance`          | `uint16_t` | 2            | Pressure advance setting for smooth extrusion.               |
| `maxVolumetricSpeed`       | `uint16_t` | 2            | Maximum volumetric speed in mm³/s.                           |

### **3. Temperature & Drying Settings**

| Field Name             | Type       | Size (Bytes) | Description                                       |
| ---------------------- | ---------- | ------------ | ------------------------------------------------- |
| `bedTemperature`       | `uint16_t` | 2            | Recommended bed temperature. _(Editable)_         |
| `hotendTemperature`    | `uint16_t` | 2            | Optimal hotend temperature.                       |
| `maxHotendTemperature` | `uint16_t` | 2            | Maximum allowable hotend temperature.             |
| `minHotendTemperature` | `uint16_t` | 2            | Minimum required hotend temperature.              |
| `chamberTemperature`   | `uint8_t`  | 1            | Suggested enclosure chamber temperature.          |
| `dryingTemperature`    | `uint8_t`  | 1            | Recommended drying temperature. _(Editable)_      |
| `dryingTime`           | `uint8_t`  | 1            | Recommended drying duration (hours). _(Editable)_ |

### **4. Spool Specifications & Additional Data**

| Field Name       | Type       | Size (Bytes) | Description                                          |
| ---------------- | ---------- | ------------ | ---------------------------------------------------- |
| `spoolWidth`     | `uint16_t` | 2            | Width of the spool in mm. _(Editable)_               |
| `productionDate` | `uint16_t` | 2            | Date of production (days since epoch). _(Editable)_  |
| `filamentLength` | `uint16_t` | 2            | Total length of filament in meters. _(Editable)_     |
| `isSupport`      | `boolean`  | 1            | **True** if the filament is support material.        |
| `isSoluble`      | `boolean`  | 1            | **True** if the filament is soluble.                 |
| `cost`           | `uint16_t` | 2            | Approximate cost of the spool in cents. _(Editable)_ |

---
