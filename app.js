// Main application class for dynamic content rendering
class CarShowcaseApp {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    init() {
        this.renderPage();
        this.setupEventListeners();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const hash = window.location.hash;
        
        if (path.includes('index.html') || path === '/' || path === '') {
            return 'home';
        } else if (hash) {
            return hash.substring(1); // Remove # from hash
        } else {
            // Extract car ID from filename (car1.html -> tesla-model-s-2024)
            const filename = path.split('/').pop();
            if (filename.startsWith('car')) {
                const carNumber = filename.match(/\d+/)?.[0];
                if (carNumber) {
                    const carIndex = parseInt(carNumber) - 1;
                    return vehiclesData[carIndex]?.id || 'home';
                }
            }
        }
        return 'home';
    }

    renderPage() {
        const app = document.getElementById('app');
        if (!app) return;

        const trackingScripts = getTrackingScripts();

        app.innerHTML = `
            ${trackingScripts.body}
            
            <nav class="navbar">
                <div class="nav-container">
                    <h1 class="nav-title">${CONFIG.app.title}</h1>
                    <ul class="nav-menu" id="nav-menu">
                        ${this.renderNavigation()}
                    </ul>
                </div>
            </nav>

            <main class="main-content">
                <div class="container" id="main-content">
                    ${this.renderContent()}
                </div>
            </main>

            <footer class="footer">
                <div class="container">
                    <p>&copy; ${CONFIG.app.year} ${CONFIG.app.title}. All rights reserved.</p>
                </div>
            </footer>
        `;
    }

    renderNavigation() {
        const navItems = [
            { id: 'home', name: 'Home', href: 'index.html' },
            ...vehiclesData.map(car => ({
                id: car.id,
                name: car.name,
                href: `#${car.id}`
            }))
        ];

        return navItems.map(item => `
            <li class="nav-item">
                <a href="${item.href}" class="nav-link ${this.currentPage === item.id ? 'active' : ''}" 
                   data-page="${item.id}">${item.name}</a>
            </li>
        `).join('');
    }

    renderContent() {
        if (this.currentPage === 'home') {
            return this.renderHomePage();
        } else {
            const vehicle = vehiclesData.find(v => v.id === this.currentPage);
            if (vehicle) {
                return this.renderVehicleDetail(vehicle);
            } else {
                return this.renderHomePage();
            }
        }
    }

    renderHomePage() {
        return `
            <h2 class="page-title">Featured Cars</h2>
            <p class="page-subtitle">Discover our collection of premium vehicles</p>
            
            <div class="cars-grid">
                ${vehiclesData.map(car => `
                    <div class="car-card" data-car-id="${car.id}">
                        <img src="${car.image_url.replace('w=800&h=400', 'w=400&h=300')}" 
                             alt="${car.name}" class="car-image">
                        <div class="car-info">
                            <h3 class="car-name">${car.name}</h3>
                            <p class="car-description">${car.description.substring(0, 80)}...</p>
                            <button class="view-details-btn" data-car-id="${car.id}">View Details</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderVehicleDetail(vehicle) {
        return `
            <div class="car-detail">
                <img src="${vehicle.image_url}" alt="${vehicle.name}" class="car-detail-image">
                <div class="car-detail-info">
                    <h2 class="car-detail-title">${vehicle.name}</h2>
                    <p class="car-detail-description">${vehicle.description}</p>
                    
                    <div class="car-specs">
                        <div class="spec-item">
                            <div class="spec-label">Engine</div>
                            <div class="spec-value">${vehicle.specs.engine}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Power</div>
                            <div class="spec-value">${vehicle.specs.power}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">0-60 mph</div>
                            <div class="spec-value">${vehicle.specs.acceleration}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Range</div>
                            <div class="spec-value">${vehicle.specs.range}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Top Speed</div>
                            <div class="spec-value">${vehicle.specs.topSpeed}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Price</div>
                            <div class="spec-value">$${vehicle.price.toLocaleString()}</div>
                        </div>
                    </div>
                    
                    <a href="index.html" class="back-btn" data-action="back">← Back to Home</a>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link[data-page]')) {
                e.preventDefault();
                const pageId = e.target.getAttribute('data-page');
                this.navigateToPage(pageId);
            }
        });

        // Handle car card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.car-card[data-car-id]')) {
                const carId = e.target.closest('.car-card').getAttribute('data-car-id');
                this.navigateToPage(carId);
            }
        });

        // Handle view details button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.view-details-btn[data-car-id]')) {
                e.stopPropagation();
                const carId = e.target.getAttribute('data-car-id');
                this.navigateToPage(carId);
            }
        });

        // Handle back button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.back-btn[data-action="back"]')) {
                e.preventDefault();
                this.navigateToPage('home');
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.currentPage = this.getCurrentPage();
            this.renderPage();
        });
    }

    navigateToPage(pageId) {
        if (pageId === 'home') {
            window.history.pushState({}, '', 'index.html');
        } else {
            window.history.pushState({}, '', `#${pageId}`);
        }
        
        this.currentPage = pageId;
        this.renderPage();
        
        // Track navigation
        if (typeof trackPageView === 'function') {
            trackPageView();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CarShowcaseApp();
});
