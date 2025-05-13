import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Send, MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Github } from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactSectionComponent {
  // Icons
  sendIcon = Send;
  mapPinIcon = MapPin;
  phoneIcon = Phone;
  mailIcon = Mail;
  linkedinIcon = Linkedin;
  twitterIcon = Twitter;
  instagramIcon = Instagram;
  githubIcon = Github;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  onSubmit() {
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;

      // Reset form after success
      setTimeout(() => {
        this.submitSuccess = false;
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, 3000);
    }, 1500);
  }
}