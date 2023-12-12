<<<<<<< HEAD
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769

@Component({
  selector: 'app-header',
  standalone: true,
<<<<<<< HEAD
  imports: [NgClass],
=======
  imports: [CommonModule],
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769
  template: `
    <header>
      <h2 class="logo">Coin<span>Mastery</span></h2>
      <div class="right-side">
        <input type="search" placeholder="Search..." id="search-coin" />
        <div class="different-currencies-wrapper">
          <button
            type="button"
            class="currency"
            (click)="toggleOtherCurrencies = !toggleOtherCurrencies"
          >
            {{
              (selectedVal ? selectedVal : currenciesArray[0]) +
                (toggleOtherCurrencies ? ' &#11205;' : ' &#x2BC6;')
            }}
          </button>
          <ul
            class="currencies-list"
            [ngClass]="{ 'show-list': toggleOtherCurrencies }"
          >
<<<<<<< HEAD
            @for (eachCurrency of currenciesArray; track eachCurrency) {
              <li>
                <button type="button" (click)="getCurrencyVal(eachCurrency)">
                  {{ eachCurrency }}
                </button>
              </li>
            }
=======
            <li *ngFor="let eachCurrency of currenciesArray">
              <button type="button" (click)="getCurrencyVal(eachCurrency)">
                {{ eachCurrency }}
              </button>
            </li>
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769
          </ul>
        </div>
        <button
          class="diff-modes"
          type="button"
          (click)="toggleColorTheme = !toggleColorTheme"
        >
          <img
            src="{{
              toggleColorTheme
                ? '/assets/img/icons/dark-mode.svg'
                : '/assets/img/icons/light-mode.svg'
            }}"
            alt=""
          />
        </button>
      </div>
    </header>
  `,
<<<<<<< HEAD
  styleUrl: './header.component.scss',
=======
  styleUrls: ['./header.component.scss'],
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769
})
export class HeaderComponent {
  toggleOtherCurrencies = false;
  toggleColorTheme = true;
  currenciesArray: string[] = ['$ USD', '€ EUR', '£ GBD'];
  selectedVal?: string;

  getCurrencyVal(val: string) {
    this.selectedVal = val;
    this.toggleOtherCurrencies = false;
  }
}
