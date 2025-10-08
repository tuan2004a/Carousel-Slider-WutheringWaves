# Carousel Slider Resonators - Wuthering Waves

Carousel Slider Resonators showcases the characters (Resonators) from Wuthering Waves, presented in a smooth and visually appealing carousel animation.

## 💻 Technologies Used
- **Next.js**: A React framework for server-rendered applications.
- **JSON Server**: A simple way to create a mock REST API.
- **TailwindCSS**: A utility-first CSS framework for building responsive, modern UIs.

## ⚙️ System Requirements
- Node.js >= 16.x
- pnpm ≥ 8.x

## 🚀 Installation and Usage

1. **Clone the project:**
   ```bash
   git clone <repo-url>
   cd Carousel-Slider-DuetNightAbyss
   ```

2. **Install dependencies:**
   ```bash
    pnpm install
   ```

3. **Start JSON Server:**
   ```bash
    pnpm run json
   ```
    JSON Server will run at: [http://localhost:3001]

4. **Run the Next.js:**
   ```bash
    pnpm dev
   ```

5. **Access the application:**
   Open your web browser and navigate to: [http://localhost:3000]

---

## 🗂️ Project Structure
```
CAROUSEL-SLIDER-DUETNIGHTABYSS/
├── .next/                      # Next.js build output (auto-generated)
├── app/                        # Main application entry (App Router)
│   ├── favicon.ico
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout for all pages
│   └── page.tsx                # Main page component
│
├── components/                 # Reusable UI components
│   ├── CarouselSlider/         # Core carousel slider component
│   └── common/                 # Shared UI elements (buttons, backgrounds)
│       ├── BtnArrow.tsx
│       └── BackGround.tsx
│
├── config/                     # App configuration files
│   └── axiosInstance.ts        # Axios setup for API requests
│
├── context/                    # React Context for global state
│   └── CharacterContext.tsx
│
├── db/                         # Local mock database
│   └── db.json                 # Character data for JSON Server
│
├── public/                     # Static assets (images, icons, etc.)
│
├── service/                    # API and data fetching logic
│   └── CharacterService.ts
│
├── store/                      # State management (e.g., Zustand, Redux)
│   └── slice/
│       └── CharacterSlice.ts
│
├── types/                      # TypeScript interfaces and types
│   └── CharacterTypes.ts
│
├── .gitignore
├── eslint.config.mjs
├── lightswind.d.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json

```

## 📚 References
- [Next.js Documentation](https://nextjs.org/docs)
- [JSON Server](https://github.com/typicode/json-server)
- [TailwindCSS](https://tailwindcss.com/docs)
