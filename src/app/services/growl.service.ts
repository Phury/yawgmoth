import { Injectable } from '@angular/core';

export interface Growl {
	message: string;
	type: string;
}

export interface GrowlHandler {
	handle(growl: Growl): void
}

@Injectable({
	providedIn: 'root'
})
export class GrowlService {
	handlers: Function[] = [];

	constructor() { }
	
	subscribe(handler: Function): void {
		this.handlers.push(handler);
	}
	
	notify(growl: Growl): void {
		this.handlers.forEach(handler => handler(growl));
	}
	
}
