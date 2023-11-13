import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  message: string = 'Vous avez déconnecté . (shiro/shiro)';
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(m: string) {
    this.message = m;
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {

        if (isLoggedIn) {
          console.log("Vo");
          this.setMessage('Vous êtes connecté !');
          this.router.navigate(['/pokemons']);
        } else {
          this.setMessage('Identifiant ou mot de passe incorrect !');
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  logout() {
    this.auth.logout();
    this.setMessage('Vous êtes déconnecté !');
  }
}
