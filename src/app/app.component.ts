
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,RouterOutlet} from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { AboutSectionComponent } from 'src/components/navbar/about-section/about-section.component';
import { CertificationsSectionComponent } from 'src/components/navbar/certifications-section/certifications-section.component';
import { ContactSectionComponent } from 'src/components/navbar/contact-section/contact-section.component';
import { FooterComponent } from 'src/components/navbar/footer/footer.component';
import { HeroSectionComponent } from 'src/components/navbar/hero-section/hero-section.component';
import { PhotoGalleryComponent } from 'src/components/navbar/photo-gallery/photo-gallery.component';
import { ProjectsSectionComponent } from 'src/components/navbar/projects-section/projects-section.component';
import { SkillsSectionComponent } from 'src/components/navbar/skills-section/skills-section.component';
import { TestimonialsSectionComponent } from 'src/components/navbar/testimonials-section/testimonials-section.component';
import { ChatbotComponent } from 'src/components/chatbot/chatbot.component';
import { ExperiencesSectionComponent } from 'src/components/experiences/experiences.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent,AboutSectionComponent,CertificationsSectionComponent,ContactSectionComponent,FooterComponent,HeroSectionComponent,PhotoGalleryComponent,ProjectsSectionComponent,SkillsSectionComponent,TestimonialsSectionComponent,ExperiencesSectionComponent,ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
