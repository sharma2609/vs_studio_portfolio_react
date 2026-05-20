# Deployment Guide

This document provides step-by-step instructions for deploying your VS Code Portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [x] All data updated in `src/data/` files
- [x] Resume PDF placed in `public/` folder
- [x] Build tested locally (`npm run build`)
- [x] Responsive design verified on mobile devices
- [x] All links tested and working
- [x] Theme switcher functional
- [x] Chatbot responses accurate

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds and previews.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Deploy via GitHub** (Recommended):
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

#### Configuration:
The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support

### Option 2: Netlify

Netlify provides excellent performance and easy deployment.

#### Steps:

1. **Deploy via Drag & Drop**:
   ```bash
   npm run build
   ```
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist/` folder to the deploy area

2. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

#### Configuration:
The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing redirects

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Add base path in vite.config.js**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   });
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Option 4: Custom Domain

After deploying to Vercel or Netlify, you can add a custom domain.

#### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `priyanshuSharma.dev`)
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

#### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

## 🔧 Environment Variables

This project doesn't require environment variables, but if you add any:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### Netlify:
- Go to Site Settings → Build & Deploy → Environment
- Add environment variables

## 📱 Testing Deployment

After deployment, test these features:

1. **Navigation**:
   - [ ] All sidebar views work
   - [ ] File explorer opens files
   - [ ] Tabs open and close properly

2. **Responsive Design**:
   - [ ] Mobile view shows only preview (no code panel)
   - [ ] Sidebar collapses on mobile
   - [ ] Terminal is accessible
   - [ ] All content is readable

3. **Functionality**:
   - [ ] Theme switcher works
   - [ ] Resume downloads correctly
   - [ ] All external links open
   - [ ] Chatbot responds
   - [ ] Dino game loads

4. **Performance**:
   - [ ] Page loads quickly
   - [ ] No console errors
   - [ ] Smooth animations
   - [ ] Images load properly

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build command fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh

**Issue**: Page not found when refreshing on routes
**Solution**: Ensure SPA redirects are configured (already done in `vercel.json` and `netlify.toml`)

### Styles Not Loading

**Issue**: CSS not applied after deployment
**Solution**: Check that `base` path in `vite.config.js` matches your deployment URL

### Resume Not Downloading

**Issue**: Resume PDF returns 404
**Solution**: Ensure `PriyanshuSharma_Resume.pdf` is in the `public/` folder before building

## 📊 Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable Compression**:
   - Vercel and Netlify enable Brotli/Gzip automatically

2. **Add CDN**:
   - Both platforms use global CDN by default

3. **Optimize Images**:
   - If you add images, use WebP format
   - Compress images before adding

4. **Monitor Performance**:
   - Use Lighthouse in Chrome DevTools
   - Check Core Web Vitals

## 🔒 Security

Both Vercel and Netlify provide:
- Automatic HTTPS/SSL
- DDoS protection
- Security headers
- Regular security updates

## 📈 Analytics (Optional)

### Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Vercel Analytics:
- Enable in Project Settings → Analytics
- Free tier available

### Netlify Analytics:
- Enable in Site Settings → Analytics
- Paid feature

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Push to GitHub**: Automatically triggers build
2. **Preview Deployments**: Every PR gets a preview URL
3. **Production Deployments**: Merging to main deploys to production

## 📝 Post-Deployment

After successful deployment:

1. **Update README**: Add live demo link
2. **Test on Multiple Devices**: Mobile, tablet, desktop
3. **Share**: Add link to LinkedIn, GitHub profile
4. **Monitor**: Check analytics and error logs
5. **Maintain**: Keep dependencies updated

## 🎉 Success!

Your portfolio is now live! Share it with:
- LinkedIn profile
- GitHub profile README
- Resume
- Email signature
- Social media

---

Need help? Check the [main README](README.md) or open an issue on GitHub.
