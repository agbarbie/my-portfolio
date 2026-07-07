import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../Interfaces/skills';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsSectionComponent {
 

  designSkills: Skill[] = [
    { name: "UI/UX Design", icon: "figma", level: 90 },
    { name: "Graphic Design", icon: "palette", level: 85 },
    { name: "Brand Identity", icon: "layers", level: 80 },
  ];

  developmentSkills: Skill[] = [
    { name: "Front-end Development", icon: "code", level: 85 },
    { name: "Back-end Development", icon: "database", level: 75 },
    { name: "Responsive Design", icon: "smartphone", level: 90 },
  ];

  marketingSkills: Skill[] = [
    { name: "Customer Service", icon: "search", level: 80 },
    { name: "Email Marketing", icon: "mail", level: 85 },
    { name: "Mentoring Students", icon: "mail", level: 90 }, // Reused icon since "high school" isn't available
  ];

  dataSkills: Skill[] = [
    { name: "Data Analysis", icon: "activity", level: 85 },
    { name: "Model Training (Python)", icon: "cpu", level: 80 },
  ];

 tools: string[] = [
  "Adobe Creative Suite",
  "Figma",
  "Canva",
  "HTML/CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Angular",
  "Express",
  "Python",
  "Pandas",
  "Matplotlib",
  "Scikit-learn",
  "NumPy"
];

}
