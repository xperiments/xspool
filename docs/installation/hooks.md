---
sidebar_position: 2
---

import screenshot1 from '/img/app/screenshot5.png';
import screenshot2 from '/img/app/screenshot6.png';

# Hooks Configuration

xspool supports two integration hooks that allow it to communicate with external systems. Only **one hook can be active at a time**.

## 📌 **Available Hooks**

### **1. xtouch Hook**

- This hook allows xspool to integrate directly with **xtouch** for enhanced spool management.
- **Configuration**:
  - Requires entering the **IP Address** of the xtouch device.

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<img src={screenshot1} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>

### **2. BBLocal Hook**

- This hook connects xspool to a **BBLocal** instance, enabling spool management within a local BambuLab setup.
- **Configuration**:
  - Requires the following values:
    - **IP Address** – The local IP of the BambuLab printer or BBLocal server.
    - **Access Code** – A unique code required for authentication.
    - **Serial Number** – The serial number of your BambuLab printer.

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<img src={screenshot2} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>
---

## 🔎 **How to Find BBLocal Credentials?**

To correctly configure the **BBLocal Hook**, you need to retrieve the required values from your **BambuLab device or BBLocal server**. You can find this information in BambuLab’s official documentation:

➡️ **[Enable LAN Mode](https://wiki.bambulab.com/en/knowledge-sharing/enable-lan-mode)**  
➡️ **[Find Printer Serial Number](https://wiki.bambulab.com/en/general/find-sn)**

---

## ⚠ **Important Notes**

- Switching between **xtouch Hook** and **BBLocal Hook** will disable the previously active hook.
- Make sure your network allows communication between xspool and the target device.
- If you encounter connection issues, verify that your **IP, Access Code, and Serial Number** are correct.

Once configured, xspool will seamlessly integrate with your selected hook, providing enhanced spool management tailored to your workflow. 🚀
