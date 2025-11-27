## McGill Trees – Local Setup Guide

This project is a small web app (built with Next.js and React) for exploring and identifying trees around McGill.

You do **not** need to write any code to run it, but you do need to install a few tools once on your computer.

---

## 1. One‑time installation

### 1.1 Install Node.js (required)

1. Open a web browser and go to the Node.js download page: `https://nodejs.org`
2. Download the **LTS** version (the one marked “Recommended for most users”).
3. Open the downloaded file and follow the installer steps (keep all default options).

After installation:

- On macOS, open the **Terminal** app.
- Type this command and press **Enter**:

```bash
node -v
```

If you see a version number (for example `v20.x.x`), Node.js is installed correctly.

---

## 2. Get into the project folder

1. Open the **Terminal** app.
2. Go to the folder that contains this project. For example, if the project folder is on your Desktop and is called `mcgillTrees`, run:

```bash
cd ~/Desktop/mcgillTrees
```

> If the folder is somewhere else, adjust the path accordingly.

You only need to run `cd ...` once each time you open a new Terminal window before working with this project.

---

## 3. Install project dependencies

This step downloads the libraries the project needs (React, Next.js, etc.).

In the **Terminal**, with the project folder selected (see step 2), run:

```bash
npm install
```

Notes:

- This may take a few minutes the first time.
- You only need to do this again if you delete the `node_modules` folder or after pulling big changes to the project.

---

## 4. Run the project locally

With the Terminal still in the `mcgillTrees` folder, start the development server:

```bash
npm run dev
```

What happens:

- The command will start a local web server.
- After a few seconds you should see a message similar to:
  - `Local: http://localhost:3000`

Now open a web browser (Chrome, Safari, Firefox, etc.) and go to:

`http://localhost:3000`

You should see the McGill Trees app running.

### Keep the server running

- **Do not close** the Terminal window while using the app.
- To **stop** the server later, go to the Terminal window and press:  
  `Ctrl + C` (hold the Control key and press C).

---

## 5. Common issues & how to fix them

- **Command not found: node or npm**
  - Node.js was not installed correctly, or the Terminal was open before installation.
  - Close all Terminal windows, open a new one, and try `node -v` again.
  - If it still fails, reinstall Node.js from `https://nodejs.org`.

- **Port 3000 already in use**
  - Another app (or another copy of this project) is already running.
  - Close any other Terminal windows that might be running `npm run dev`, then try again.

- **White screen or error page in the browser**
  - Make sure the Terminal is still running `npm run dev` without errors.
  - Refresh the browser page.

If something goes wrong that you can’t fix, take a screenshot of:

- The **Terminal** window, and  
- The **browser** window,

and send both to someone who can help.

---

## 6. How to update / pull new changes (optional)

If this project is managed with Git (for example via GitHub), the usual steps to get updates are:

1. Open Terminal and go to the project folder:

   ```bash
   cd ~/Desktop/mcgillTrees
   ```

2. Pull the latest changes (only if you are using Git and have it configured):

   ```bash
   git pull
   ```

3. If a lot changed, it’s sometimes safest to reinstall dependencies:

   ```bash
   npm install
   ```

4. Then run the app again:

   ```bash
   npm run dev
   ```

If you are not using Git yourself, you can ignore this section.

---

## 7. Quick summary

- **Open Terminal**
- **Go to the folder**:

  ```bash
  cd ~/Desktop/mcgillTrees
  ```

- **Install dependencies (first time only)**:

  ```bash
  npm install
  ```

- **Run the app**:

  ```bash
  npm run dev
  ```

- Open a browser and go to: `http://localhost:3000`


