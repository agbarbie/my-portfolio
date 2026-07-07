import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../Interfaces/experience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'experiences.component.html',
  styleUrls: ['experiences.component.css'],
})
export class ExperiencesSectionComponent {
  experiences: Experience[] = [
    {
      id: 1,
      position: 'Barbz & Co.Creative ',
      company: 'Self-employed',
      location: 'Kenya (Remote & On-site)',
      startDate: '2023',
      endDate: 'Present',
      current: true,
      description:
        'Offering freelance graphic design and branding services to startups, clubs,and small businesses.',
      responsibilities: [
        'Designed marketing materials and brand identities for various clients including student clubs and businesses',
        'Created visually compelling posters, logos, UI mockups, and social media content',
        'Worked closely with clients to understand their vision and deliver custom graphic solutions',
        'Contributed to the branding and promotional design for the Data Science and Analysis Club at Dedan Kimathi University',
      ],
    },
    {
      id: 2,
      position: 'Software Developer',
      company: 'Teach2Give',
      location: 'On-Site',
      startDate: 'Feb 2025',
      endDate: 'Apr 2025',
      current: false,
      description:
        'Worked as a Software Developer attaché, contributing to full-stack development and quality assurance processes within an agile team environment.',
      responsibilities: [
        'Developed and implemented application features within an agile development environment',
        'Built and maintained frontend components using Angular and backend services with Express',
        'Conducted testing and debugging to identify issues and improve system performance and reliability',
        'Collaborated with team members through code reviews to ensure clean, maintainable, and efficient code',
        'Applied problem-solving and analytical skills to meet project deadlines and deliver high-quality solutions',
      ],
    },
    {
      id: 3,
      position: 'Graphic Designer & Creative',
      company: 'Ngao Labs',
      location: 'Remote',
      startDate: 'August 2025',
      endDate: 'Present',
      current: true,
      description:
        'Worked as a graphic designer and creative contributor, focusing on visual content and branding projects.',
      responsibilities: [
        'Designed and produced visual content for various digital platforms',
        'Collaborated with cross-functional teams to develop branding strategies',
        'Participated in brainstorming sessions to generate innovative design ideas',
        'Ensured consistency in brand messaging across all visual materials',
      ],
    },
    {
      id: 4,
      position: 'University Marketing & Mentorship Volunteer',
      company: 'Dedan Kimathi University of Technology',
      location: 'Nyeri, Kenya',
      startDate: '2021',
      endDate: '2022',
      description:
        'Assisted in student outreach and mentorship initiatives as part of university programs.',
      responsibilities: [
        'Supported the university marketing team in organizing events and student engagement campaigns',
        'Participated in mentorship and career talks, encouraging students in tech and design fields',
        'Promoted the university brand through coordinated student ambassador roles',
        'Helped bridge communication between administration and students on academic and career topics',
      ],
    },
    {
      id: 5,
      position: 'Web Developer',
      company: 'SoftGrowthTech',
      location: 'Remote',
      startDate: 'Jan 2026',
      endDate: 'Mar 2026',
      current: false,
      description:
        'Developed and maintained web applications using modern frontend and backend technologies.',
      responsibilities: [
        'Developed and maintained web applications using modern frontend and backend technologies',
        'Built scalable APIs and integrated databases to support application functionality',
        'Collaborated with cross-functional teams to deliver high-quality digital solutions',
      ],
    },
    {
      id: 6,
      position: 'Frontend Developer',
      company: 'TrueMinds',
      location: 'Remote',
      startDate: 'Jan 2026',
      endDate: 'Mar 2026',
      current: false,
      description:
        'Designed and developed responsive user interfaces, implementing UI/UX best practices.',
      responsibilities: [
        'Designed and developed responsive user interfaces using modern frontend frameworks',
        'Implemented UI/UX best practices to improve user experience and accessibility',
        'Worked closely with designers and backend developers to deliver seamless applications',
      ],
    },
  ];
}
