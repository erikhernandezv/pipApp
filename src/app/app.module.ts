import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { SwitchtextPipe } from './pipes/switchtext.pipe';

// Registramos los idiomas en la aplicación
registerLocaleData(localEs);
registerLocaleData(localFr);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomsafePipe,
    SwitchtextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
