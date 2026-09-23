# NO2V Learning Hub

A simple classroom portal for students, teachers, and administrators built with Next.js and Tailwind CSS.

## Features

- Student-specific login and profiles
- Teacher dashboard with access to all students
- Assignment workspace with submissions
- Warm-up video library powered by Vimeo embeds
- Simple design with a light green NO2V theme

## Demo login credentials

- Teacher: `teacher@no2v.com` / `password123`
- Student 1: `student1@no2v.com` / `password123`
- Student 2: `student2@no2v.com` / `password123`
- Admin: `admin@no2v.com` / `password123`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Notes

This is a working MVP prototype designed for collaboration and future integration with Supabase or another backend provider.

## Project purpose

This app was designed to help:

- students log in under their own profile
- see only the assignments assigned to them
- access a shared warm-up video library
- submit text, image, or video-based work
- receive teacher feedback
- allow teachers to review all students from one dashboard

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Next steps

- Add real authentication using Supabase Auth
- Store assignments and submissions in a database
- Add teacher feedback and grade tracking
- Add admin controls for creating classes and users
- Support file uploads for student submissions

**School name:** NO2V
**Theme:** light green
