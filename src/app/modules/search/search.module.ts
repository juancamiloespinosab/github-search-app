import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { InputComponent } from './components/atoms/input/input.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { ChipComponent } from './components/molecules/chip/chip.component';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { CardComponent } from './components/molecules/card/card.component';
import { SearchBoxComponent } from './components/molecules/search-box/search-box.component';
import { SearchComponent } from './search.component';
import { NgxContextModule } from 'ngx-context';
import { GridComponent } from './components/organisms/grid/grid.component';
import { SharedModule } from '../shared/shared.module';
import { MainTitleComponent } from './components/atoms/main-title/main-title.component';


@NgModule({
  declarations: [
    SearchComponent,
    MainComponent,
    InputComponent,
    IconComponent,
    TextComponent,
    ButtonComponent,
    AvatarComponent,
    ChipComponent,
    SpinnerComponent,
    CardComponent,
    SearchBoxComponent,
    GridComponent,
    MainTitleComponent,
  ],
  imports: [
    CommonModule,
    NgxContextModule,
    SharedModule
  ]
})
export class SearchModule { }
