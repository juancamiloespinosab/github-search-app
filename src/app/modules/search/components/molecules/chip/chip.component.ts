import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'molecule-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

  @Input() label: string = 'Chip';
  @Input() icon!: string;
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
