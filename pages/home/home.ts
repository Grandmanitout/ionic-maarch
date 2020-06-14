import { Component, ViewChild } from "@angular/core";
import { NavController, MenuController, FabContainer } from "ionic-angular";
import { ListComponent } from "../list/list.component";
import { CaptureComponent } from "../capture/capture.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.scss"]
})
export class HomePage {
  tab: any;

  notes: any[] = [];

  fields: any[] = [
    "priorityLabel",
    "subject",
    "categoryId",
    "doctype",
    "status"
  ];

  resource: any = {};

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.notes = Array.from({ length: 5 }).map((_, i) => {
      return {
        id: i,
        user_id: "bblier",
        creation_date: new Date("2020-03-02 01:19:54.638742"),
        note_text:
          "Merci de répondre favorablement à la demande inscrite dans ce courrier",
        firstname: "Bernard",
        lastname: "BLIER",
        entity_label: "Service Courrier"
      };
    });

    this.resource = {
      resId: 15,
      modelId: 1,
      categoryId: "incoming",
      chrono: "MAARCH/2020A/14",
      status: "INIT",
      closingDate: null,
      creationDate: "2020-05-30 22:38:35.364626",
      modificationDate: "2020-05-30 22:38:35.364626",
      integrations: [],
      subject: "Demande intervention à qualifier",
      processLimitDate: "2020-06-20 00:00:00",
      priority: "poiuytre1357nbvc",
      doctype: 505,
      destination: 10,
      documentDate: "2020-05-30 00:00:00",
      arrivalDate: "2020-05-30 00:00:00",
      destinationLabel: "Pôle Technique",
      statusLabel: "Nouveau courrier ou document non qualifié",
      statusAlterable: true,
      priorityLabel: "Normal",
      priorityColor: "#009dc5",
      senders: [{ id: 4, type: "contact" }],
      customFields: [],
      folders: [],
      tags: []
    };
  }

  openMenu() {
    this.menuCtrl.open("doc");
  }

  goTo(name) {
    if (name === "basket") {
      this.navCtrl.push(ListComponent);
    } else if (name === "search") {
      this.navCtrl.push(SearchComponent);
    }
  }
}
