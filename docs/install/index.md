# Installation

Instructions on how to download and install the basics of **Virulent.js**.

## Download
There are a few ways to install **Virulent**:

### Using *Git*
```bash
cd resources
git clone https://github.com/TheRealToxicDev/Virulent
```

---

### Direct Download
- Download the `.zip` from <span style="color: #ff5733">[here](https://github.com/TheRealToxicDev/Virulent/releases/latest)</span>.
- Create a folder called `Virulent.js` inside your `node_modules` folder. Then place the virulent files inside of it.

---

### NPM Install
```
npm i --save github:TheRealToxicDev/Virulent
```

---

### Hard Coded Install
Aditionally you can Install the Virulent Module via your Package.json
by adding the following line under your List of Dependencies.

```bash
"virulent": "https://github.com/TheRealToxicDev/Virulent"
```

Example Package.json

```bash
{
    "name": "virulent",
    "version": "1.0.0",
    "description": "Official Sample Bot for the Virulent Discord Library.",
    "main": "bot.js",
    "scripts": {
      "start": "node bot.js"
    },
    "engines": {
     "node": "12.16.2"
  },
    "keywords": [
      "discord",
      "api",
      "client",
      "javascript"
    ],
    "author": "Toxic Dev",
    "license": "Apache-2.0",
    "dependencies": {
     "virulent": "https://github.com/TheRealToxicDev/Virulent"
    }
  }
  ```
