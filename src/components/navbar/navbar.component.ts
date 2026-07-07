import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {
  isMenuOpen = false;
  scrolled = false;
  activeSection: string = '';

  navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experiences' },
    { name: 'Education & Certificates', href: '#certifications' },
    { name: 'Capstone Project', href: '#capstone-project' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;

    // Detect active section while scrolling
    for (const link of this.navLinks) {
      const section = document.querySelector(link.href) as HTMLElement;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeSection = link.href;
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    // Remove the # if it exists
    const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
    
    // Find the element
    const element = document.getElementById(id);
    
    if (element) {
      // Get navbar height for offset
      const navbarHeight = 80; // Adjust this if your navbar has a different height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${id}" not found. Make sure the section exists in your HTML.`);
    }
    
    this.isMenuOpen = false; // close mobile nav after click
  }
}