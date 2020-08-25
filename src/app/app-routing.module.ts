import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ProfilesComponent} from './profiles/profiles.component';
import {SettingsComponent} from './settings/settings.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
