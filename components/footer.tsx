import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs block'>
            &copy; 2024 - {new Date().getFullYear()} All rights reserved.CSS.
        </small>
        <p className='text-xs'><span className='font-semibold'>About This Website:</span> built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email, Resend & Vercel hosting</p>
    </footer>
  )
}
