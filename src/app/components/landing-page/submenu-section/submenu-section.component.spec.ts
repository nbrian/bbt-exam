import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmenuSectionComponent } from './submenu-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

describe('SubmenuSectionComponent', () => {
  let component: SubmenuSectionComponent;
  let fixture: ComponentFixture<SubmenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuSectionComponent,MatTabsModule, MatButtonModule, MatIconModule,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
