import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { SharingService } from '@core/services/app/sharing.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = 'GitHub Search';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  users$: Observable<User[]>;
  usersSubscription!: Subscription;

  constructor(
    public sharingService: SharingService
  ) {
    this.users$ = sharingService.searchingObservable;
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    this.usersSubscription = this.users$.subscribe(data => {
      this.scrollContainer.nativeElement.scrollTop = 0;
    })
  }

  ngOnDestroy() {
    console.log(333);
    
    this.usersSubscription.unsubscribe();
  }

}
