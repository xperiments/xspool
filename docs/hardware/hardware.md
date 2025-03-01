---
sidebar_position: 89
---

# Hardware

<div style={{ position: 'relative', width: '100%', paddingTop: 'calc(max(56.25%, 400px))', marginBottom:"50px" }}>
    <iframe
        src="https://app.cirkitdesigner.com/project/b4575423-1c97-424e-9705-98219f310dab?view=interactive_preview"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
    ></iframe>
</div>

## Component List

---

### ESP32 (30 pin)

- **Description**: A 30-pin microcontroller with Wi-Fi and Bluetooth capabilities, suitable for a wide range of IoT applications.

https://s.click.aliexpress.com/e/_onmXCw0

### RFID-RC522

- **Description**: An RFID reader/writer module for interfacing with RFID tags operating at 13.56 MHz.

https://s.click.aliexpress.com/e/_oDqXQIC

### WS2812B White LED

- **Description**: An individually addressable LED with integrated control circuitry.

https://s.click.aliexpress.com/e/_ooOaxY0

### Touch Button

- **Description**: A cable with an alligator clip for making temporary electrical connections.

---

# Wiring Details

### ESP32 (30 pin) Connections

| ESP32 Pin | Connected To                                |
| --------- | ------------------------------------------- |
| D23       | RFID-RC522 MOSI                             |
| D19       | RFID-RC522 MISO                             |
| D18       | RFID-RC522 SCK                              |
| D5        | RFID-RC522 SDA                              |
| D15       | RFID-RC522 RST                              |
| 3V3       | RFID-RC522 VCC (3.3V), WS2812B White LED 5V |
| GND       | RFID-RC522 GND, WS2812B White LED GND       |
| D26       | WS2812B White LED DIn                       |
| D27       | Alligator Clip Cable Pin                    |

### RFID-RC522 Connections

| RFID-RC522 Pin | Connected To |
| -------------- | ------------ |
| MOSI           | ESP32 D23    |
| MISO           | ESP32 D19    |
| SCK            | ESP32 D18    |
| SDA            | ESP32 D5     |
| RST            | ESP32 D15    |
| VCC (3.3V)     | ESP32 3V3    |
| GND            | ESP32 GND    |

### WS2812B White LED Connections

| WS2812B Pin | Connected To |
| ----------- | ------------ |
| 5V          | ESP32 3V3    |
| GND         | ESP32 GND    |
| DIn         | ESP32 D26    |

### Alligator Clip Cable (Blue) Connection

| Alligator Clip Cable Pin | Connected To |
| ------------------------ | ------------ |
| Pin                      | ESP32 D27    |
