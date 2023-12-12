import { Component } from '@angular/core';
import { CoinCarouselComponent } from '../coin-carousel/coin-carousel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CoinCarouselComponent],
  template: `
    <app-coin-carousel />
  `,
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
