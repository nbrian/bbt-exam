import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSectionComponent } from './heading-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

describe('HeadingSectionComponent', () => {
  let component: HeadingSectionComponent;
  let fixture: ComponentFixture<HeadingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingSectionComponent, MatDividerModule, MatListModule, MatIconModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
