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
  /**
   * Handles the resume download functionality
   */
  downloadResume(): void {
  
    const resumeUrl = 'assets/CURRICULUM VITAE1 2.docx'; // Update with the correct path to your resume file
    

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'https://docs.google.com/document/d/12Z0QSdcycU0X6UVHV0nDe5RXZejLtEx7/edit?usp=sharing&ouid=103354002324122913916&rtpof=true&sd=true'; // Specify the desired file name
    
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