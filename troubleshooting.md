# Troubleshooting GitHub Pages Deployment

If you encounter issues with your GitHub Pages deployment, here are solutions to common problems:

## 404 Error When Visiting Your Site

### Possible causes and solutions:

1. **DNS not properly configured**:
   - Verify your A records point to GitHub's IP addresses
   - Confirm your CNAME record is correctly set up
   - Use [DNS Checker](https://dnschecker.org) to verify DNS propagation

2. **GitHub Pages not enabled**:
   - Check repository settings to ensure GitHub Pages is enabled
   - Confirm the correct branch (gh-pages) is selected as the source

3. **Deploy didn't complete successfully**:
   - Check for any error messages in the deploy script output
   - Try running `npm run deploy` again
   - Check the Actions tab in your GitHub repository for any workflow errors

4. **Custom domain not configured in GitHub**:
   - Ensure your custom domain is entered in the GitHub Pages settings
   - Verify the CNAME file exists in your `build` folder

## Broken Links or Missing Resources

1. **Check homepage setting**:
   - Ensure `"homepage": "https://www.dilmidental.com"` is in your package.json
   - If using a subdirectory in the URL, update the homepage accordingly

2. **Path issues**:
   - Use relative paths for assets and links
   - Ensure your React Router is configured with the correct basename

## Routing Issues (404 on Refresh or Direct URL Access)

1. **Ensure 404.html redirect is working**:
   - Verify both index.html and 404.html have the redirect script
   - Check for any console errors in the browser

2. **Test with hash router**:
   - If persistent issues occur, consider temporarily using HashRouter instead of BrowserRouter

## HTTPS Not Working

1. **Wait for certificate issuance**:
   - GitHub Pages may take up to 24 hours to issue an SSL certificate
   - Ensure "Enforce HTTPS" is checked in your GitHub Pages settings

2. **Mixed content warnings**:
   - Ensure all resources (images, scripts, etc.) use HTTPS URLs
   - Check for hardcoded HTTP URLs in your code

## Site Is Not Updating After Changes

1. **Clear browser cache**:
   - Use Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to force refresh
   - Try in an incognito/private browser window

2. **Verify deployment completed**:
   - Check the output of your deployment script
   - Verify the gh-pages branch has been updated with your latest changes

3. **Check build process**:
   - Ensure your build process completed successfully
   - Look for any warnings or errors in the build output

## Custom Domain Gets Reset

1. **CNAME file issues**:
   - Ensure the CNAME file exists in your public folder
   - Verify the CNAME file contains only your domain (www.dilmidental.com)
   - Make sure your build process isn't removing the CNAME file

## Performance Issues

1. **Optimize your build**:
   - Use code splitting to reduce bundle size
   - Optimize images and other assets
   - Consider using a CDN for large assets

2. **Check for render-blocking resources**:
   - Use tools like Google Lighthouse to identify performance issues
   - Defer non-critical JavaScript and CSS

## Still Having Issues?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Look for error messages in your browser's developer console
- Consider creating a minimal test case to isolate the issue 