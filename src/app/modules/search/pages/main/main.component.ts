import { Component, OnInit } from '@angular/core';
import { SearchService } from '@core/services/api/search.service';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private search: SearchService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
    let res = await this.search.getUsers({
      q: 'juancamilo'
    })
  }

}
