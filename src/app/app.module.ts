

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// user components
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';

// website components
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { HttpModule } from '@angular/http';



// client side services
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';

import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    PageNewComponent,
    PageListComponent,
    PageEditComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [UserService, WebsiteService, WidgetService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
