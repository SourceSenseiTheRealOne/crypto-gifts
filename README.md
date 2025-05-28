# Crypto Gifts Landing Page

A modern, responsive landing page for the Crypto Gifts platform built with React, TypeScript, and TailwindCSS. The website showcases the platform's gift-giving and reward structure system with interactive animations and a sleek design.

## 🚀 Features

- **Modern Design**: Sleek, responsive interface with dark mode
- **Interactive Animations**: Powered by Framer Motion for smooth transitions
- **Key Sections**:
  - Hero section with call-to-action
  - Features showcase
  - How It Works explanation
  - System Overview
  - Distribution information
  - Potential Profits breakdown
  - Video Testimonials
  - FAQ section
  - Newsletter subscription with Supabase integration

## 🛠️ Technologies Used

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Supabase
- Lucide Icons

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd crypto-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── SystemExplanation.tsx
│       ├── Distribution.tsx
│       ├── PotentialProfits.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── Newsletter.tsx
├── lib/
│   └── supabase.ts
├── styles/
│   └── globals.css
└── App.tsx
```

## 🎨 Customization

The website uses TailwindCSS for styling. You can customize the theme by modifying the `tailwind.config.js` file. The primary and secondary colors, along with other design tokens, can be adjusted there.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens

## 🔒 Security

- Environment variables are used for sensitive data
- Supabase handles secure newsletter subscriptions
- No sensitive information is exposed in the frontend

## 📄 License

[Add your license information here]

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
