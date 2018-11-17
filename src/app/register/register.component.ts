import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  register(form) {
      const username = form.username;
      alert(`Uzytkownik ${username} zarejestrowany!`);
  }

  ngOnInit() {
  }

}
