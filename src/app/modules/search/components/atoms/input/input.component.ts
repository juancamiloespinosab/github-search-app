import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from '@modules/search/services/request.service';
import { debounceTime, filter, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';

  inputForm = new FormControl('');
  inputChangeSubscription!: Subscription
  

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.onInputChange();
  }

  onInputChange() {
    this.inputChangeSubscription = this.inputForm.valueChanges
      .pipe(
        debounceTime(500),
        filter((query: string) => query?.length >= 3),
        tap(async (query: string) => {
          await this.requestService.searchUsers(encodeURIComponent(query))
          this.clearQuery();
        })
      )
      .subscribe();
  }

  clearQuery() {
    this.inputForm.reset();
  }

  ngOnDestroy() {   
    this.inputChangeSubscription.unsubscribe();
  }

}
