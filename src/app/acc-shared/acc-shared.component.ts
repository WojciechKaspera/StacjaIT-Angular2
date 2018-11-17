import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../password.validator';

@Component({
  selector: 'app-acc-shared',
  templateUrl: './acc-shared.component.html',
  styleUrls: ['./acc-shared.component.css']
})
export class AccSharedComponent implements OnInit {

  @Input()
  actionName = 'Default';

  @Input()
  action: Function;

  onSubmit(e) {
    e.preventDefault();
    this.action(this.form.value);
    this.form.reset();
    this.router.navigateByUrl('/home');
  }

  form = new FormGroup({
    username: new FormControl('', Validators.pattern(/^[A-Z][a-z]* [A-Z][a-z]*[a-z]$/)),
    password: new FormControl('', PasswordValidator)
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
