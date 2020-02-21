import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { GetDataFromAPIService } from '../get-data-from-api.service';
import { IWeatherService } from '../iweather-service';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})

export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private getDataFromApi: GetDataFromAPIService) { }

  ngOnInit() {
    this.getDataFromApi.getCurrentWeather('Seattle','US').subscribe(data => this.current = data);
  }

  

}
