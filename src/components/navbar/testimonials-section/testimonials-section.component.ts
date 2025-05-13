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
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Barbara transformed our digital presence completely. Her design skills combined with technical expertise delivered a website that exceeded our expectations and significantly improved our conversion rates.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director, Innovate Solutions',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Working with Barbara was a game-changer for our marketing campaigns. Her strategic approach and creative designs helped us stand out in a competitive market. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, StyleHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Barbara has an exceptional eye for design and a deep understanding of user experience. She created a beautiful, functional e-commerce platform that our customers love navigating.',
    },
  ];
}