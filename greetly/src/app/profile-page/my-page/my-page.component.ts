import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css'
})
export class MyPageComponent {

}
