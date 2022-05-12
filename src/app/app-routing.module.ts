import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@modules/search/pages/main/main.component';
import { SearchComponent } from '@modules/search/search.component';

const routes: Routes = [
  {
    path: 'main',
    component: SearchComponent
  },

  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
