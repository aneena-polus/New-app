import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface Login {
	employeeId?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	designation?: string;
	state?: string;
	country?: string;
	phoneNumber?: number;
	username: string;
	password: string;
	employeeCreatedDate?: number;
};

interface Signup {
	firstname: string;
	lastname: string;
	email: string;
	designation: string;
	state: string;
	country: string;
	phoneNumber: number;
	username: string;
	password: string;
};

@Injectable({
	providedIn: 'root'
})

export class DataService {
	public loginMessage: string = '';

	constructor(private http: HttpClient) { }

	login(post: Login): Observable<Login> {
		return this.http.post<Login>('/api/login', post);
	};

	signup(post: Signup): Observable<string> {
		return this.http.post('/api/signup', post, { responseType: 'text' });
	};
}
