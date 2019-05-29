import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SafeHtmlPipe } from './safe-html.pipe';

const MATERIALMODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  OverlayModule,
  PortalModule,
  ScrollingModule,
  MatDividerModule,
];

@NgModule({
  declarations: [SlideshowComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MATERIALMODULES
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...MATERIALMODULES
  ],
  entryComponents: [
    SlideshowComponent,
  ]
})
export class SharedModule {
}

