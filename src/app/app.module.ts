import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';

const appRoutes: Routes = [
  { path: 'developer', component: DeveloperComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
