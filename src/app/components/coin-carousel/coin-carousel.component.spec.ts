import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCarouselComponent } from './coin-carousel.component';

describe('CoinCarouselComponent', () => {
  let component: CoinCarouselComponent;
  let fixture: ComponentFixture<CoinCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
