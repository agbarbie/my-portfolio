import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class ChatbotComponent implements OnInit {
  @ViewChild('chatMessages') chatMessages!: ElementRef;
  
  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;
  
  constructor(private chatbotService: ChatbotService) { }
  
  ngOnInit() {
    // Add welcome message
    this.messages.push({
      id: 0,
      text: "👋 Hi there! I'm Barbara's virtual assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    });
  }
  
  toggleChat() {
    this.isOpen = !this.isOpen;
    
    if (this.isOpen) {
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }
  
  sendMessage() {
    if (!this.newMessage.trim()) return;
    
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
    
    // Show typing indicator
    this.isTyping = true;
    this.scrollToBottom();
    
    // Get response from service
    this.chatbotService.processMessage(sentMessage).subscribe(response => {
      this.isTyping = false;
      this.messages.push(response);
      this.scrollToBottom();
    });
  }
  
  scrollToBottom() {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) { }
  }
  
  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}