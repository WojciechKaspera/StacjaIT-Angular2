import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
