import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DataService } from '../data.service';
import { Login } from './Login';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [RouterOutlet, RouterLink, NgClass, FormsModule, CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	passwordFieldType: string = 'password';
	passwordVisible: boolean = false;
	username: string = '';
	password: string = '';
	errorMessage: string | null = null;
	posts: Login[] = [];

	constructor(private DATA_SERVICE: DataService,
				private router: Router) { }

	public login(username: string, password: string):void {
		const newPost: Login = { username, password };
		if (this.isBlankField(username, password)) {
			this.errorMessage = 'Fields cannot be blank';
		}
		else {
			this.DATA_SERVICE.login(newPost).subscribe({
				next: (post) => {
					if (post) {
						this.router.navigate(['/userdashboard']);
					} 
					else {
						console.error('No response received.');
					}
				},
				error: (error) => {
					console.log(error);
					this.errorMessage = 'Invalid username or password';
				},
			});
		}
	}
	
	togglePasswordVisibility(): void {
		this.passwordVisible = !this.passwordVisible;
		this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
	}
	
	isBlankField(username: string, password: string): boolean {
		return (username == '' || password == '');
	}
}