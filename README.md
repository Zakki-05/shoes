# AURELIUS & CO.

> **Premium 3D Men's Footwear E-Commerce Experience**
>
> *"Crafted to Make an Entrance — The New Standard of Men's Footwear."*

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald)](https://github.com/Zakki-05/shoes)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R186-black)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Bespoke-gold)](#)

A high-end luxury e-commerce experience combining European editorial aesthetics with a real-time **Three.js / React Three Fiber** 3D product engine, **Google OAuth 2.0 User Authentication**, and an architecture ready for backend integration with **FastAPI** and **MySQL**.

---

## 🌟 Key Features & Experience

- **Interactive 3D Hero Scene**: Parametric PBR leather geometry, studio spotlight lighting, smooth cursor lerp tracking, and depth-of-field background silhouettes.
- **3D Product Craft Studio (`<Product3DViewer />`)**: 360-degree OrbitControls rotation, zoom, real-time finish swatch switching, GLTF `.glb` model support, and parametric fallback.
- **25 Footwear Product Categories**: Comprehensive catalog covering Loafers, Oxfords, Derbys, Monk Straps, Boots, Premium Sneakers, and Velvet Slippers.
- **Google OAuth 2.0 User Authentication**: Secure SSO sign-in/up via `@react-oauth/google` with JWT decoding, user session persistence, and client dropdown menu.
- **Account & Orders Dashboard**: User profile details, verified Google credentials, and order history tracking with status stages.
- **Refined Search Overlay**: Real-time query search, keyboard `ESC` shortcut, recent search history, and instant 3D inspection launcher.
- **Bespoke Shoe Sizing Guide (`SizeGuideModal.jsx`)**: UK, EU, US, CM chart with measurement instructions (*"Measure from heel to longest toe"*).
- **Verified Client Reviews (`CustomerReviews.jsx`)**: Rating breakdowns and customer feedback cards.
- **Trust Bar (`TrustSection.jsx`)**: Free shipping policy, 14-day easy returns, 256-Bit SSL payment security, and quality guarantee.
- **Multi-Step Checkout & Printable Invoice (`OrderConfirmation.jsx`)**: Reference code generation (`AUR-XXXXXX`), address details, payment selection, and printable order receipt.
- **Custom Desktop Cursor (`CustomCursor.jsx`)**: Physics-based cursor lerp with hover states (`360°`, `VIEW`), automatically disabled on mobile and under `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Core Framework**: React 19, Vite 8, React Router DOM v7
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Authentication**: `@react-oauth/google`, `jwt-decode`
- **Styling**: Tailwind CSS v4, Custom Theme System (`#0B0B0B`, `#151515`, `#F4EFE7`, `#C7A46A`), Google Fonts (*Cinzel*, *Cormorant Garamond*, *Plus Jakarta Sans*)
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React

---

## 🏗️ Architecture & Service Layer

```
src/
 ├── assets/
 ├── components/
 │    ├── Hero3D/
 │    │    ├── HeroSection.jsx        # Hero container with scroll & mouse lerp
 │    │    ├── HeroUI.jsx             # Luxury typography overlay & action CTAs
 │    │    ├── ParametricShoe.jsx     # High-precision PBR leather shoe model
 │    │    ├── ShoeScene.jsx          # Three.js Canvas with sparkles & rig
 │    │    ├── StudioLighting.jsx     # Studio key spotlight & ground shadows
 │    │    └── FloatingSilhouette.jsx # Depth-of-field background silhouettes
 │    ├── Product3DViewer.jsx         # Reusable 3D viewer (GLTF + Parametric)
 │    ├── Interactive3DViewer.jsx     # Full-screen 360° inspector modal
 │    ├── CustomCursor.jsx            # Lerp custom cursor with 3D hover states
 │    ├── SizeGuideModal.jsx          # Sizing conversion chart modal
 │    ├── CustomerReviews.jsx         # Verified customer reviews component
 │    ├── TrustSection.jsx            # Policy assurance trust bar
 │    ├── LoginModal.jsx              # Google OAuth 2.0 sign-in modal
 │    ├── CartDrawer.jsx              # Slide-out cart with free shipping bar
 │    ├── WishlistDrawer.jsx          # Saved items drawer
 │    ├── SearchModal.jsx             # Real-time search with ESC key listener
 │    ├── Navbar.jsx                  # Header with user avatar dropdown
 │    ├── ProductCard.jsx             # Product card with 3D view trigger
 │    ├── CategorySection.jsx         # Range of excellence category grid
 │    ├── FeaturedCollection.jsx      # Curated tabbed footwear grid
 │    ├── BrandStorySection.jsx       # Goodyear welt craft pillars
 │    ├── EditorialSection.jsx        # Magazine lookbook section
 │    ├── Newsletter.jsx              # Email subscription form with validation
 │    ├── LoadingScreen.jsx           # Preloader animation (0 -> 100%)
 │    └── Footer.jsx                  # Footer with SHOP, HELP, COMPANY, SOCIAL
 ├── config/
 │    └── brand.js                    # Centralized brand identity configuration
 ├── context/
 │    └── ShopContext.jsx             # State provider (Cart, Wishlist, User, Modals)
 ├── data/
 │    └── products.js                 # 25 footwear categories & product dataset
 ├── pages/
 │    ├── Home.jsx                    # Homepage
 │    ├── Shop.jsx                    # Catalog page with filter sidebar
 │    ├── ProductDetails.jsx          # Details page with 3D viewer, reviews & guide
 │    ├── Collections.jsx             # Curated capsule portfolios
 │    ├── About.jsx                   # Brand story & welt process narrative
 │    ├── Account.jsx                 # User profile & order history dashboard
 │    ├── Checkout.jsx                # Multi-step checkout form
 │    └── OrderConfirmation.jsx       # Printable order receipt & tracking
 ├── services/
 │    ├── api.js                      # Centralized REST API endpoints (FastAPI/Django)
 │    ├── authService.js              # Google OAuth token verification service
 │    ├── productService.js           # Product catalog & query service
 │    ├── cartService.js              # Cart state & total calculation service
 │    ├── wishlistService.js          # Wishlist persistence service
 │    └── orderService.js            # Order placement & reference service
 ├── App.jsx                          # Router & global providers
 └── index.css                        # CSS theme variables & typography
```

---

## ⚡ Environment Variables

Create a `.env` file in the root directory:

```env
# Google OAuth 2.0 Client ID (https://console.cloud.google.com)
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com

# Backend API Base URL (FastAPI / Django API)
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## 🔌 API Endpoints Specification (Backend Readiness)

The frontend API layer is pre-wired for seamless integration with a **FastAPI / Django / MySQL** backend:

- `POST /api/v1/auth/google/verify` — Verify Google OAuth credential token
- `GET /api/v1/products` — Fetch filtered product catalog
- `GET /api/v1/products/:id` — Fetch single product detail
- `POST /api/v1/orders` — Create order & return reference ID (`AUR-XXXXXX`)

---

## 🚀 How to Run the Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🏷️ Recommended GitHub Topics

`react` • `threejs` • `react-three-fiber` • `vite` • `ecommerce` • `tailwindcss` • `gsap` • `framer-motion` • `google-oauth` • `3d` • `footwear` • `fashion`

---

## 📜 License

Created for **AURELIUS & CO.** Luxury Footwear. All rights reserved.
