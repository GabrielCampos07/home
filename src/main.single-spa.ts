import { NgZone } from "@angular/core";
import { NavigationStart, Router, provideRouter } from "@angular/router";

import {
  getSingleSpaExtraProviders,
  singleSpaAngular,
} from "single-spa-angular";

import { APP_BASE_HREF } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
import { EmptyRouteComponent } from "./app/empty-route/empty-route.component";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        getSingleSpaExtraProviders(),
        provideRouter([
          ...routes,
          { path: "**", component: EmptyRouteComponent },
        ]),
      ],
    });
  },
  template: "<home-root />",
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
