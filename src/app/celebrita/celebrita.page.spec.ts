import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebritaPage } from './celebrita.page';

describe('CelebritaPage', () => {
  let component: CelebritaPage;
  let fixture: ComponentFixture<CelebritaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CelebritaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CelebritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
