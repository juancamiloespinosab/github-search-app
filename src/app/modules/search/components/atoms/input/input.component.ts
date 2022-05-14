import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, Subscription, tap } from 'rxjs';

const DEBOUNCE_TIME = 500;
const MIN_CHARS_TO_EMIT_VALUE = 3;

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Output() inputChangesEvent: EventEmitter<string> = new EventEmitter<string>();

  inputForm = new FormControl('');
  inputChangeSubscription!: Subscription


  constructor(

  ) { }

  ngOnInit(): void {
    this.onInputChange();
  }

  onInputChange() {
    this.inputChangeSubscription = this.inputForm.valueChanges
      .pipe(
        debounceTime(DEBOUNCE_TIME),
        filter((value: string) => value?.length >= MIN_CHARS_TO_EMIT_VALUE),
        tap(async (value: string) => {
          this.inputChangesEvent.emit(encodeURIComponent(value));
        })
      )
      .subscribe();
  }

  clearInput() {
    this.inputForm.reset('', { onlySelf: true, emitEvent: false })
  }

  ngOnDestroy() {
    this.inputChangeSubscription.unsubscribe();
  }

}
