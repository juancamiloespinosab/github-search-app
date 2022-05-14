import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '@modules/search/services/request.service';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'molecule-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @ViewChild(InputComponent) input: InputComponent = new InputComponent();

  viewTexts = {
    label: 'Enter a username',
    placeholder: 'Ex. goku',
    resultsNotFoundFor: 'Results not found for: '
  }

  error: string = '';

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
  }

  async search(query: string) {
    try {
      let response = await this.requestService.searchUsers(encodeURIComponent(query));
      response == 0 ? this.error = `${this.viewTexts.resultsNotFoundFor} ${query}` : this.error = '';

    } catch (error) {
      if (error instanceof HttpErrorResponse) this.error = error.error.message;
    }
    this.input.clearInput();
  }

}
