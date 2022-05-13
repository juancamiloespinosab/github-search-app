import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { SharingService } from '@core/services/app/sharing.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'organism-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @ViewChild('container') container!: ElementRef;
  users$: Observable<User[]>;
  usersSubscription!: Subscription;

  constructor(
    public sharingService: SharingService
  ) {
    this.users$ = sharingService.searchingObservable;
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.usersSubscription = this.users$.subscribe(() => {
      this.container.nativeElement.scrollTop = 0;
    })
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
