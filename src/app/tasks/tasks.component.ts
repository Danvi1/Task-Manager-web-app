import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DummyTasks } from './dummy-tasks'
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input() name?: string;
    @Input() userId!: string;
    isAddingTask = false;
    
    tasks = DummyTasks;

    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.userId )
    }

    onCompleteTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id != id);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask(){
        this.isAddingTask = false;
    }

    addNewTask(taskData: NewTaskData){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: this.userId?.toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate : taskData.date
        });
        this.isAddingTask = false;
    }
}
