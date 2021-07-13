import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { TestComponent } from './tests/components/test/test.component';
import { TestService } from './tests/services/test.service';
import { M1Module } from './tests/modules/m1/m1.module';
import { M2Module } from './tests/modules/m2/m2.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { DroideModule } from './features/droides/droide/droide.module';
import { EffectsModule } from '@ngrx/effects';
import { DroidesEffect } from './features/droides/store/effects/droide.effects';
import { AuthenticateModule } from './features/authenticate/authenticate.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GameModule,
    M1Module,
    M2Module,
    DroideModule,
    AuthenticateModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([
      DroidesEffect
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
