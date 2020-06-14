import { Component, OnInit } from '@angular/core';
import { CaptureComponent } from "../capture/capture.component";
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  openScanner() {
    const modal = this.modalCtrl.create(CaptureComponent);
    modal.present();
  }

}