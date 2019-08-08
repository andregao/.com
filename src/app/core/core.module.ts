import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinksComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LinksComponent,
  ]
})
export class CoreModule {
}
