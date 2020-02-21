import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiData } from './i-api-data';
import { environment } from '../environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWeatherService } from './iweather-service';

@Injectable({
  providedIn: 'root'
})
export class GetDataFromAPIService implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>{
    return this.httpClient.get<IApiData>(`${environment.baseURL}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appId=${environment.appId}`).pipe(map(data => this.transformToICurrentWeather(data)));
  }

  private transformToICurrentWeather(data: IApiData): ICurrentWeather{
    return{
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      temperature: this.convertToDegF(data.main.temp),
      description: data.weather[0].description
      
    }
  }

  private convertToDegF(kelvin: number):number{
    return kelvin * 9 / 5 - 459.67;
  }
}
