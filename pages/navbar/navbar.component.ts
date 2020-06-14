import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniComponent } from '../ini/ini.component';
import { HomePage } from '../home/home';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goTo() {
    this.navCtrl.setRoot(IniComponent);
    this.navCtrl.popToRoot();
    
  }

}