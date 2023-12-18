import { Component } from '@angular/core';

@Component({
  selector: 'app-coin-carousel',
  standalone: true,
  imports: [],
  template: `
    <section class="coin-carousel-wrapper">
      <button type="button" class="prev-btn"><</button>
      <ul class="coin-carousel">
        @for (eachCoin of coins; track eachCoin) {
        <li>
          <img [src]="eachCoin.logo" width="24px" />
          <div class="coin-details">
            <h3>{{ eachCoin.name }}</h3>
            <div class="price-wrapper">
              <p>468.34</p>
              <p>0.005</p>
            </div>
          </div>
        </li>
        }
      </ul>
      <button type="button" class="next-btn">></button>
    </section>
  `,
  styleUrl: './coin-carousel.component.scss',
})
export class CoinCarouselComponent {
  coins = [
    {
      logo: '/assets/img/icons/bitcoin.svg',
      name:'Bitcoin'
    },
    {
      logo: '/assets/img/icons/bitcoin.svg',
      name:'Bitcoin'
    },
    {
      logo: '/assets/img/icons/bitcoin.svg',
      name:'Bitcoin'
    },
  ]
}
