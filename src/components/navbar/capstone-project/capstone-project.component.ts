import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
}

interface Document {
  id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-capstone-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capstone-project.component.html',
  styleUrls: ['./capstone-project.component.css']
})
export class CapstoneProjectComponent {
  activeTab: 'videos' | 'documents' = 'videos';
  selectedVideo: Video | null = null;

  videos: Video[] = [
    {
      id: 'video1',
      title: 'Digi-Mirror Presentation - English',
      description: 'Empowering everyday people to discover, design, and own their digital identity with confidence.',
      url: 'YOUR_VIDEO_URL_1'
    },
    {
      id: 'video2',
      title: 'Digi-Mirror Presentation - Kiswahili',
      description: 'Kuwapa nguvu watu wa kawaida kugundua, kubuni, na kumiliki utambulisho wao wa kidijitali kwa ujasiri.',
      url: 'YOUR_VIDEO_URL_2'
    },
    {
      id: 'video3',
      title: 'African Culture Aspect - English',
      description: 'Exploring how centuries of African symbolic communication shapes modern UI/UX and graphic design principles.',
      url: 'YOUR_VIDEO_URL_3'
    },
    {
      id: 'video4',
      title: 'African Culture Aspect - Kiswahili',
      description: 'Kuchunguza jinsi mawasiliano ya alama za Kiafrika ya karne nyingi yanavyounda kanuni za kisasa za UI/UX na kubuni michoro.',
      url: 'YOUR_VIDEO_URL_4'
    },
    {
      id: 'video5',
      title: 'Photographic Essay - English',
      description: 'This digital gap impacts education quality, entrepreneurial opportunities, healthcare access, and social mobility, leaving entire communities behind in an increasingly connected world.',
      url: 'YOUR_VIDEO_URL_5'
    },
    {
      id: 'video6',
      title: 'Photographic Essay - Kiswahili',
      description: 'Pengo hili la kidijitali linaathiri ubora wa elimu, fursa za ujasiriamali, upatikanaji wa huduma za afya, na uhamaji wa kijamii, na kuacha jamii nzima nyuma katika ulimwengu unaoongezeka kuunganishwa.',
      url: 'YOUR_VIDEO_URL_6'
    }
  ];

  documents: Document[] = [
    {
      id: 'doc1',
      title: 'CV - English Version',
      description: 'Complete curriculum vitae in English',
      type: 'PDF',
      url: 'YOUR_ENGLISH_CV_URL',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc2',
      title: 'CV - French Version',
      description: 'Curriculum vitae complet en français',
      type: 'PDF',
      url: 'YOUR_FRENCH_CV_URL',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc3',
      title: 'Project Proposal',
      description: 'Initial project proposal and scope definition',
      type: 'PDF',
      url: 'YOUR_DOCUMENT_URL_3',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc4',
      title: 'Technical Documentation',
      description: 'Complete technical documentation and API references',
      type: 'PDF',
      url: 'YOUR_DOCUMENT_URL_4',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc5',
      title: 'Research Paper',
      description: 'Academic research paper and literature review',
      type: 'PDF',
      url: 'YOUR_DOCUMENT_URL_5',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc6',
      title: 'User Manual',
      description: 'End-user guide and documentation',
      type: 'PDF',
      url: 'YOUR_DOCUMENT_URL_6',
      icon: 'fa-file-pdf'
    },
    {
      id: 'doc7',
      title: 'Source Code Repository',
      description: 'Complete source code and project files',
      type: 'ZIP',
      url: 'YOUR_DOCUMENT_URL_7',
      icon: 'fa-file-archive'
    },
    {
      id: 'doc8',
      title: 'Final Report',
      description: 'Comprehensive final project report and evaluation',
      type: 'PDF',
      url: 'YOUR_DOCUMENT_URL_8',
      icon: 'fa-file-pdf'
    }
  ];

  setActiveTab(tab: 'videos' | 'documents') {
    this.activeTab = tab;
  }

  openVideo(video: Video) {
    this.selectedVideo = video;
  }

  closeVideo() {
    this.selectedVideo = null;
  }

  downloadDocument(doc: Document) {
    // Implement download logic
    window.open(doc.url, '_blank');
  }
}