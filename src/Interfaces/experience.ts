export interface Experience {
    id: number;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    description: string;
    responsibilities: string[];
  }