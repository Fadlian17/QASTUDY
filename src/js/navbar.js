// Mobile Navbar Component - Vanilla JavaScript
// Usage: Include this script in your HTML file

function initializeNavbar() {
    // Create navbar HTML structure
    const navbarHTML = `
        <!-- NAVBAR CONTAINER -->
        <div class="navbar-container">
            <!-- SIDEBAR -->
            <aside class="sidebar" id="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-logo">
                        <svg class="nav-icon" viewBox="0 0 24 24">
                            <path d="M12 2L2 7V12C2 16.5 6 20 12 20C18 20 22 16.5 22 12V7L12 2Z"></path>
                        </svg>
                        <span>QA Dashboard</span>
                    </div>
                </div>

                <nav>
                    <ul class="sidebar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link active" onclick="navigatePage('overview')">
                                <div class="nav-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
                                        <path d="M9 22V12H15V22"></path>
                                    </svg>
                                </div>
                                <span class="nav-label">Overview</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="navigatePage('capacity')">
                                <div class="nav-icon">
                                    <svg viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                        <path d="M16 2V6"></path>
                                        <path d="M8 2V6"></path>
                                        <path d="M3 10H21"></path>
                                        <path d="M8 14H8.01"></path>
                                        <path d="M12 14H12.01"></path>
                                        <path d="M16 14H16.01"></path>
                                    </svg>
                                </div>
                                <span class="nav-label">Capacity</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link" onclick="navigatePage('settings')">
                                <div class="nav-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"></path>
                                    </svg>
                                </div>
                                <span class="nav-label">Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <!-- OVERLAY -->
            <div class="navbar-overlay" id="navbarOverlay" onclick="closeNavbar()"></div>

            <!-- TOP HEADER (Mobile) -->
            <header class="navbar-top-header" id="topHeader">
                <div class="navbar-header-content">
                    <span class="navbar-title" id="navbarTitle">Dashboard</span>
                </div>
                <button class="navbar-hamburger" id="hamburgerBtn" onclick="toggleNavbar()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </div>
    `;

    const navbarCSS = `
        /* ===== NAVBAR RESPONSIVE STYLES ===== */
        .navbar-container {
            display: flex;
            position: relative;
        }

        /* SIDEBAR */
        .sidebar {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 280px;
            padding: 20px 0;
            position: fixed;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 999;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar-header {
            padding: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 20px;
        }

        .sidebar-logo {
            font-size: 1.5em;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .sidebar-nav {
            list-style: none;
            padding: 0 10px;
        }

        .nav-item {
            margin: 8px 0;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
            border-left: 4px solid transparent;
        }

        .nav-link:hover {
            background: rgba(255, 255, 255, 0.15);
            border-left-color: rgba(255, 255, 255, 0.5);
            color: white;
        }

        .nav-link.active {
            background: rgba(255, 255, 255, 0.25);
            border-left-color: white;
            color: white;
            font-weight: 600;
        }

        .nav-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .nav-icon svg {
            stroke: currentColor;
            stroke-width: 2;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .nav-label {
            font-size: 0.95em;
            font-weight: 500;
        }

        /* TOP HEADER - Mobile */
        .navbar-top-header {
            background: white;
            border-bottom: 1px solid #e0e0e0;
            padding: 16px 20px;
            display: none;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
            width: 100%;
        }

        .navbar-header-content {
            display: flex;
            align-items: center;
            flex: 1;
        }

        .navbar-title {
            font-size: 1.2em;
            font-weight: 600;
            color: #333;
        }

        .navbar-hamburger {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
            justify-content: center;
        }

        .navbar-hamburger span {
            width: 24px;
            height: 2.5px;
            background: #667eea;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        .navbar-hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .navbar-hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .navbar-hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        /* OVERLAY */
        .navbar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 98;
            cursor: pointer;
        }

        .navbar-overlay.open {
            display: block;
        }

        /* MAIN CONTENT */
        .main-content {
            flex: 1;
            margin-left: 280px;
            width: calc(100% - 280px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 1024px) {
            .sidebar {
                width: 240px;
            }

            .main-content {
                margin-left: 240px;
                width: calc(100% - 240px);
            }
        }

        @media (max-width: 768px) {
            .sidebar {
                width: 280px;
                transform: translateX(-100%);
                box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
            }

            .sidebar.open {
                transform: translateX(0);
            }

            .navbar-top-header {
                display: flex;
            }

            .main-content {
                margin-left: 0;
                width: 100%;
            }

            .navbar-container {
                flex-direction: column;
            }
        }

        @media (max-width: 480px) {
            .sidebar {
                width: 100%;
            }
        }
    `;

    return {
        html: navbarHTML,
        css: navbarCSS
    };
}

// Toggle mobile navbar
function toggleNavbar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('navbarOverlay');

    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
}

// Close navbar
function closeNavbar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('navbarOverlay');

    sidebar.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('open');
}

// Navigate to page
function navigatePage(page) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.closest('.nav-link').classList.add('active');

    // Close menu on mobile
    if (window.innerWidth <= 768) {
        closeNavbar();
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeNavbar();
    }
});

// Initialize navbar on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Navbar initialized');
});
