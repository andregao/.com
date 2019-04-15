import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
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

