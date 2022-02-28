import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchedListComponent } from './searched-list/searched-list.component';
import { BridgeComponent } from './bridge/bridge.component';
import { UserRoutingModule } from './user-routing.module';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';

import { MatFormFieldModule,  MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AccountSettingComponent } from './account-setting/account-setting.component';



@NgModule({
    declarations: [
        DashboardComponent,
        SearchedListComponent,
        BridgeComponent,
        MessageComponent,
        ProfileComponent,
        HelpComponent,
        ChatListComponent,
        ChatDetailComponent,
        AccountSettingComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule
    
    ],

    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
      ],
     
})
export class UserModule { }
