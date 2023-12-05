import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      top-bar works!
    </p>
  `,
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

}
