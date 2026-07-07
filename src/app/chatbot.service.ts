import { Injectable } from '@angular/core';
import { ChatMessage } from '../Interfaces/chatbot';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messageId = 0;

  constructor() { }

  processMessage(userMessage: string): Observable<ChatMessage> {
    const response = this.generateResponse(userMessage);

    return of({
      id: ++this.messageId,
      text: response,
      isUser: false,
      timestamp: new Date()
    }).pipe(delay(1000)); 
  }

  private generateResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm Barbara's virtual assistant. How can I assist you today?";
    }

    if (message.includes('experience') || message.includes('work')) {
      return "Barbara has hands-on experience as a freelance Graphic Designer since 2023 and served as a Software Developer and QA Attaché at Teach2Give in 2025. She's also contributed to university marketing and mentorship initiatives.";
    }

 if (message.includes('skills') || message.includes('what can you do')) {
  return "Barbara is skilled in Graphic Design, UI/UX, Web & App Development, Digital Marketing, and Data Analysis. She works with tools like Figma, Adobe Creative Suite, Angular, Express, PostgreSQL, Pandas, Matplotlib, NumPy, Scikit-learn, and more.";
}
    if (message.includes('tools') || message.includes('software')) {
      return "Barbara uses tools like Figma, Adobe Creative Suite, HTML/CSS, JavaScript, React, Node.js, Angular, Express, Python, Pandas, Matplotlib, Scikit-learn, and NumPy.";
    }

    if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
      return "You can reach Barbara via email at barbarawangui2002@gmail.com or call her at +254 705 524 140. She's open to freelance, collaborative, and full-time opportunities.";
    }

    if (message.includes('project') || message.includes('portfolio')) {
      return "Barbara has worked on branding campaigns, responsive websites, the SkillmatchesAI platform, and promotional material for tech clubs. Check the Projects section to explore her work.";
    }

    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "Barbara holds a Bachelor of Science in Business and Information Technology from Dedan Kimathi University of Technology.";
    }

    if (message.includes('location') || message.includes('where')) {
      return "Barbara is based in Kenya and collaborates with clients remotely and in-person.";
    }

    if (message.includes('thank')) {
      return "You're welcome! Feel free to ask anything else about Barbara.";
    }

    return "I'm not sure I understand. You can ask me about Barbara's skills, experience, projects, education, or how to get in touch with her.";
  }
}
