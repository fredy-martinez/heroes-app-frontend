import { Component } from '@angular/core';
import { CreateHeroFormComponent } from '../../components/create-hero-form/create-hero-form.component';

@Component({
  selector: 'app-create-hero-page',
  standalone: true,
  imports: [CreateHeroFormComponent],
  templateUrl: './create-hero-page.component.html',
  styleUrl: './create-hero-page.component.scss'
})
export class CreateHeroPageComponent {

}
