import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { type User } from './user.model';

// type User = {
//     id: string;
//     name: string;
//     avatar: string;
// };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
    // //  below commented code are use of signals
    // avatar = input.required<string>();
    // name = input.required<string>();
    // id = input.required<string>();
    // // select = output<string>();
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) name!: string;
    // @Input({ required: true }) id!: string;

    // making all the user input to object
    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath(){
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser(){
        console.log("clicked");
        this.select.emit(this.user.id);
    }
}
