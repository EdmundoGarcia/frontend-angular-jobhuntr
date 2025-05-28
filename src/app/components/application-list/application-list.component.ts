import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/interfaces/applications.interface';

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
  modalTitle: string = 'Add Application'; // Added variable for modal title

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.fetchApplications();
  }

  fetchApplications() {
    this.applicationService.getApplications().subscribe(apps => {
      this.applications = apps;
    });
  }

  openModal(application?: Application) {
    if (application) {
        this.modalTitle = 'Edit Application';
        this.currentApplication = { ...application };
        this.isEditing = true;
    } else {
        this.modalTitle = 'Add Application';
        const nextId = this.applications.length 
            ? Math.max(...this.applications.map(app => app.id)) + 1 
            : 1;
        this.currentApplication = {
            id: nextId,
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
        this.isEditing = false;
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveApplication() {
    if (this.isEditing) {
      this.applicationService.updateApplication(this.currentApplication).subscribe(() => {
        this.fetchApplications();
      });
    } else {
      this.applicationService.addApplication(this.currentApplication).subscribe(() => {
        this.fetchApplications();
      });
    }
    this.closeModal();
  }

  deleteApplication(applicationId: number) {
    if (confirm('Are you sure you want to delete this application?')) {
      this.applicationService.deleteApplication(applicationId).subscribe(() => {
        this.fetchApplications();
      });
    }
  }
}