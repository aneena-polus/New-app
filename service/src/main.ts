import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [...appConfig.providers,provideHttpClient(), provideAnimationsAsync()],
}).catch((err) => console.error(err));
