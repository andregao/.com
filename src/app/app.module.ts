import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // only for registering svg icon
    // AppRoutingModule,
    SharedModule,
    HomeModule,
    CoreModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg')
    );
  }
}
