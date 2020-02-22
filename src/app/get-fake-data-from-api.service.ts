import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './icurrent-weather';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetFakeDataFromApiService implements IWeatherService{
  private fakeWeather: ICurrentWeather = {
    city: 'Seattle',
    country: 'US',
    image: '',
    description: 'sunny',
    date: 1485789600,
    temperature: 280.32
  }
  constructor() { }

  public getCurrentWeather(searchText: string | number, country?: string): Observable<ICurrentWeather>{
    return of(this.fakeWeather);
  }
}
