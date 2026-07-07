import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneProjectComponent } from './capstone-project.component';

describe('CapstoneProjectComponent', () => {
  let component: CapstoneProjectComponent;
  let fixture: ComponentFixture<CapstoneProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapstoneProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapstoneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
