import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface ProjectType {
  id: string,
  title: string,
  description: string,
  tech: string[],
  link?: string,
  image?: string
}

@Injectable({
  providedIn: 'root'
})
export class Project {
  private url = 'assets/project.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectType[]>{
    return this.http.get<ProjectType[]>(this.url); 
  }

  getProjectById(id: number): Observable<ProjectType | undefined > {
    return this.getProjects().pipe(
      map(list => list.find(l => l.id === id.toString()))
    );
  }
}
