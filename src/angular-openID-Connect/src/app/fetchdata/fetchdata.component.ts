import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { WeatherForecast } from './WeatherForecast';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent implements OnInit {
    public forecasts: WeatherForecast[];

    constructor(
        private http: HttpClient,
        private oauthService: OAuthService) { }

    ngOnInit(): void {
      const httpOptions = {
        headers: new HttpHeaders({ Authorization: `Bearer ${this.oauthService.getAccessToken()}` })
      };

      this.http.get('https://localhost:5001/api/SampleData/WeatherForecasts', httpOptions).subscribe((result: WeatherForecast[]) => {
        this.forecasts = result;
      }, error => console.error(error));

  }

}
