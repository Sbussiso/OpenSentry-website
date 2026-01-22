// OpenSentry Website - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Tab functionality for installation section with dropdown
    const commandBtn = document.querySelector('.tab-btn[data-tab="command"]');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const nodeDropdown = document.querySelector('.node-dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const tabPanels = document.querySelectorAll('.tab-panel');
    let currentNodeType = 'basic'; // Default to basic node
    
    // Command Center tab
    if (commandBtn) {
        commandBtn.addEventListener('click', function() {
            // Remove active from node dropdown
            dropdownToggle.classList.remove('active');
            nodeDropdown.classList.remove('open');
            
            // Add active to command button
            this.classList.add('active');
            
            // Show command panel
            tabPanels.forEach(p => p.classList.remove('active'));
            document.getElementById('command-panel').classList.add('active');
        });
    }
    
    // MCP Server tab
    const mcpBtn = document.querySelector('.tab-btn[data-tab="mcp"]');
    if (mcpBtn) {
        mcpBtn.addEventListener('click', function() {
            // Remove active from node dropdown
            dropdownToggle.classList.remove('active');
            nodeDropdown.classList.remove('open');
            commandBtn.classList.remove('active');
            
            // Add active to MCP button
            this.classList.add('active');
            
            // Show MCP panel
            tabPanels.forEach(p => p.classList.remove('active'));
            document.getElementById('mcp-panel').classList.add('active');
        });
    }
    
    // Node dropdown toggle
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Just toggle the dropdown, don't switch tabs yet
            nodeDropdown.classList.toggle('open');
        });
    }
    
    // Node type selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const nodeType = this.dataset.nodeType;
            currentNodeType = nodeType;
            
            // Update active state
            dropdownItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update dropdown label
            const label = this.querySelector('.node-name').textContent;
            document.querySelector('.dropdown-label').textContent = label;
            
            // Show node panel and corresponding instructions
            commandBtn.classList.remove('active');
            dropdownToggle.classList.add('active');
            tabPanels.forEach(p => p.classList.remove('active'));
            document.getElementById('node-panel').classList.add('active');
            
            // Show corresponding instructions
            document.querySelectorAll('.node-instructions').forEach(inst => {
                inst.style.display = 'none';
            });
            document.getElementById(`${nodeType}-node-instructions`).style.display = 'block';
            
            // Close dropdown after selection
            setTimeout(() => {
                nodeDropdown.classList.remove('open');
            }, 200);
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!nodeDropdown.contains(e.target)) {
            nodeDropdown.classList.remove('open');
        }
    });
    
    // Set initial state - basic node selected
    if (dropdownItems.length > 0) {
        dropdownItems[0].classList.add('active');
        // Make sure basic instructions are visible by default
        const basicInstructions = document.getElementById('basic-node-instructions');
        if (basicInstructions) {
            basicInstructions.style.display = 'block';
        }
    }
    
    // Copy to clipboard functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const textToCopy = this.dataset.copy;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = 'var(--accent-green)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(10, 15, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 15, 26, 0.9)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and other animated elements
    document.querySelectorAll('.feature-card, .arch-card, .doc-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
