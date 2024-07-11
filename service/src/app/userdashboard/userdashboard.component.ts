import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgClass],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

}
