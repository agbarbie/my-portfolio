import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Calendar, GraduationCap, BookOpen } from 'lucide-angular';
import { Certification } from '../../../Interfaces/certifications';
import { Education } from '../../../Interfaces/Education';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './certifications-section.component.html',
  styleUrls: ['./certifications-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificationsSectionComponent {
  // Icons
  externalLinkIcon = ExternalLink;
  calendarIcon = Calendar;
  graduationCapIcon = GraduationCap;
  bookOpenIcon = BookOpen;

  certifications: Certification[] = [
    {
      id: 1,
      title: 'Software Development Certificate',
      organization: 'Teach2Give',
      date: '2025',
      image: 'assets/softwaredevcert.jpg',
      link: 'https://drive.google.com/file/d/1bHnlxAIRpY53elZq-WRFXyh0VugFIXOQ/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Data Science Hackathon Certificate',
      organization: 'DSAIC',
      date: '2023',
      image: 'assets/dsaiccert.jpg',
      link: 'https://drive.google.com/file/d/1SDx-kg9jdeW7DnXK36pj_1XJ52T67Wkf/view?usp=sharing',
    },
    {
      id: 3,
      title: 'Networking Certification',
      organization: 'Dedan Kimathi University',
      date: '2022',
      image: 'assets/netcert.jpg',
      link: 'https://drive.google.com/file/d/1xRchY9lnluGnNYfENA0izmi__noi28eJ/view?usp=sharing',
    },
    {
      id: 4,
      title: 'Figma UI/UX Design Certification',
      organization: 'Brait Academy',
      date: '2022',
      image: 'assets/brait.png',
      link: 'https://drive.google.com/file/d/1c1nkQz3jULLrLNFzjU8nQGrVK_I_JUMF/view?usp=sharing',
    },
  ];

  education: Education[] = [
    {
      id: 1,
      degree: 'Software Engineering and QA-QE ',
      institution: 'Teach2give',
      location: 'Nyeri, Kenya',
      years: '2025 - 2026',
      description: 'Focused on software development.',
    },
    {
      id: 2,
      degree: 'Bachelor of Business and Technology',
      institution: 'Dedan Kimathi University of Technology',
      location: 'Nyeri, Kenya',
      years: '2022 - 2025',
      description: 'Focused on software development and web technologies. Graduated with second-class honors.',
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Kyondoni Girls High School',
      location: 'Kabati,Kitui County',
      years: '2017-2021',
      description: 'I did two Sciences: Biology and Chemistry and Computer. I did very well in my KCSE and attained a grade B',
    },
  ];
}