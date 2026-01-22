# GitHub Pages Deployment Guide

## Prerequisites

Before deploying, ensure:

1. **GitHub Repository Name**: Your repository is named `minimalistportfoliodesign`
2. **Branch**: You're pushing to the `main` branch
3. **GitHub Pages Settings**: 
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions" (NOT "Deploy from a branch")

## Deployment Steps

### 1. Verify Your Repository Setup

Make sure your repository URL is:
```
https://github.com/YOUR_USERNAME/minimalistportfoliodesign
```

### 2. Check GitHub Actions Workflow

1. Navigate to the "Actions" tab in your GitHub repository
2. You should see workflow runs every time you push to main
3. Click on the latest workflow run to see if it succeeded or failed
4. If it failed, check the error logs

### 3. Verify GitHub Pages is Enabled

1. Go to Settings → Pages in your repository
2. Under "Source", make sure "GitHub Actions" is selected
3. After a successful deployment, you should see a green checkmark and the URL where your site is published

### 4. Expected URL

Your site should be accessible at:
```
https://YOUR_USERNAME.github.io/minimalistportfoliodesign/
```

## Troubleshooting

### Issue: Blank Page or 404 Error

**Solution 1: Check Base Path**
- If your repository is named something different than `minimalistportfoliodesign`, update the `base` value in `vite.config.js`
- If deploying to `username.github.io` (user site), change `base` to `'/'` in `vite.config.js`

**Solution 2: Verify Workflow Completed Successfully**
- Check the Actions tab for any failed deployments
- Look for errors in the build or deploy steps

**Solution 3: Clear Browser Cache**
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Try opening in an incognito/private window
- Clear browser cache completely

**Solution 4: Check GitHub Pages Source**
- Go to Settings → Pages
- Verify "GitHub Actions" is selected as the source
- If "Deploy from a branch" is selected, change it to "GitHub Actions"

### Issue: Assets Not Loading (CSS, JS, Images)

This usually happens when the base path doesn't match your repository structure.

**Solution:**
1. Open `vite.config.js`
2. Update the `base` setting:
   - For project site: `base: '/your-repo-name/'`
   - For user site: `base: '/'`
3. Commit and push the changes

### Issue: Workflow Fails During Build

**Common Causes:**
- Missing dependencies
- Syntax errors in code
- Environment issues

**Solution:**
1. Check the error in the Actions tab
2. Run `npm install` and `npm run build` locally to test
3. Fix any errors and push again

## Testing Locally Before Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 (note: this runs without the base path)

3. **Test production build:**
   ```bash
   npm run build
   npm run preview
   ```
   This will simulate the production environment

## File Checklist

Make sure these files are in your repository:

- ✅ `vite.config.js` - with correct base path
- ✅ `index.html` - with `<script type="module" src="./main.jsx"></script>`
- ✅ `package.json` - with correct scripts
- ✅ `workflows/deploy.yml` - in `.github/workflows/` directory
- ✅ All source files (App.tsx, components, etc.)

## Important Notes

1. **Repository Name**: The `base` path in `vite.config.js` must match your repository name
2. **Workflow File Location**: The deploy.yml file should be at `.github/workflows/deploy.yml` in your repository
3. **Permissions**: The workflow file has the correct permissions set for GitHub Pages deployment
4. **.nojekyll**: The workflow automatically creates this file in the dist folder to ensure proper serving of assets

## Still Not Working?

If you've tried all the above and your site still doesn't work:

1. **Check if it's a user site vs project site:**
   - User site: `username.github.io` → use `base: '/'`
   - Project site: `username.github.io/repo-name` → use `base: '/repo-name/'`

2. **Verify the workflow file is in the right location:**
   - Create `.github` folder in repository root
   - Create `workflows` folder inside `.github`
   - Place `deploy.yml` inside `.github/workflows/`

3. **Double-check GitHub Pages settings:**
   - Settings → Pages → Source should be "GitHub Actions"
   - Not "Deploy from a branch"

4. **Wait a few minutes:**
   - After pushing changes, GitHub Actions needs time to build and deploy
   - Check the Actions tab to see deployment progress
   - Usually takes 2-5 minutes
