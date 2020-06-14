import { Component, OnInit } from '@angular/core';
import { IniComponent } from '../ini/ini.component';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.navCtrl.push(IniComponent);
  }

}