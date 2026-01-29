import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  videos: Video[] = [
    {
      id: 'video1',
      title: 'Digi-Mirror Presentation - English',
      description: 'Empowering everyday people to discover, design, and own their digital identity with confidence.',
      url: 'https://drive.google.com/file/d/13-oReksiFMBayVzNbAeIU1s6mMtKOutj/preview'
    },
    {
      id: 'video3',
      title: 'African Culture Aspect - English',
      description: 'Exploring how centuries of African symbolic communication shapes modern UI/UX and graphic design principles.',
      url: 'https://drive.google.com/file/d/13GgkY__PbFQEwC0d9fsPAgNInj29EPk-/preview'
    },
    {
      id: 'video5',
      title: 'Photographic Essay - English',
      description: 'This digital gap impacts education quality, entrepreneurial opportunities, healthcare access, and social mobility, leaving entire communities behind in an increasingly connected world.',
      url: 'https://drive.google.com/file/d/13GxfWiizV9iHf1z-DR3SYozpl6IBpPGF/preview'
    },
  ];

  documents: Document[] = [
    {
      id: 'doc1',
      title: 'CV - English Version',
      description: 'Complete curriculum vitae in English',
      type: 'WORD',
      url: 'https://docs.google.com/document/d/1snPXhePyvGmR4dXXbFc8gCZZE9nvyPSS/edit?usp=sharing&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-word'
    },
    {
      id: 'doc2',
      title: 'CV - Kiswahili Version',
      description: 'Curriculum vitae kamili kwa Kiswahili',
      type: 'WORD',
      url: 'https://docs.google.com/document/d/1IfnzJoOMa-qoAkwbodo-ceFe7QMaHh5x/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-word'
    },
    {
      id: 'doc3',
      title: 'Autobiography',
      description: 'My Autobiography',
      type: 'WORD',
      url: 'https://docs.google.com/document/d/1g0DYMwlgqAs_ZXrLdOSDGNLmPBfKkIGH/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-word'
    },
    {
      id: 'doc4',
      title: 'Autobiography Presentation',
      description: 'Complete technical documentation and API references',
      type: 'PPT',
      url: 'https://docs.google.com/presentation/d/1lUiYdpKvLgSQWiiMUWdYNuag7uEEy5tj/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-powerpoint'
    },
    {
      id: 'doc5',
      title: 'Digi-Mirror',
      description: 'Empowering everyday people to discover, design, and own their digital identity with confidence.',
      type: 'PPT',
      url: 'https://docs.google.com/presentation/d/1Szhtb7SjiRnwV6YLftQ3B1IaPk5Uy-IU/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-powerpoint'
    },
    {
      id: 'doc6',
      title: 'African Culture Aspect',
      description: 'Exploring how centuries of African symbolic communication shapes modern UI/UX and graphic design principles.',
      type: 'PPT',
      url: 'https://docs.google.com/presentation/d/1ZMzhuA7o6-n0S1y4It0KNbEMoucrtzG5/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-powerpoint'
    },
    {
      id: 'doc7',
      title: 'Photographic Essay',
      description: 'This digital gap impacts education quality, entrepreneurial opportunities, healthcare access, and social mobility, leaving entire communities behind in an increasingly connected world.',
      type: 'PPT',
      url: 'https://docs.google.com/presentation/d/1OjF_9xZfE9cIguSwAmgbtEB0CfcumNH2/edit?usp=drive_link&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-powerpoint'
    },
    {
      id: 'doc8',
      title: 'Professional Platform Evidences',
      description: 'A compilation of my professional screenshots and links on various platforms.',
      type: 'WORD',
      url: 'https://docs.google.com/document/d/1CptSPHyPizFBFsnoPaTBc3VXL2pBdxK6/edit?usp=sharing&ouid=103354002324122913916&rtpof=true&sd=true',
      icon: 'fa-file-word'
    }
  ];

  setActiveTab(tab: 'videos' | 'documents') {
    this.activeTab = tab;
  }

  openVideo(video: Video) {
    this.selectedVideo = video;
    // Sanitize the URL so Angular trusts it
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
  }

  closeVideo() {
    this.selectedVideo = null;
    this.safeVideoUrl = null;
  }

  getVideoThumbnail(url: string): string {
    // Extract file ID from Google Drive URL
    const match = url.match(/\/d\/([^\/]+)\//);
    if (match && match[1]) {
      const fileId = match[1];
      // Use Google Drive thumbnail API
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
    }
    // Fallback to a default image if URL doesn't match
    return 'assets/default-video-thumb.jpg';
  }

  onImageError(event: any) {
    // Fallback to gradient background if thumbnail fails to load
    event.target.style.display = 'none';
    event.target.parentElement.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(234, 88, 12, 0.3))';
  }

  downloadDocument(doc: Document) {
    window.open(doc.url, '_blank');
  }
}