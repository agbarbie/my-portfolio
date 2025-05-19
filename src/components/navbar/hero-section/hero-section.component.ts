import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSectionComponent {

  downloadResume(): void {
  
    const resumeUrl = 'assets/CURRICULUM VITAE1 2.docx'; 
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1ZiyhaRaKpKhB0Y2ccjpARrrkrxGy2L-_/view?usp=sharing';
    link.download = 'CURRICULUM VITAE1 2.docx'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  viewProjects(): void {
    
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      
      window.location.href = '#projects';
    }
  }
}