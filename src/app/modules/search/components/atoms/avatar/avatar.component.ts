import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() imageUrl: string = '@assets/placeholder.png'
  imageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
