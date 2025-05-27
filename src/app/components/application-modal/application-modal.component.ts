import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Application } from 'src/app/interfaces/applications.interface';

@Component({
  selector: 'app-application-modal',
  templateUrl: './application-modal.component.html',
  styleUrls: ['./application-modal.component.css']
})
export class ApplicationModalComponent {
  @Input() application!: Application;
  @Input() isModalOpen = false;
  @Input() statuses: string[] = [];

  @Output() save = new EventEmitter<Application>();
  @Output() close = new EventEmitter<void>();

  saveApplication() {
    this.save.emit(this.application);
  }

  closeModal(){
    this.close.emit();
  }

}
