import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms-header',
  standalone: true,
  imports: [],
  templateUrl: './forms-header.component.html',
  styleUrl: './forms-header.component.scss'
})
export class FormsHeaderComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) image: string = '';
}
