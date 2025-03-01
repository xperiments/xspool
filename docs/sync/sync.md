---
sidebar_position: 8
---

import screenshot1 from '/img/app/screenshot4.png';

# Custom Filament Profiles

The **Sync Page** in xspool allows you to import and sync your custom filament profiles from **BambuStudio (BBS)** and **OrcaSlicer**. This enables you to write custom filament data to OpenBamboo tags, making them recognizable by the AMS system.

## 📌 **Why Sync Filament Profiles?**

- Ensures your **custom filament profiles** are available when creating OpenBamboo tags.
- Allows AMS to correctly identify and apply the custom settings for each spool.
- Simplifies the process of managing personalized filament configurations.

---

## 🔎 **How to Find Your BBS / OrcaSlicer Data Folder?**

Before syncing, you need to locate the **BambuStudio** or **OrcaSlicer app data folder** on your computer. Follow the instructions below based on your operating system.

### **Windows**

1. Press **Win + R**.
2. Type **`%AppData%`** and press **Enter**.
3. Locate the **BambuStudio** or **OrcaSlicer** folder.
4. **Drag & Drop** the folder into the sync page.

### **MacOS**

1. Open **Finder**.
2. Press **Command + Shift + G**.
3. Type **`~/Library/Application Support`** and press **Enter**.
4. Locate the **BambuStudio** or **OrcaSlicer** folder.
5. **Drag & Drop** the folder into the sync page.

---

## 🔄 **Syncing Your Filament Profiles**

### **Step 1: Open the Sync Page**

- Navigate to the **Sync Page** on your xspool device.

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<img src={screenshot1} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>

### **Step 2: Drag & Drop the Data Folder**

- Once you have located the correct **BBS / OrcaSlicer app data folder**, simply **drag the entire folder** into the **drag-and-drop area** on the Sync Page.

### **Step 3: Processing and Syncing**

- xspool will automatically **process** the filament profiles and sync them with your device.
- Once completed, you will be able to **use custom filament profiles** when writing OpenBamboo tags.

---

## ⚠ **Important Notes**

- Ensure the **data folder is correct** before dragging it into xspool.
- If your custom filament profiles do not appear, double-check that they exist in BambuStudio or OrcaSlicer.
- This sync process is **one-way**; any changes in BambuStudio or OrcaSlicer will require re-syncing with xspool.

After syncing, you can now **write OpenBamboo tags** with your custom filament profiles, making them fully compatible with AMS! 🎉
