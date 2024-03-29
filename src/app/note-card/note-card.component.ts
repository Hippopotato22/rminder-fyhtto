import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent  implements OnInit {
  createFolder() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() {}

}
