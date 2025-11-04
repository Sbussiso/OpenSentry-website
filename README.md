# OpenSentry Website

A static website showcasing the OpenSentry ecosystem, including OpenSentry - LMV (Live Motion Version) and OpenSentry Command.

## Features

- **Modern Design**: Clean, professional design using Bootstrap 5
- **Responsive**: Mobile-friendly layout that works on all devices
- **Static HTML/CSS/JS**: No build process required, easy to deploy anywhere
- **Comprehensive Documentation**: Includes all sections covering features, documentation, and community

## Quick Start with Docker (Recommended)

The easiest way to run the website is using Docker Compose:

```bash
docker compose up -d
```

That's it! The website will be available at `http://localhost:8000`

**Docker Commands:**

```bash
# Start the website
docker compose up -d

# View logs
docker compose logs -f

# Stop the website
docker compose down

# Rebuild after changes
docker compose up -d --build
```

## Project Structure

```
opensentry-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS styles
├── js/
│   └── script.js      # Interactive JavaScript features
├── Dockerfile          # Docker image definition
├── compose.yaml        # Docker Compose configuration
├── .dockerignore       # Docker build exclusions
├── serve.sh            # Local development server script
└── README.md          # This file
```

## Website Sections

1. **Hero Section**: Eye-catching landing area with project overview
2. **About Section**: Introduction to both OpenSentry projects
3. **Features Section**: Comprehensive feature showcase
4. **Documentation Section**: Quick start guides, hardware requirements, configuration
5. **Community Section**: GitHub links, contribution info, tech stack

## Local Development

### Option 1: Docker (Recommended)

```bash
docker compose up -d
```

### Option 2: Using the serve script

```bash
./serve.sh
```

### Option 3: Python HTTP Server

```bash
python3 -m http.server 8000
```

### Option 4: PHP Built-in Server

```bash
php -S localhost:8000
```

### Option 5: Node.js HTTP Server

```bash
npx http-server -p 8000
```

All options serve the website at `http://localhost:8000`

## Deployment Options

### Docker (Self-hosted)

Deploy on any server with Docker installed:

```bash
# Clone the repository
git clone <your-repo-url>
cd opensentry-website

# Start the website
docker compose up -d

# Optional: Use a different port
# Edit compose.yaml and change "8000:8000" to "80:8000" for production
```

For public access, you can:
- Use a reverse proxy (nginx, Caddy, Traefik)
- Use ngrok for quick testing: `ngrok http 8000`
- Configure your router/firewall to forward ports

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings > Pages
4. Select the branch and root folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository (or drag and drop the folder)
3. No build settings needed (static HTML)
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Your site is deployed!

### Traditional Web Hosting

Simply upload all files to your web hosting provider via FTP/SFTP:
- Upload `index.html` to the root directory
- Upload `css/` and `js/` folders

## Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;
    --dark-bg: #1a1a1a;
    --hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content

All content is in `index.html`. Simply edit the text within the HTML tags.

### JavaScript Features

The site includes several interactive features in `js/script.js`:
- Smooth scrolling navigation
- Active section highlighting
- Scroll animations
- Copy-to-clipboard for code blocks
- Back-to-top button
- Responsive navbar

## Technologies Used

- **HTML5**: Modern semantic markup
- **CSS3**: Custom styles with animations
- **Bootstrap 5.3.2**: Responsive framework
- **Bootstrap Icons**: Icon library
- **Vanilla JavaScript**: No framework dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website is created to showcase the OpenSentry projects, which are licensed under MIT.

## Links

- **OpenSentry - LMV**: https://github.com/Sbussiso/OpenSentry-LVM
- **OpenSentry Command**: https://github.com/Sbussiso/OpenSentry-Command

## Contributing

Feel free to submit issues or pull requests to improve the website!
