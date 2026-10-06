# AURELIUS & CO.

> **Premium 3D Men's Luxury Footwear E-Commerce Experience**

A luxury men's footwear fashion house website featuring a real-time **Three.js / React Three Fiber** 3D product engine, **Google OAuth 2.0 User Authentication**, and an architecture ready for backend integration with **FastAPI** and **MySQL**.

---

## 🌟 Key Features

- **Interactive 3D Hero Scene**: Parametric PBR leather geometry, studio lighting, smooth cursor lerp tracking, and depth-of-field background silhouettes.
- **3D Product Craft Studio (`<Product3DViewer />`)**: 360-degree OrbitControls rotation, zoom, real-time finish swatch switching, GLTF `.glb` model support, and parametric fallback.
- **25 Footwear Product Categories**: Comprehensive catalog covering Loafers, Oxfords, Derbys, Monk Straps, Boots, Premium Sneakers, and Velvet Slippers.
- **Google OAuth 2.0 User Authentication**: Secure SSO sign-in/up via `@react-oauth/google` with JWT decoding, user session persistence, and client dropdown menu.
- **Account & Orders Dashboard**: User profile details, verified Google credentials, and order history tracking with status stages.
- **Slide-Out Luxury Cart Drawer**: Free shipping threshold progress bar, item modifiers, subtotal calculation, and checkout navigation.
- **Refined Search Overlay**: Real-time query search, keyboard `ESC` shortcut, recent search history, and instant 3D inspection launcher.
- **Bespoke Multi-Step Checkout**: Order reference generation (`AUR-XXXXXX`), address details, payment selection, and printable order invoice.
- **Custom Desktop Cursor**: Physics-based cursor lerp with hover states (`360°`, `VIEW`), automatically disabled on mobile and under `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Core**: React 19, Vite 8, React Router DOM v7
- **3D Engine**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Authentication**: `@react-oauth/google`, `jwt-decode`
- **Styling**: Tailwind CSS v4, Glassmorphism, Google Fonts (*Cinzel*, *Cormorant Garamond*, *Plus Jakarta Sans*)
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
 │    ├── LoginModal.jsx              # Google OAuth 2.0 sign-in modal
 │    ├── CartDrawer.jsx              # Slide-out cart with free shipping bar
 │    ├── WishlistDrawer.jsx          # Saved items drawer
 │    ├── SearchModal.jsx             # Real-time search with ESC key listener
 │    ├── Navbar.jsx                  # Header with user avatar dropdown
 │    ├── ProductCard.jsx             # Product card with 3D view trigger
 │    ├── CategorySection.jsx         # Range of excellence category grid
 │    ├── FeaturedCollection.jsx      # Curated tabbed footwear grid
 │    ├── BrandStorySection.jsx       # 4 Goodyear welt craft pillars
 │    ├── EditorialSection.jsx        # Magazine lookbook section
 │    ├── Newsletter.jsx              # VIP trunk show membership form
 │    ├── LoadingScreen.jsx           # Preloader animation (0 -> 100%)
 │    └── Footer.jsx                  # Footer with warranty & currency toggle
 ├── config/
 │    └── brand.js                    # Centralized brand identity configuration
 ├── context/
 │    └── ShopContext.jsx             # State provider (Cart, Wishlist, User, Modals)
 ├── data/
 │    └── products.js                 # 25 footwear categories & product dataset
 ├── pages/
 │    ├── Home.jsx                    # Homepage
 │    ├── Shop.jsx                    # Catalog page with filter sidebar
 │    ├── ProductDetails.jsx          # Details page with 3D viewer & specs
 │    ├── Collections.jsx             # Curated capsule portfolios
 │    ├── About.jsx                   # Atelier story & 200-step welt narrative
 │    ├── Account.jsx                 # User profile & order history dashboard
 │    ├── Checkout.jsx                # Multi-step checkout form
 │    └── OrderConfirmation.jsx       # Printable order receipt & tracking
 ├── services/
 │    ├── api.js                      # Centralized REST API endpoints (FastAPI/Django)
 │    └── authService.js              # Google OAuth token verification service
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

The frontend API layer ([api.js](file:///d:/shoes/src/services/api.js)) is pre-wired to connect to a FastAPI or Django REST backend:

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

## 📜 License

Created for **AURELIUS & CO.** Luxury Footwear. All rights reserved.
