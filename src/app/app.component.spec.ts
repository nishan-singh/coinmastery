import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
=======
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'coinmastery' title`, () => {
=======
  it(`should have as title 'coinmastery'`, () => {
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('coinmastery');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, coinmastery');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('coinmastery app is running!');
>>>>>>> d478c1b7676e583b53b7ab72f015b850d6048769
  });
});
