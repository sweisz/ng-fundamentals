import {NgModule} from '@angular/core';
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {NavBarComponent} from './nav/navbar.component';
import {ToastrService} from "./common/toastr.service";
import {Error404Component} from "./errors/404.component";
import {EventsAppComponent} from './events-app.component'

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventThumbnailComponent
} from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true

}
