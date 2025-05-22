import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../../Interfaces/testimonials';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsSectionComponent {


  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Johnathan Ndambuki',
      position: 'Head of Teach2give Trainers',
      image: 'assets/joe.jpg',
      quote: 'Working with Barbara Wangui was an excellent experience. I was genuinely impressed by her dedication, technical aptitude, and problem-solving abilities throughout the project. She delivered a clean, functional, and well-designed solution that exceeded expectations. Barbara was professional, communicative, and proactive—often going the extra mile to suggest improvements and ensure the final product was polished and effective. Her commitment to quality and her ability to tackle challenges with confidence truly set her apart. I wouldn’t hesitate to work with her again or recommend her to anyone in need of a skilled and dependable developer.',
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