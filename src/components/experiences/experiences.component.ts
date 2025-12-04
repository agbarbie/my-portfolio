import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../Interfaces/experience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'experiences.component.html',
  styleUrls: ['experiences.component.css']
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
      description: 'Offering freelance graphic design and branding services to startups, clubs,and small businesses.',
      responsibilities: [
        'Designed marketing materials and brand identities for various clients including student clubs and businesses',
        'Created visually compelling posters, logos, UI mockups, and social media content',
        'Worked closely with clients to understand their vision and deliver custom graphic solutions',
        'Contributed to the branding and promotional design for the Data Science and Analysis Club at Dedan Kimathi University'
      ]
    },
    {
      id: 2,
      position: 'Software Developer & QA Attaché',
      company: 'Teach2Give',
      location: 'Remote',
      startDate: 'Feb 2025',
      endDate: 'Apr 2025',
      current: false,
      description: 'Worked as a software engineering and quality assurance attaché, contributing to full-stack development tasks and project quality.',
      responsibilities: [
        'Implemented features and performed testing in an agile team setting',
        'Contributed to both frontend and backend development using Angular and Express',
        'Participated in code reviews and debugging tasks to improve platform stability',
        'Applied problem-solving skills to help meet project deadlines and quality standards'
      ]
    },
    {
      id: 3,
      position: 'Graphic Designer & Creative',
      company: 'Ngao Labs',
      location: 'Remote',
      startDate: 'August 2025',
      endDate: 'Present',
      current: true,
      description: 'Worked as a graphic designer and creative contributor, focusing on visual content and branding projects.',
      responsibilities: [
        'Designed and produced visual content for various digital platforms',
        'Collaborated with cross-functional teams to develop branding strategies',
        'Participated in brainstorming sessions to generate innovative design ideas',
        'Ensured consistency in brand messaging across all visual materials'
      ]
    },
    {
      id: 4,
      position: 'University Marketing & Mentorship Volunteer',
      company: 'Dedan Kimathi University of Technology',
      location: 'Nyeri, Kenya',
      startDate: '2021',
      endDate: '2022',
      description: 'Assisted in student outreach and mentorship initiatives as part of university programs.',
      responsibilities: [
        'Supported the university marketing team in organizing events and student engagement campaigns',
        'Participated in mentorship and career talks, encouraging students in tech and design fields',
        'Promoted the university brand through coordinated student ambassador roles',
        'Helped bridge communication between administration and students on academic and career topics'
      ]
    }
  ];
}
