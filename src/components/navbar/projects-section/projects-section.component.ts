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
      image: 'assets/images/placeholder.jpg',
      category: 'design',
      technologies: ['Figma', 'Adobe XD', 'Shopify'],
      link: '#',
    },
    {
      id: 2,
      title: 'Financial Dashboard App',
      description: 'A responsive web application for financial data visualization with real-time updates.',
      image: 'assets/images/placeholder.jpg',
      category: 'development',
      technologies: ['React', 'Node.js', 'Chart.js'],
      link: '#',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Comprehensive social media strategy that increased engagement by 150% across platforms.',
      image: 'assets/images/placeholder.jpg',
      category: 'marketing',
      technologies: ['Instagram', 'Facebook', 'Analytics'],
      link: '#',
    },
    {
      id: 4,
      title: 'Mobile App UI Design',
      description: 'User interface design for a fitness tracking mobile application with a focus on accessibility.',
      image: 'assets/images/placeholder.jpg',
      category: 'design',
      technologies: ['Sketch', 'Principle', 'InVision'],
      link: '#',
    },
    {
      id: 5,
      title: 'Corporate Website Development',
      description: 'Full-stack development of a corporate website with CMS integration and custom features.',
      image: 'assets/images/placeholder.jpg',
      category: 'development',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io'],
      link: '#',
    },
    {
      id: 6,
      title: 'Email Marketing Campaign',
      description: 'Strategic email campaign that achieved a 35% open rate and 12% conversion rate.',
      image: 'assets/images/placeholder.jpg',
      category: 'marketing',
      technologies: ['Mailchimp', 'A/B Testing', 'Copywriting'],
      link: '#',
    },
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