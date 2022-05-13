import { Component, OnInit } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { SearchService } from '@core/services/api/search.service';
import { SharingService } from '@core/services/app/sharing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users$: Observable<User[]>;
  title: string = 'GitHub Search';

  constructor(
    public sharingService: SharingService
  ) {
    this.users$ = sharingService.searchingObservable;
  }

  ngOnInit(): void {

  }

}
