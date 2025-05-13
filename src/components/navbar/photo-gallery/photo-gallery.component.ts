import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  // Sample gallery images - replace with your actual images
  galleryImages = [
    {
      id: 1,
      src: 'assets/images/placeholder.jpg',
      alt: 'Barbara at design conference',
    },
    {
      id: 2,
      src: 'assets/images/placeholder.jpg',
      alt: 'Working on a project',
    },
    {
      id: 3,
      src: 'assets/images/placeholder.jpg',
      alt: 'Speaking at tech event',
    },
    {
      id: 4,
      src: 'assets/images/placeholder.jpg',
      alt: 'Design workshop',
    },
    {
      id: 5,
      src: 'assets/images/placeholder.jpg',
      alt: 'Team collaboration',
    },
    {
      id: 6,
      src: 'assets/images/placeholder.jpg',
      alt: 'Award ceremony',
    },
    {
      id: 7,
      src: 'assets/images/placeholder.jpg',
      alt: 'Client meeting',
    },
    {
      id: 8,
      src: 'assets/images/placeholder.jpg',
      alt: 'Creative process',
    },
    {
      id: 9,
      src: 'assets/images/placeholder.jpg',
      alt: 'Portfolio showcase',
    },
    {
      id: 10,
      src: 'assets/images/placeholder.jpg',
      alt: 'Networking event',
    },
  ];

  // Duplicate images for infinite scroll effect
  get allImages() {
    return [...this.galleryImages, ...this.galleryImages];
  }
}