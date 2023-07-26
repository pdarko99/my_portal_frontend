import "zone.js/dist/zone";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterOutlet, provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app/route";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule],
  template: ` <router-outlet></router-outlet> `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()],
});
