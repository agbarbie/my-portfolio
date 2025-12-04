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
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/1Ba4plSoewNAeWkKkxvJ_ajF8_xDTbkLd?usp=drive_link';
    link.download = 'MY Resume.docx';

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