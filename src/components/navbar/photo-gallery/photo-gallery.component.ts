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
      src: 'assets/graduation.png',
      alt: 'Barbara at design conference',
    },
    {
      id: 2,
      src: 'assets/barb.JPG',
      alt: 'Working on a project',
    },
    {
      id: 3,
      src: 'assets/moderatingevent.png',
      alt: 'Speaking at tech event',
    },
    {
      id: 4,
      src: 'assets/moderating.png',
      alt: 'Speaking at tech event',
    },
    {
      id: 5,
      src: 'assets/networking.png',
      alt: 'Design workshop',
    },
    {
      id: 6,
      src: 'assets/dekutmarketing.png',
      alt: 'Dekut Marketing',
    },
    {
      id: 7,
      src: 'assets/customerservice.png',
      alt: 'Customer service',
    },
    {
      id: 8,
      src: 'assets/mentorship.png',
      alt: 'Mentorship',
    },
    {
      id: 9,
      src: 'assets/dataafrica.png',
      alt: 'Data Africa Event at Dekut',
    },
    {
      id: 10,
      src: 'assets/team.png',
      alt: 'Team of Developers',
    },
  ];

  // Duplicate images for infinite scroll effect
  get allImages() {
    return [...this.galleryImages, ...this.galleryImages];
  }
}