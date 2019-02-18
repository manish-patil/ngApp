import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressComponent } from './user-address.component';
import { Address } from '../user/user.component';

describe('UserAddressComponent', () => {
  let component: UserAddressComponent;
  let fixture: ComponentFixture<UserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have address', () => {
    component.address = {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
    };

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector("#street").textContent).toContain("Kulas Light");
    expect(compiled.querySelector("#suite").textContent).toContain("Apt. 556");
    expect(compiled.querySelector("#city").textContent).toContain("Gwenborough");
    expect(compiled.querySelector("#zipcode").textContent).toContain("92998-3874");
  })
});