import { Injectable } from '@angular/core';
import { Application } from '../interfaces/applications.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications: Application[] = [];
  private nextId = 1;

  getApplications(): Application[] {
    return [...this.applications];
  }

  addApplication(application: Application): void {
    application.id = this.nextId++;
    this.applications = [...this.applications, application];
  }

  updateApplication(updatedApplication: Application): void {
    this.applications = this.applications.map(app =>
      app.id === updatedApplication.id ? updatedApplication : app
    );
  }

  deleteApplication(applicationId: number): void {
    this.applications = this.applications.filter(app => app.id !== applicationId);
  }
  constructor() { }
}
