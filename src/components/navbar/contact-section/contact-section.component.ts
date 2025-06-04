import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  constructor() {
    // Initialize EmailJS with your User ID
    emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS User ID
  }

  async onSubmit() {
    this.isSubmitting = true;

    try {
      // Send email using EmailJS
      const response: EmailJSResponseStatus = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_email: 'barbarawangui2002@gmail.com'
        }
      );

      console.log('Email sent successfully:', response.status, response.text);
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
    } catch (error) {
      console.error('Failed to send email:', error);
      this.isSubmitting = false;
      alert('Failed to send message. Please try again later.');
    }
  }
}