import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DummyTasks } from './dummy-tasks'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input() name?: string;
    @Input() id?: string;
    @Output() addNewTask = new EventEmitter<boolean>();
    
    tasks = DummyTasks;

    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.id )
    }

    onCompleteTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id != id);
    }

    addTask() {
        this.addNewTask.emit(true);
    }
}
