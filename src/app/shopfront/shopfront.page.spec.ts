import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopfrontPage } from './shopfront.page';

describe('ShopfrontPage', () => {
  let component: ShopfrontPage;
  let fixture: ComponentFixture<ShopfrontPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfrontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
