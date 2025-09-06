import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectType } from '../../services/project';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit{
  projectData?: ProjectType;
  loader: boolean = true;

  constructor(private route: ActivatedRoute, private projectService: Project) {}
  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    if(projectId) {
        this.projectService.getProjectById(projectId).subscribe(p => {
        this.projectData = p;
        this.loader = false;
      });
    }
  }

}
