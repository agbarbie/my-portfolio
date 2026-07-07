import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../app/chatbot.service';
import { ChatMessage } from '../../Interfaces/chatbot';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewInit {
  @ViewChild('chatMessages') chatMessages!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLInputElement>;

  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;
  isLoading = false;
  errorMessage = '';

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    } else {
      // Add welcome message
      this.isLoading = true;
      setTimeout(() => {
        this.messages.push({
          id: 0,
          text: "👋 Hi there! I'm Barbara's virtual assistant. How can I help you today? Type 'contact' to reach Barbara directly.",
          isUser: false,
          timestamp: new Date()
        });
        this.isLoading = false;
        this.saveMessages();
      }, 500); // Simulate loading delay
    }
  }

  ngAfterViewInit() {
    // Focus input when chat opens
    if (this.isOpen && this.chatInput) {
      this.chatInput.nativeElement.focus();
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        this.scrollToBottom();
        if (this.chatInput) {
          this.chatInput.nativeElement.focus();
        }
      }, 100);
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) {
      this.errorMessage = 'Please type a message.';
      setTimeout(() => (this.errorMessage = ''), 2000);
      return;
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: this.messages.length + 1,
      text: this.newMessage,
      isUser: true,
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    const sentMessage = this.newMessage;
    this.newMessage = '';
    this.isTyping = true;
    this.scrollToBottom();
    this.saveMessages();

    // Check for contact form trigger
    if (sentMessage.toLowerCase().includes('contact')) {
      this.isTyping = false;
      this.messages.push({
        id: this.messages.length + 1,
        text: "To contact Barbara, please use the contact form on this page. Would you like me to guide you to it?",
        isUser: false,
        timestamp: new Date()
      });
      this.scrollToBottom();
      this.saveMessages();
      return;
    }

    // Get response from service
    this.chatbotService.processMessage(sentMessage).subscribe({
      next: (response) => {
        this.isTyping = false;
        this.messages.push(response);
        this.scrollToBottom();
        this.saveMessages();
      },
      error: (error) => {
        this.isTyping = false;
        this.errorMessage = 'Oops, something went wrong. Please try again later.';
        this.messages.push({
          id: this.messages.length + 1,
          text: this.errorMessage,
          isUser: false,
          timestamp: new Date()
        });
        this.scrollToBottom();
        this.saveMessages();
        setTimeout(() => (this.errorMessage = ''), 3000);
      }
    });
  }

  saveMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }

  scrollToBottom() {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {}
  }

formatTime(date: any): string {
  const realDate = new Date(date); 
  return realDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

}