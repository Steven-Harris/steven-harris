import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './portfolio/about-me.component';
import { ContributionsComponent } from './portfolio/contributions.component';
import { ExperienceComponent } from './portfolio/experience.component';
import { SkillsComponent } from './portfolio/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContributionsComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...environment.modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
