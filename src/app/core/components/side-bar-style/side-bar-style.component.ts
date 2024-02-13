import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar-style',
  standalone: true,
  imports: [CommonModule,  SidebarModule, ButtonModule, MenuModule],
  templateUrl: './side-bar-style.component.html',
  styleUrl: './side-bar-style.component.scss'
})
export class SideBarStyleComponent {

  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  
  constructor(){}

  ngOnInit() {
    this.items = [{
        items: [
            {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
            {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
            {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/menu']}
        ]
    }];
}

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
