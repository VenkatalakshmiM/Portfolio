import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project, ProjectType } from '../../services/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ RouterLink ],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {
/**
 * variable to store the project details
 */
  projectData: ProjectType[] =[];
  /**
   * Loader implementation
   */
  loader: boolean = true;

  constructor(private projectService: Project) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: data => { 
        this.projectData = data;
        this.loader = false;
      },
      error: () => {
        this.loader = true;
       }
    });
  }

  ngOnDestroy() {
    
  } 

}
