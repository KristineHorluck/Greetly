import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppModule } from './app.module';
import { AppComponent } from '../../../greetly/src/app/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatSlideToggleModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}


