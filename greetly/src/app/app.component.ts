
import { Component, ElementRef, viewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './explore-page/navbar/navbar.component';
import { PanelsComponent } from './explore-page/panels/panels.component';
import { PanelLeftComponent } from './explore-page/panels/panel-left/panel-left.component';
import { PanelRightComponent } from './explore-page/panels/panel-right/panel-right.component';
import { ScrollBarComponent } from './explore-page/panels/panel-left/scroll-bar/scroll-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginPageComponent, MatButtonModule, NavbarComponent, FooterComponent ,PanelsComponent, PanelLeftComponent, ScrollBarComponent, PanelRightComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'greetly';
}