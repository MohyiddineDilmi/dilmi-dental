# GitHub Repository Setup Instructions

1. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click on the "+" icon in the top-right corner and select "New repository"
   - Name your repository `dilmi-dental`
   - Make it Public
   - Do not initialize with README, .gitignore, or license (since you already have these locally)
   - Click "Create repository"

2. **Connect your local repository to GitHub**:
   - After creating the repository, GitHub will show you commands to use
   - Copy the commands for "…or push an existing repository from the command line"
   - Run these commands in your terminal:
   ```
   git remote add origin https://github.com/YOUR_USERNAME/dilmi-dental.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your actual GitHub username)

3. **Set up GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "gh-pages" branch
   - Enter your custom domain: `www.dilmidental.com`
   - Click "Save"
   - Check "Enforce HTTPS" if available (might take some time to appear)

4. **DNS Configuration with Your Domain Provider**:
   - Log in to your domain registrar account (where you purchased dilmidental.com)
   - Find the DNS management section
   - Add the following A records pointing to GitHub Pages IP addresses:
     ```
     A record: @ -> 185.199.108.153
     A record: @ -> 185.199.109.153
     A record: @ -> 185.199.110.153
     A record: @ -> 185.199.111.153
     ```
   - Add a CNAME record:
     ```
     CNAME record: www -> YOUR_USERNAME.github.io
     ```
     (Replace YOUR_USERNAME with your GitHub username)

5. **Deploy your site**:
   - Once everything is set up, run:
   ```
   ./deploy.sh
   ```
   - This will deploy your site to GitHub Pages

6. **Verify Your Site**:
   - Wait 5-10 minutes for DNS changes to propagate
   - Visit https://www.dilmidental.com to see your site live

Note: DNS changes can take up to 48 hours to fully propagate worldwide, although they often take effect much sooner. 