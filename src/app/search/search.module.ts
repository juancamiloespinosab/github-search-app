import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { InputComponent } from './components/atoms/input/input.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { AvatarComponent } from './components/molecules/avatar/avatar.component';
import { ChipComponent } from './components/molecules/chip/chip.component';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { CardComponent } from './components/organisms/card/card.component';
import { SearchBoxComponent } from './components/organisms/search-box/search-box.component';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent,
    MainComponent,
    InputComponent,
    IconComponent,
    TextComponent,
    ImageComponent,
    ButtonComponent,
    AvatarComponent,
    ChipComponent,
    SpinnerComponent,
    CardComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
