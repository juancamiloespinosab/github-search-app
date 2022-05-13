import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molecule-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  viewTexts = {
    label: 'Enter a username',
    placeholder: 'Ex. goku'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
