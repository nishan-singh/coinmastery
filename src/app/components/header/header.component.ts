import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h2 class="logo">CoinMastery</h2>
      <div class="right-side">
        <input type="search" placeholder="Search..." id="search-coin">
        <div class="different-currencies-wrapper">
          <button type="button" class="currency" (click)="toggleOtherCurrencies = !toggleOtherCurrencies">
            {{(selectedVal? selectedVal: currenciesArray[0]) + (toggleOtherCurrencies? " &#11205;": " &#x2BC6;")}}
          </button>
          <ul class="currencies-list" [ngClass]="{'show-list': toggleOtherCurrencies}">
            <li *ngFor="let eachCurrency of currenciesArray;" >
              <button type="button" (click)="getCurrencyVal(eachCurrency)">{{eachCurrency}}</button>
            </li>
          </ul>
        </div>
        <button class="diff-modes" type="button" (click)="toggleColorTheme = !toggleColorTheme" >
         <img src="{{toggleColorTheme? '/assets/img/icons/dark-mode.svg': '/assets/img/icons/light-mode.svg'}}" alt="">
        </button>
      </div>
    </header>
  `,
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  toggleOtherCurrencies = false;
  toggleColorTheme = true;
  currenciesArray: string[] = ["$ USD", "€ EUR", "£ GBD"];
  selectedVal?: string;

  getCurrencyVal(val: string) {
    this.selectedVal = val;
    this.toggleOtherCurrencies = false;
  }
}
