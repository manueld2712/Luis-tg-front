import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ComponentsModule } from '../components/components.module';
import { CodePopoverComponent } from './pages/profile/code-popover/code-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [HomePage, ProfileComponent, ChatsComponent, CodePopoverComponent],
})
export class HomePageModule {}
