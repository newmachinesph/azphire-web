# Azphire Web

![License: MIT](https://img.shields.io/badge/license-MIT-green) ![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

Marketing site for Azphire, a remote work platform that connects Filipino professionals with remote jobs and employers. Includes landing page, jobs listing, pricing, about, contact, help, and legal pages, plus interactive registration and employer wizard demos.

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

Optional: set `NEXT_PUBLIC_APP_URL` to point sign-up and login links at your own app instance.

## Structure

- `src/app/` - App Router pages (about, contact, employers, help, jobs, pricing, privacy, terms, cookies)
- `src/components/` - landing sections, wizard demos, and `ui/` primitives
- `src/lib/` - SEO metadata and utilities

## License

MIT. See [LICENSE](LICENSE).
