
import { Course } from './types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'web-dev-01',
    title: 'Full Stack Web Development',
    description: 'Master modern web development using MongoDB, Express, React, and Node.js (MERN).',
    duration: '6 Months',
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Deployment'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'digital-mkt-01',
    title: 'Digital Marketing Specialist',
    description: 'Learn SEO, SEM, social media strategy, and data analytics to grow businesses online.',
    duration: '3 Months',
    skills: ['SEO', 'Content Marketing', 'Google Ads', 'Social Media', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'graphic-design-01',
    title: 'Professional Graphic Design',
    description: 'Design stunning visuals, logos, and branding using industry-standard tools.',
    duration: '4 Months',
    skills: ['Adobe Photoshop', 'Illustrator', 'UI/UX Principles', 'Branding', 'Typography'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'english-lang-01',
    title: 'Business English & Communication',
    description: 'Enhance your professional communication skills and excel in corporate environments.',
    duration: '2 Months',
    skills: ['Public Speaking', 'Email Writing', 'Grammar', 'Presentation', 'Interview Prep'],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800'
  }
];

export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'password123'
};
