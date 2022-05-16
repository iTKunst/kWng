import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appMod } from './app/appMod';
import { environment } from './environments/environment';

if( environment.production )
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(appMod)
	.catch(err => console.log(err));
