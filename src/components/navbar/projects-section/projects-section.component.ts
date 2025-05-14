import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, ArrowRight } from 'lucide-angular';
import { Project } from '../../../Interfaces/project';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsSectionComponent {
  // Icons
  externalLinkIcon = ExternalLink;
  arrowRightIcon = ArrowRight;

  activeCategory = 'all';

  categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'design', name: 'Design' },
    { id: 'development', name: 'Development' },
    { id: 'marketing', name: 'Marketing' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
      image: 'assets/eccomerce.webp',
      category: 'design',
      technologies: ['Figma'],
      link: '#',
    },
    {
      id: 2,
      title: 'Social Media Banners',
      description: 'Comprehensive social media strategy that increased engagement by 150% across platforms.',
      image: 'assets/socialmediabanner.png',
      category: 'design',
      technologies: ['Figma'],
      link: '#',
    },
    {
      id: 3,
      title: 'Movie Business Poster',
      description: 'User interface design for a fitness tracking mobile application with a focus on accessibility.',
      image: 'assets/movieposter2.jpg',
      category: 'design',
      technologies: ['Figma'],
      link: 'https://www.figma.com/design/qatVMoBvW6Hqxen6iSee6x/Untitled?node-id=0-1&t=fjA1lMbYBDQGRid0-1',
    },
    {
      id: 4,
      title: 'Twiter Clone',
      description: 'This is a Twitter clone built with Angular, showcasing real-time updates and user interactions.',
      image: 'assets/twitter.png',
      category: 'development',
      technologies: ['Angular'],
      link: 'https://twitterclone-neon-alpha.vercel.app/',
    },
    {
      id: 5,
      title: 'T-shirt Branding',
      description: 'Strategic email campaign that achieved a 35% open rate and 12% conversion rate.',
      image: 'assets/dsaic.jpg',
      category: 'design',
      technologies: ['Figma'],
      link: 'https://www.figma.com/design/4O8DvnlQa4IDfzxkWIJtg0/Untitled?node-id=0-1&t=mwcWALNVXmbumhqj-1',
    },
    {
      id: 6,
      title: 'Ajinit logo',
      description: 'Logo design for Ajinit, a tech startup focusing on innovative solutions.',
      image: 'assets/ajinitlogo.png',
      category: 'design',
      technologies: ['Figma', 'Canva'],
      link: 'https://www.figma.com/design/VJ2WZYPstbTCLlUbXSHcci/Untitled?t=CDC1lgAYF59zeku9-1',
    },
    {
      id: 7,
      title: 'SkillmatchesAI',
      description: 'SkillmatchesAI is a platform that connects job seekers with potential employers using AI technology.',
      image: 'assets/ux.png',
      category: 'design',
      technologies: ['Figma'],
      link: 'https://www.figma.com/design/Q3Ebw0lt2RFGrTCgURwqDB/Untitled?node-id=0-1&t=CDC1lgAYF59zeku9-1',
    },
    {
      id: 8,
      title: 'The Art of Joy',
      description: 'The Art of Joy is a design project that focuses on creating joyful and engaging user experiences.',
      image: 'assets/joy.png',
      category: 'design',
      technologies: ['Figmma'],
      link: 'https://www.figma.com/design/eMtn6nCQUdr4ZPScdL8Lp7/Screenshot-2025-01-23-075408?node-id=0-1&t=CnMsKUepGXRW0eMr-1',
    },
    {
      id: 9,
      title: 'Buisiness Posters',
      description: 'Business posters designed for various marketing campaigns, focusing on visual appeal and clarity.',
      image: 'assets/business.jpg',
      category: 'design',
      technologies: ['Figma'],
      link: 'https://www.figma.com/design/9wITAAxedYVmzcxYAr7mHf/Untitled?node-id=0-1&t=ToiNgHNsmJxBvSYv-1',
    },
    {
      id: 10,
      title: 'Mareting Dekut at Nairobi School',
      description: 'Marketing campaign for Dekut at Nairobi School, focusing on student engagement and brand awareness.',
      image: 'assets/dekutmarketing.png',
      category: 'marketing',
      technologies: ['Bronchure','Career Talk'],
      link: '',
    },
     {
      id: 11,
      title: 'Books library',
      description: 'A library management system that allows users to search, borrow, and return books online.',
      image: 'assets/book.png',
      category: 'development',
      technologies: ['Express,Html, Css,Typescript'],
      link: '',
    },
    {
      id: 12,
      title: 'SkillmatchesAI',
      description: 'A library management system that allows users to search, borrow, and return books online.',
      image: 'assets/ux.png',
      category: 'development',
      technologies: ['Express,Angular version 19,Typescript'],
      link: '',
    }
  ];

  get filteredProjects() {
    return this.activeCategory === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getCategoryClass(category: string) {
    if (category === 'design') return 'category-design';
    if (category === 'development') return 'category-development';
    return 'category-marketing';
  }
}