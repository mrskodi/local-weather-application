import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { GetDataFromAPIService } from '../get-data-from-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetFakeDataFromApiService } from 'src/app/get-fake-data-from-api.service';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [ {provide: GetDataFromAPIService, useClass: GetFakeDataFromApiService} ],
      imports: [HttpClientTestingModule] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
