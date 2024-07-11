import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Signup } from './Signup';

@Component({
	selector: 'app-signup',
	standalone: true,
	imports: [RouterOutlet, RouterLink, NgClass, FormsModule, CommonModule],
	templateUrl: './signup.component.html',
	styleUrl: './signup.component.css'
})
export class SignupComponent {

	passwordFieldType: string = 'password';
	passwordVisible: boolean = false;
	username: string = '';
	password: string = '';
	firstname: string = '';
	lastname: string = '';
	email: string = '';
	phoneNumber: number = 0;
	designation: string = '';
	state: string = '';
	country: string = '';
	errorMessage: string | null = null;
	posts: Signup[] = [];

	constructor(private DATA_SERVICE: DataService,
		private router: Router) { }

	public signupForm(): void {
		const newPost: Signup = {
			firstname: this.firstname, 
			lastname: this.lastname, 
			email: this.email, 
			designation: this.designation, 
			state: this.state, 
			country: this.country, 
			phoneNumber: this.phoneNumber, 
			username: this.username, 
			password: this.password
		};
		if (this.isBlankField()){
			this.errorMessage = 'Fields cannot be blank';
			console.log('Fields cannot be blank');
			return;
		}
		if (!this.isValidEmail(this.email)) {
			this.errorMessage = 'Enter a valid email';
			return;
		}
		if (this.isValidPhoneNumber(this.phoneNumber)) {
			this.errorMessage = 'Enter a valid phone Number';
			return;
		}
		else {
			this.DATA_SERVICE.signup(newPost).subscribe({
				next: (response: string) => {
					if (response) {
						this.router.navigate(['/login']);
					} 
					else {
						console.error('No response received.');
					}
				},
				error: (error) => {
					console.error(error);
					this.errorMessage = 'Username already exists';
				},
			});
		}
	}

	isValidEmail(email: string): boolean {
		const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
		return emailRegex.test(email);
	}

	togglePasswordVisibility(): void {
		this.passwordVisible = !this.passwordVisible;
		this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
	}
	isBlankField(): boolean {
		return (!this.username.trim() || !this.password.trim() || !this.firstname.trim() || 
		!this.lastname.trim() || !this.email.trim() ||
			!this.designation.trim() || !this.state.trim() || !this.country.trim());
	}
	isValidPhoneNumber(phoneNumber: number): boolean {
		return (phoneNumber.toString().length < 10 == true);
	}
}

