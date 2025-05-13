import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink } from 'lucide-angular';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PhotoGalleryComponent],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutSectionComponent {
  // Icons
  externalLinkIcon = ExternalLink;
}