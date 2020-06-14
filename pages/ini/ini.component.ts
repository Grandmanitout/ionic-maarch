import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';


@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent implements OnInit {

rootPage:any = HomePage;

  constructor() {}

  ngOnInit() {
  }
}