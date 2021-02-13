import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../model/app-config';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AppConfigService {
	
	private config: AppConfig;
	private config$: Observable<AppConfig>;

	constructor(private http: HttpClient) { }

	public loadConfig(): Observable<AppConfig> {
		this.config$ = this.http.get<AppConfig>(`assets/config/app-config.json`);
		this.config$.pipe(
			tap(console.log)
		).subscribe(config => {
			this.config = config;
		});
		return this.config$;
	}
	
	public getConfig(): AppConfig {
		return this.config;
	}
}
