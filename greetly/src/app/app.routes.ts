import { Routes } from '@angular/router';
import { ChatComponent } from './Blackbox/chat/chat.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { AboutUsComponent } from './Blackbox/about-us/about-us.component';
import { ContactComponent } from './Blackbox/contact/contact.component';
import { FAQComponent } from './Blackbox/faq/faq.component';
import { PoliticsComponent } from './Blackbox/politics/politics.component';
import { RulesComponent } from './Blackbox/rules/rules.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    {'path': 'chat', component:ChatComponent},
    {'path': 'profile', component:ProfilePageComponent},
    {'path': 'favourites', component:FavouritesComponent},
    {'path': '', component:ExplorePageComponent},
    {'path': 'about us', component:AboutUsComponent},
    {'path': 'contact', component:ContactComponent},
    {'path': 'FAQ', component:FAQComponent},
    {'path': 'politics', component:PoliticsComponent},
    {'path': 'rules', component:RulesComponent},  
];
