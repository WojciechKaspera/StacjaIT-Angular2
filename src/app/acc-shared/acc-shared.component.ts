import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acc-shared',
  templateUrl: './acc-shared.component.html',
  styleUrls: ['./acc-shared.component.css']
})
export class AccSharedComponent implements OnInit {

  @Input()
  actionName = 'Default';

  constructor() { }

  ngOnInit() {
  }

}
