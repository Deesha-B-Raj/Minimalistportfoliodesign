# 🚨 CRITICAL FIX - Workflow File Location

## The Main Issue

The GitHub Actions workflow file **MUST** be in a specific location for GitHub to recognize it:

```
.github/workflows/deploy.yml
```

Currently, the workflow file in this Figma Make environment is at:
```
workflows/deploy.yml
```

## How to Fix This in Your GitHub Repository

### Step 1: Create the Correct Folder Structure

In your GitHub repository, create this folder structure:

```
your-repository/
├── .github/           ← Create this folder (with the dot!)
│   └── workflows/     ← Create this subfolder
│       └── deploy.yml ← Move/create the workflow file here
├── components/
├── styles/
├── App.tsx
├── index.html
├── main.jsx
├── package.json
├── vite.config.js
└── ... other files
```

### Step 2: Copy the Workflow Content

Copy the content from `/workflows/deploy.yml` in this project and create a new file at `.github/workflows/deploy.yml` in your GitHub repository with this exact content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Add .nojekyll file
        run: touch ./dist/.nojekyll
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings**
3. Click on **Pages** (in the left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 4: Push and Wait

1. Commit all your changes
2. Push to the `main` branch
3. Go to the **Actions** tab in your GitHub repository
4. Watch the workflow run (it will take 2-5 minutes)
5. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/minimalistportfoliodesign/
   ```

## Quick Checklist

- [ ] Created `.github` folder in repository root
- [ ] Created `workflows` folder inside `.github`
- [ ] Created `deploy.yml` file at `.github/workflows/deploy.yml`
- [ ] Copied the workflow content above into that file
- [ ] Set GitHub Pages source to "GitHub Actions" in repository settings
- [ ] Pushed all changes to the `main` branch
- [ ] Checked the Actions tab to see if workflow is running

## Still Not Working?

Make sure:
1. The `base` in `vite.config.js` matches your repository name exactly
2. Your repository is named `minimalistportfoliodesign` (or update the base path accordingly)
3. You're deploying from the `main` branch
4. GitHub Pages is enabled with "GitHub Actions" as the source

---

**Note:** The `.github` folder name starts with a dot (.) - this is important! Don't forget the dot.
