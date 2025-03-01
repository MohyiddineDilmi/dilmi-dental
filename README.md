# Dilmi Dental Clinic Website

A modern, responsive website for Dilmi Dental Clinic built with React. The website features a clean design, multilingual support (English and Arabic), and SEO optimization.

## Features

- 🌐 Multilingual Support (English & Arabic with RTL layout)
- 📱 Fully Responsive Design
- 🎨 Modern UI with Neomorphic Elements
- 🔍 SEO Optimized
- ⚡ Fast Loading Performance
- 🧩 Component-Based Architecture

## Technologies Used

- React
- i18next for Internationalization
- Framer Motion for Animations
- React Helmet for SEO
- React Router for Navigation
- CSS3 for Styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dilmi-dental.git
   cd dilmi-dental
   ```

2. Install dependencies:
   ```
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

The website is configured to be deployed on GitHub Pages with a custom domain (www.dilmidental.com).

### Manual Deployment

1. Build the project:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

### Using the Deployment Script

For convenience, a deployment script is included:

```
./deploy.sh
```

This script will:
- Check for uncommitted changes
- Install dependencies if needed
- Build the project
- Ensure the CNAME file is present
- Deploy to GitHub Pages

## DNS Configuration

To set up the custom domain with GitHub Pages:

1. Configure your domain provider with the following records:
   - A record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: www pointing to `yourusername.github.io`

2. In your GitHub repository settings, under "Pages", add your custom domain.

## Project Structure

```
dilmi-dental/
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── CNAME
│   ├── robots.txt
│   ├── sitemap.xml
│   └── locales/
│       ├── en/
│       └── ar/
├── src/
│   ├── components/
│   ├── styles/
│   ├── assets/
│   ├── i18n/
│   ├── App.js
│   └── index.js
└── package.json
```

## Maintenance

To update the website content:

1. Edit the appropriate files in the `src` directory
2. For text changes, update the translation files in `public/locales`
3. Deploy using the provided deployment script

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or support, please contact [your-email@example.com](mailto:your-email@example.com).
