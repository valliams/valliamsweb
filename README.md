# Valliams Technologies Website

AI-Powered Product Engineering for High-Growth SaaS Startups.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Nodemailer** (contact form)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Configuration

### Calendly

Replace the Calendly URL in these files with your actual booking link:

- `components/Header.tsx`
- `components/Hero.tsx`
- `components/FinalCTA.tsx`
- `components/Footer.tsx` (Blog section link)
- `app/contact/page.tsx`

Default placeholder: `https://calendly.com/valliams-tech/strategy-call`

### Contact Form (Email)

1. Copy `.env.example` to `.env`
2. Add your SMTP credentials (Gmail, SendGrid, etc.)
3. Set `CONTACT_EMAIL` to your inbox

## Structure

- `app/` – Pages, layout, API routes
- `components/` – Reusable UI components
- `app/globals.css` – Design tokens, Tailwind theme, animations

## Pages

- `/` – Home (all sections)
- `/contact` – Contact form
- `/privacy` – Privacy policy
- `/terms` – Terms of service
