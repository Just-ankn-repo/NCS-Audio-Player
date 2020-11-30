import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { SidePanelComponent } from './core/components/side-panel/side-panel.component';
import { PlayerBarComponent } from './core/components/player-bar/player-bar.component';
import { EqVisualizerComponent } from './core/components/player-bar/eq-visualizer/eq-visualizer.component';
import { TrackInfoComponent } from './core/components/player-bar/track-info/track-info.component';
import { PlayerControlsComponent } from './core/components/player-bar/player-controls/player-controls.component';
import { SearchComponent } from './core/components/header/search/search.component';
import { LoginComponent } from './core/components/header/login/login.component';
import { UserComponent } from './core/components/header/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';
import { Page404Component } from './core/pages/page404/page404.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SidePanelComponent,
    PlayerBarComponent,
    EqVisualizerComponent,
    TrackInfoComponent,
    PlayerControlsComponent,
    SearchComponent,
    LoginComponent,
    UserComponent,
    HomePageComponent,
    AboutPageComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
