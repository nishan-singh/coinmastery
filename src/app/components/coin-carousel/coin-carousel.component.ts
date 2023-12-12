import { Component } from '@angular/core';

@Component({
  selector: 'app-coin-carousel',
  standalone: true,
  imports: [],
  template: `
    <ul class="coin-carousel">
      @for (eachCoin of coins; track eachCoin) {
        <li>
          <img src="/assets/img/icons/dark-mode.svg" width="24px" />
          <div class="coin-details">
            <h3>{{ eachCoin }}</h3>
            <div class="price-wrapper">
              <p>468.34</p>
              <p>0.005</p>
            </div>
          </div>
        </li>
      }
    </ul>
  `,
  styleUrl: './coin-carousel.component.scss',
})
export class CoinCarouselComponent {
  coins = ['Bitcoin', 'Bitcoin', 'Bitcoin'];
}