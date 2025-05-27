import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/interfaces/applications.interface';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  applications: Application[] = [];
  statuses = ['Applied', 'Interviewing', 'Offer', 'Ghosted', 'Rejected', 'Accepted'];
  isModalOpen = false;
  isEditing = false;
  currentApplication!: Application;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applications = this.applicationService.getApplications();
  }

  openModal(application?: Application) {
  this.currentApplication = application ? { ...application } : {
    id: 0,
    role: '',
    company: '',
    contact: '',
    type: '',
    mode: '',
    link: '',
    applicationDate: '',
    lastReplyDate: '',
    status: 'Applied'
  };
  this.isEditing = !!application;
  this.isModalOpen = true;
}

saveApplication(application: Application) {
  if (this.isEditing) {
    this.applicationService.updateApplication(application);
  } else {
    this.applicationService.addApplication(application);
  }
  this.applications = this.applicationService.getApplications();
  this.closeModal();
}

closeModal() {
  this.isModalOpen = false;
}


  deleteApplication(applicationId: number) {
    this.applicationService.deleteApplication(applicationId);
    this.applications = this.applicationService.getApplications();
  }
}