import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';

export const routes: Routes = [
    {'path': 'chat', component:ChatComponent},
    {'path': 'profile', component:ProfilePageComponent},
    {'path': 'favourites', component:FavouritesComponent},
    {'path': '', component:ExplorePageComponent}
];
