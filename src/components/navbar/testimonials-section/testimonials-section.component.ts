import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Quote } from 'lucide-angular';
import { Testimonial } from '../../../Interfaces/testimonials';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsSectionComponent {
  // Icons
  quoteIcon = Quote;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'assets/images/placeholder.jpg',
      quote: 'Barbara transformed our digital presence completely. Her design skills combined with technical expertise delivered a website that exceeded our expectations and significantly improved our conversion rates.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director, Innovate Solutions',
      image: 'assets/images/placeholder.jpg',
      quote: 'Working with Barbara was a game-changer for our marketing campaigns. Her strategic approach and creative designs helped us stand out in a competitive market. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, StyleHub',
      image: 'assets/images/placeholder.jpg',
      quote: 'Barbara has an exceptional eye for design and a deep understanding of user experience. She created a beautiful, functional e-commerce platform that our customers love navigating.',
    },
  ];
}