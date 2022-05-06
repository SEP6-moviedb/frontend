import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  ourOwnCalc: any;

  constructor() {
    this.ourOwnCalc = "4 + 6";
  }

  ngOnInit(): void {
  }

}
