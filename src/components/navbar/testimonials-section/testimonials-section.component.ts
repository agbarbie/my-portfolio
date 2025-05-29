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
      name: 'Joshua Musau',
      position: 'CEO, bluedigital',
      image: 'assets/Josh.jpg',
      quote: 'Barbara was exceptional in her delivery. She was efficient, disciplined, punctual and competent in the management of her work. She went over and above the call of duty to deliver the solution we had requested of her. Her understanding of the design component was excellent and concise and she delivered well above our expectation. I unreservedly recommend Barbara Wangui for any technological design work such as branding and/or web design.',
    },
    {
      id: 3,
      name: 'Paul Wamocha',
      position: 'Mentor & Digital Skill Trainer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Barbbara Wangui is standout creative with exceptional skill in AI-Empowered design. I had the pleasure to mentoring her at DEKUT, where she consistently turned knowledge into action-delivering high-quality work under tight deadlines and impressing top clients like Ajinit Agency and Yaya Pizzeria. She has proof that AI is empowering young creatives, and I am proud of the profesional she is becoming.',
    },
  ];
}