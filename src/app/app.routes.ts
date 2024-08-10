import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./app.component").then((m) => m.AppComponent),
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadComponent: () =>
          import("../app/common/components/home/home.component").then(
            (m) => m.HomeComponent,
          ),
      },
    ],
  },
];
