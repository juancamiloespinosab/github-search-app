import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from '@modules/search/services/request.service';
import { debounceTime, filter, map, tap } from 'rxjs';

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';

  inputForm = new FormControl('');

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.onInputChange();
  }

  onInputChange() {
    this.inputForm.valueChanges
      .pipe(
        debounceTime(500),
        filter((query: string) => query !== '' && query.length >= 3),
        tap((query: string) => this.requestService.searchUsers({ q: query }))
      )
      .subscribe();
  }

}
