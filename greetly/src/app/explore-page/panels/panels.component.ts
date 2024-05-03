import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'; // added for button
import {MatDividerModule} from '@angular/material/divider'; // added for button
import {MatButtonModule} from '@angular/material/button'; // added for button

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule], // added the import for the button
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.css'
})
export class PanelsComponent {
  term: any;
}

