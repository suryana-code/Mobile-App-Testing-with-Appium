Configure untuk pengujian disimpan pada [config.js](src/config.js)

### How to Run?

run `node [file location]` E.g `node ./src/sampleTest.js`
install node 20 `nvm install 20`

if "ReadableStream is not defined" ini karena seharusnya install node versi terbaru (20)
"nvm install 20"

#### \*\* NOTE

Pengujian dengan Appium pada aplikasi SwagLabs, menggunkaan Data Diverent Test (DTT) dan Page Object Model (POM). dimana keperluan data disimpan pada `/data`, objects pages disimpan pada `/fixtures` dan untuk semua step pengujian disimpan pada `/test`

## Instalasi Perangkat dan Tools

### 1. Install Node.js & npm (Node Package Manager)

- **Cek apakah sudah terinstall** dengan menjalankan:

  ```sh
  node -v
  npm -v
  ```

  - Jika belum ada, download dan install dari [Node.js](https://nodejs.org/).

  2. **VS Code (Visual Studio Code)**

  - Download dan install dari [VS Code](https://code.visualstudio.com/).

3. **Appium Server**

   - Install Appium secara global dengan npm:
     ```sh
     npm install -g appium
     ```
   - **Cek versi** untuk memastikan instalasi berhasil:
     ```sh
     appium -v
     ```

4. **Appium Doctor (untuk verifikasi)**

   - Install `appium-doctor` untuk memastikan sistem sudah siap:
     ```sh
     npm install -g appium-doctor
     ```
   - Jalankan:
     ```sh
     appium-doctor
     ```
   - Jika ada error, perbaiki sesuai petunjuk yang muncul.

5. **Appium Inspector** (GUI untuk memeriksa elemen UI)

   - Download dan install dari [Appium Inspector](https://github.com/appium/appium-inspector/releases).

6. **Android Studio & SDK Tools** _(jika menguji di Android)_

   - Install **Android Studio** dari [Android Developer](https://developer.android.com/studio).
   - Pastikan **ADB (Android Debug Bridge)** sudah terinstall:
     ```sh
     adb version
     ```
   - Tambahkan `ANDROID_HOME` dan `PATH` di **environment variables**.

7. **Xcode (jika menguji di iOS)**
   - Hanya diperlukan jika ingin menguji di perangkat iPhone/Mac.
   - Install dari **Mac App Store**.

---

## 🚀 **2. Setup Proyek di VS Code**

Setelah semua alat terinstal, kita siapkan proyek di VS Code.

### 📌 **a. Buat Folder Proyek & Inisialisasi npm**

1. **Buka terminal di VS Code** dan jalankan:

   ```sh
   mkdir appium-test
   cd appium-test
   npm init -y
   ```

   Ini akan membuat proyek baru dengan file `package.json`.

2. **Install Dependensi yang Dibutuhkan**
   ```sh
   npm install appium webdriverio chai
   ```
   - **`appium`** → untuk menjalankan server.
   - **`webdriverio`** → untuk menjalankan skrip otomatisasi.
   - **`chai`** → untuk assertion dalam pengujian.

---

## 📌 **3. Konfigurasi Appium & WebdriverIO**

### **a. Buat File Konfigurasi**

1. **Buat file konfigurasi `wdio.conf.js`**

   ```sh
   npx wdio config
   ```

   - Pilih **"Yes"** saat ditanya apakah ingin membuat file konfigurasi.
   - Pilih **Appium** sebagai test runner.
   - Pilih bahasa **JavaScript**.
   - Pilih framework **Mocha** atau **Jest** (bebas).
   - Pilih service `appium`.
   - Masukkan lokasi `./test/specs/**/*.js` untuk test case.

---

## 📌 **4. Menjalankan Appium Server & Inspector**

1. **Jalankan Appium Server**

   ```sh
   appium
   ```

   Ini akan menjalankan server di **port default 4723**.

2. **Jalankan Appium Inspector**

   - **Buka Appium Inspector**.
   - Masukkan konfigurasi:
     - **Remote Host:** `localhost`
     - **Port:** `4723`
     - **Path:** `/wd/hub`
     - **Capabilities:** (sesuai `wdio.conf.js`).

3. **Klik "Start Session"** untuk memulai.

---

## 📌 **5. Buat dan Jalankan Test Case**

### **a. Buat Test Case Pertama**

1. **Buat folder & file untuk test case**

   ```sh
   mkdir -p test/specs
   touch test/specs/sampleTest.js
   ```

---

## 📌 **6. Jalankan Pengujian**

Jalankan pengujian dengan:

```sh
node ./src/sampleTest.js
```

Jika berhasil, test akan berjalan dan hasilnya akan muncul di terminal.

---

\*\*automation ini menggunakan Appium untuk aplication mobilenya dan WebdruverIO sebagai librarynya

## Struktur

Untuk struktur pengujian, kumpulan element-element disimpan pada folder [elements](src/fixtures/elements), ini memudahkan jika ingin melakukan perubahan pada element yang dipakai. Kemudian proses input data mengimplementasikan Data Driven Test (DDT), ini memberikan kemudahan jika ingin melakukan perubahan sumber data yang akan di-input. Lalu terapat folder [fixtures](src/fixtures) folder

## Overview

This is a project created for demonstrating automated testing using Appium. It utilizes Data-Driven Testing (DDT) and Page Object Model (POM) to ensure a clean, scalable, and maintainable test structure. This prototype is designed to help teams or individuals looking to get hands-on experience with Appium dengan bahasa menggunakan WebDriver.IO for mobile Application testing.

## What I Learned

This prototype project provides a practical learning opportunity for understanding and implementing effective testing strategies using Appium.

1. Core Testing Principles

- DDT (Data Driven Test)
  - Understand how to separate test logic from test data, improving reusability and adaptability.
  - Gain experience in dynamically injecting external data into tests for flexible test execution.
  - Learn how to structure tests to run the same scenarios with multiple data sets.
- POM (Page Object Model)
  - Learn how to create and manage page classes to abstract UI interactions, making test cases cleaner and easier to maintain.
  - Understand the benefits of organizing code by separating test logic from UI interactions.

2. Coding Best Practices

- Learn to implement modular and reusable code
  - Save the ui elements in the [/elements](src/pages/elements) folder so that the elements can be easily managed.
  - Store test data in external files [/data](src/data) for better organization and easier updates.
  - Centralize common actions (e.g., login, navigation) in reusable fixtures [fixtures](src/pages), reducing code duplication.
  - Keep test files [tests](src/tests) concise by delegating UI interaction details to page objects (/pages).
- Understand how to design scalable and maintainable test automation projects:
  - Use consistent folder and naming conventions.
  - Isolate responsibilities within the project (e.g., test data, test logic, and UI interactions).

3. Practical Testing Skills

- Learn how to validate different application states, such as checking for success messages or UI updates after actions.
- Understand how to structure tests to focus on assertions while delegating repetitive actions to reusable methods or fixtures.
- Discover techniques for managing test data to simulate various user scenarios and edge cases.

4. Project Management Skills

- Understand how to structure an automation testing project to make it understandable for teams and scalable for future needs.
- Learn how to document a project effectively (as seen in the README file), making it easy for others to clone, explore, and use.

## Key Features

- **POM** : This project implements one of the design patterns, namely the Page Object Model, which is used to separate script logic from UI elements. This makes the project more structured and easier to maintain.
- **DDT** : Implemented Data-Driven Testing (DDT) to store test data in a specific folder, separate from the test scripts, allowing the data to be reused in other tests when needed. This approach simplifies data management and modifications by focusing only on the data set without affecting existing test scripts

## Folder Structure

```
|-- project/
|  |  |--src/
|  |  |  |--data/
```

- [**/data**](src/data): This is a folder to store a collection of data that may be needed during the automation testing process. Folders like this are also sometimes called `fixtures` folders, only for the name of the `/data` folder, it is generally free to be set manually.
- [**/pages**](src/pages): Stores UI components to be tested and stores functions to interact with those elements. Includes test actions, such as login processes and reusable test setups.
- [**/pages/elements**](src/pages/elements): A collection of UI elements. The retrieved UI elements are stored in files within this folder to make it easier when debugging or updating UI elements, so there's no need to modify the test case directly.
- [**/tests**](src/tests): Contains the actual test specifications (.js files), which can also be referred to as the test cases for each test to be performed. Each test file includes one or more test cases. The tests are organized based on the functionality being tested

\***\*Note**: makesure untuk menggunakan Node versi 20 keatas
