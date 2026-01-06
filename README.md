# NPL Coder LMS

A Learning Management System built with Next.js, designed to provide an intuitive platform for online learning.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database:** [Neon](https://neon.tech/) (Serverless PostgreSQL)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)
- A [Clerk](https://clerk.com/) account (for authentication)
- A [Neon](https://neon.tech/) account (for database)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nplcoderlms
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory by copying the example below:

```bash
cp .env.example .env
```

Add the following environment variables to your `.env` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database (Neon PostgreSQL)
DATABASE_URL=your_neon_database_connection_string
```

#### Getting Your API Keys

**Clerk:**
1. Sign up at [clerk.com](https://clerk.com/)
2. Create a new application
3. Copy the **Publishable Key** and **Secret Key** from your dashboard

**Neon Database:**
1. Sign up at [neon.tech](https://neon.tech/)
2. Create a new project
3. Copy the **Connection String** from your dashboard (use the pooled connection for serverless)

### 4. Set Up the Database

Push the database schema to your Neon database:

```bash
npx drizzle-kit push
```

To view and manage your database with Drizzle Studio:

```bash
npx drizzle-kit studio
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code linting |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Project Structure

```
nplcoderlms/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (sign-in, sign-up)
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── workspace/         # Workspace pages (courses, settings)
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable UI components
├── config/                # Database configuration and schema
│   ├── db.jsx            # Database connection
│   └── schema.js         # Drizzle ORM schema
├── context/              # React Context providers
├── lib/                  # Utility functions
├── public/               # Static assets
└── middleware.js         # Clerk authentication middleware
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run `npm run format` to format your code
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Clerk Documentation](https://clerk.com/docs) - Learn about authentication with Clerk
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview) - Learn about Drizzle ORM
- [Neon Documentation](https://neon.tech/docs) - Learn about Neon serverless PostgreSQL
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS

## Deployment

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository
2. Import your project to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
