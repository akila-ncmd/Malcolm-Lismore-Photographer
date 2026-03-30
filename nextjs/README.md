# Malcolm Lismore Photography Website - Next.js

A modern photography portfolio website built with Next.js 14, React, and Tailwind CSS.

## Features

- **Home Page** - Landing page with hero section, gallery preview, and contact form
- **About Page** - Photographer bio and social media links
- **Gallery Page** - Filterable gallery with lightbox viewing
- **Prices Page** - Photography packages and pricing table
- **Inquiry Form** - Customer inquiry form with validation
- **Admin Dashboard** - Protected admin area for managing content
  - Manage Gallery (Add, Edit, Delete images)
  - Manage Prices (CRUD operations)
  - View Inquiries (Filter, View, Delete)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React useState/useEffect
- **Auth**: Simulated auth with localStorage (demo purposes)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs/
├── src/
│   ├── app/
│   │   ├── about/page.tsx       # About page
│   │   ├── admin/
│   │   │   ├── dashboard/      # Admin dashboard
│   │   │   ├── gallery/        # Manage gallery
│   │   │   ├── inquiries/      # View inquiries
│   │   │   ├── login/          # Admin login
│   │   │   └── prices/         # Manage prices
│   │   ├── gallery/page.tsx    # Gallery page
│   │   ├── inquiry/page.tsx    # Inquiry form
│   │   ├── prices/page.tsx     # Prices page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── components/
│       ├── Footer.tsx          # Footer component
│       └── Navbar.tsx          # Navigation component
├── public/
│   └── images/                  # Image assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Admin Login

- **Username**: `admin`
- **Password**: `admin123`

## Note

This is a frontend conversion from the original PHP application. For production use:

1. Add backend API routes for data persistence
2. Connect to a database (PostgreSQL, MongoDB, etc.)
3. Implement proper authentication (NextAuth.js, JWT, etc.)
4. Add image upload functionality with cloud storage (S3, Cloudinary, etc.)
5. Set up proper environment variables

## License

All rights reserved © Malcolm Lismore Photography