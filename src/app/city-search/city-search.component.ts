import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDataFromAPIService } from '../get-data-from-api.service';
import { debounceTime } from 'rxjs/operators';

 
@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(3)]); 
  
  constructor(private weatherService: GetDataFromAPIService) { 
  }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe(
      (searchValue: string) => {
        if(!this.search.invalid && searchValue){
          const userInput = searchValue.split(',').map(value => value.trim());
          this.weatherService.getCurrentWeather(
            userInput[0], userInput.length>1 ? userInput[1]: undefined).subscribe(data => console.log(data));
        }
      }
    )

  }

}
