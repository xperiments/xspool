---
sidebar_position: 2
---

import screenshot from '/img/app/screenshot3.png';
import screenshot1 from '/img/app/screenshot12.png';
import screenshot2 from '/img/app/screenshot10.png';
import screenshot3 from '/img/app/screenshot8.png';
import EnclosureFront from '/img/xspool-vector-c.svg';

# Writing Tags

xspool allows you to **write OpenBamboo tags** to store custom filament data, ensuring that AMS can recognize and manage spools with personalized settings.

---

## **📌 Step-by-Step Guide to Writing a Tag**

### **0️⃣ Open xspool Web App**

- Navigate to **`xspool-xxxx.local`** in your browser.
- Click on the **write icon** to begin the tag-writing process.

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<img src={screenshot} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
<img src={screenshot1} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>

### **1️⃣ Select the Type of Tag to Write**

- Choose the appropriate RFID tag type:
  - **OpenBamboo** → For AMS-compatible spools.
  - **Creality CFS** → For Creality filament systems (encrypted/non-encrypted).

### **2️⃣ Fill in the Required Filament Data**

- Enter the necessary details for your filament, including:
  - **Material Type** (PLA, PETG, ABS, etc.)
  - **Filament Diameter** (1.75mm, 2.85mm)
  - **Spool Weight**
  - **Color (RGBA)**
  - **Temperature & Drying Settings**
  - Any additional properties relevant to the tag format.

<div style={{marginTop:"48px",marginBottom:"48px"}}>
<img src={screenshot2} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
<img src={screenshot3} style={{width:"260px", borderRadius:"25px", marginRight:"16px"}}/>
</div>

### **3️⃣ Press "Write Tag"**

- Click the **"Write Tag"** button to initiate the writing process.
- The **device LED will start a slow violet pulsation**, indicating that xspool is **waiting for a tag to be presented**.

### **4️⃣ Present the Tag to the Device**

- Hold the **RFID tag** close to the **xspool RFID scanner**.
- Once detected, the **LED will blink rapidly in violet**, indicating that data is being written to the tag.

<EnclosureFront width={400} height={400} />

### **5️⃣ Wait for Confirmation**

- xspool will indicate whether the **tag write was successful or failed**:

| **Status**             | **Color** | **Meaning**                                                |
| ---------------------- | --------- | ---------------------------------------------------------- |
| ✅ **Success**         | **Green** | The tag was successfully written with OpenBamboo data.     |
| ❌ **Failed**          | **Red**   | Writing failed. The tag may be incompatible or corrupted.  |
| 🔍 **Waiting for Tag** | **White** | xspool is ready to write but no tag has been detected yet. |

---

## **📌 Troubleshooting**

| Issue                                          | Possible Cause                                   | Solution                                        |
| ---------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| **Tag not detected**                           | The RFID tag is not close enough to the reader   | Try moving the tag closer or repositioning it.  |
| **Write failed (Red indicator)**               | The tag might be write-protected or incompatible | Try another tag or ensure it's supported.       |
| **Tag written, but AMS does not recognize it** | The filament data might be incomplete            | Double-check the entered values before writing. |
