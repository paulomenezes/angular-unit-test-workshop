import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildButtonComponent } from './child-button/child-button.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ChildSandbox } from './child.sandbox';
import { GistsComponent } from './gists/gists.component';
import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildButtonComponent,
    ChildFormComponent,
    GistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ChildSandbox, RequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
