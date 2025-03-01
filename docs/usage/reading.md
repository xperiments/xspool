---
sidebar_position: 1
---

import Enclosure from '/img/xspool-vector-a.svg';
import EnclosureFront from '/img/xspool-vector-c.svg';
import screenshot from '/img/app/screenshot3.png';
import screenshot1 from '/img/app/screenshot11.png';

# Reading Tags

<Enclosure width={300} height={300} />

xspool allows you to **read RFID spool tags** and determine their status in real-time. This section explains how to scan RFID tags and interpret the results.

---

## **📌 How to Read an RFID Tag**

1️⃣ **Place the tag** on the RFID reader.  
2️⃣ **Wait for xspool to process the tag** (this takes a few seconds).  
3️⃣ The tag status will be shown on the device led with different colors

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<EnclosureFront width={400} height={400} />
<img src={screenshot} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
<img src={screenshot1} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>

| **Status**                              | **Color**  | **Meaning**                                                                       |
| --------------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| ✅ **Detected - Valid Tag**             | **Green**  | The tag is recognized and contains valid filament data.                           |
| 🟠 **Detected - Queued OpenBamboo Tag** | **Orange** | The tag is an **OpenBamboo tag** that is currently **queued** for AMS assignment. |
| ❌ **Detected - Wrong Format**          | **Red**    | The tag is an **incompatible format** and cannot be read properly.                |
| 🔍 **Searching...**                     | **White**  | xspool is scanning for a tag, but nothing has been detected yet.                  |

## **📌 Loading Filaments in AMS**

This process ensures that AMS correctly assigns the spool to a slot after scanning its RFID tag.

### **1️⃣ Present the Spool Tag to the RFID Reader**

- Hold the **spool's RFID tag** close to the **xspool RFID scanner**.
- If the tag is valid, the indicator will turn **green** (recognized).
- If it is an OpenBamboo tag **queued for the next AMS change**, the indicator will turn **orange**.

### **2️⃣ Load the Spool into an AMS Slot**

- **Once the RFID tag is scanned**, take the spool and **insert it into an empty AMS slot**.
- AMS will automatically **detect the spool** and begin the loading process.

### **3️⃣ xspool Assigns the Filament to the Slot**

- As soon as AMS finishes loading the spool, xspool **updates the AMS slot assignment** with the queued OpenBamboo filament data.
- Now, the AMS recognizes the custom filament profile stored in the OpenBamboo tag.

---

## **📌 Troubleshooting**

| Issue                            | Possible Cause                                          | Solution                                        |
| -------------------------------- | ------------------------------------------------------- | ----------------------------------------------- |
| **Tag not detected**             | RFID tag might not be placed correctly                  | Try repositioning the tag closer to the reader. |
| **Red indicator (Wrong Format)** | The tag is not an OpenBamboo or BambuLab-compatible tag | Ensure you're using a supported tag format.     |
