import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-side-bar-style',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './side-bar-style.component.html',
  styleUrl: './side-bar-style.component.scss'
})
export class SideBarStyleComponent {

  sidebarVisible: boolean = false;

  constructor(){}

  public sidebarItems = [
    {
      label: 'Heroes',
      icon: 'pi pi-dollar',
      routerLink: '/dashboard/hero/hero-shortcut',
    },
    {
      label: 'Buscar',
      icon: 'pi pi-dollar',
      routerLink: '/dashboard/hero/hero-shortcut',
    },
  ]
}
