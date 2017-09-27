import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

bootstrap().then(() => {
  const preloader = document.querySelector('.preloader');
  preloader.addEventListener('transitionend', function () {
    preloader.className = 'preloader-hidden';
  });
  preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
});
