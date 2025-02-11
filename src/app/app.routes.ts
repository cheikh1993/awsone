import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'social-media', loadChildren: ()=> import('./social-media/social-media-routes').then((m) => m.SocialMediaRoutingModule)

    },
    {
        path: '**', redirectTo: 'social-media'
    }
];
