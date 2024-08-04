import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import {httpErrorHandlerInterceptor} from '@core/services/http-error-handler.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withViewTransitions(), withPreloading(PreloadAllModules),
      withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
    })
  ),
  provideHttpClient(withInterceptors([httpErrorHandlerInterceptor]))
],
};
