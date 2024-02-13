import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarStyleComponent } from '../../../../core/side-bar/side-bar-style/side-bar-style.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule, SidebarModule, CommonModule, SideBarStyleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  sidebarVisible: boolean = false;

}
