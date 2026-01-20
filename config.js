// Site Configuration
// Edit these values to change the site title and subtitle across all pages

const siteConfig = {
    title: "Nick's Photos",
    subtitle: "A collection of my favorite moments",
    copyright: "2026 Nickvh Photos. All rights reserved."
};

// Apply configuration to the page
document.addEventListener('DOMContentLoaded', function() {
    // Update page title (browser tab)
    document.title = siteConfig.title;
    
    // Update header title
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.textContent = siteConfig.title;
    }
    
    // Update subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = siteConfig.subtitle;
    }
    
    // Update footer copyright
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${siteConfig.copyright}`;
    }
});
