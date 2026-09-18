# Iglesia La Familia del Rey

A full-stack church website developed for Iglesia La Familia del Rey. The platform provides visitors with information about church services, ministries, upcoming events, sermons, giving, and live streams, while providing administrators with tools to manage website content without modifying the source code.

## Features

- Responsive design for desktop and mobile devices
- Dynamic church events
- Latest sermon section with YouTube integration
- Live stream status and configurable live stream URL
- Secure administrator authentication
- Administrative dashboard
- Event creation and deletion
- Sermon management
- Image uploads and cloud storage
- Dynamic content stored in PostgreSQL
- Giving integration
- Church ministries and service information

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js Server Actions
- Next.js API Routes
- Prisma
- PostgreSQL

### Services
- Neon — PostgreSQL database hosting
- UploadThing — Image storage and uploads
- Auth.js — Administrator authentication

### Development
- Git
- GitHub
- VS Code

## Admin Dashboard

The website includes a protected administrative dashboard that allows authorized users to manage dynamic website content.

Administrators can:

- Enable or disable the LIVE indicator
- Configure the live stream URL
- Create and delete upcoming events
- Upload event images
- Update the latest sermon
- Upload sermon cover images

Authentication is required before accessing administrative functionality.

## Project Architecture

The application uses a full-stack Next.js architecture.

The public website retrieves dynamic content through API routes, while administrative operations are handled securely on the server.

PostgreSQL is used for persistent data storage, Prisma provides database access, and UploadThing handles image storage.

## Database

The application stores information for:

- Site settings and live stream status
- Events
- Latest sermon information

Database credentials and other sensitive configuration values are stored using environment variables and are not included in the repository.

## Environment Variables

The application requires environment variables for:

- PostgreSQL database connection
- Authentication
- Administrator credentials
- UploadThing

Create a `.env.local` file and configure the required credentials before running the project.

> Never commit `.env.local` or private credentials to the repository.

## Running Locally

Install dependencies:

```bash
npm install