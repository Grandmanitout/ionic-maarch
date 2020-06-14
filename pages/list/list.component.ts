import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { RessourceComponent } from "../ressource/ressource.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "list",
  templateUrl: "list.component.html"
})
export class ListComponent {
  waiting: boolean = false;

  ressources = Array.from({ length: 500 }).map((_, i) => {
    return {
      resId: 15,
      chrono: "MAARCH/2020A/14",
      barcode: null,
      subject: "Demande intervention à qualifier",
      confidentiality: null,
      statusLabel: "Nouveau courrier ou document non qualifié",
      statusImage: "fm-letter-status-attr",
      priorityColor: "#009dc5",
      closing_date: null,
      countAttachments: 0,
      hasDocument: true,
      mailTracking: false,
      integrations: [],
      countNotes: 0,
      isLocked: false,
      folders: [{ id: 1, label: "Compétences fonctionnelles" }],
      display: [
        {
          value: "getDoctype",
          cssClasses: [],
          icon: "fa-suitcase",
          displayValue: "Recours gracieux et réclamations"
        },
        {
          value: "getPriority",
          cssClasses: [],
          icon: "fa-traffic-light",
          displayValue: "Normal"
        },
        {
          value: "getCategory",
          cssClasses: [],
          icon: "fa-exchange-alt",
          displayValue: "incoming"
        },
        {
          value: "getAssignee",
          cssClasses: [],
          icon: "fa-sitemap",
          displayValue: "Charlotte CHARLES (Pôle Technique)"
        },
        {
          value: "getRecipients",
          cssClasses: [],
          icon: "fa-user",
          displayValue: []
        },
        {
          value: "getSenders",
          cssClasses: [],
          icon: "fa-book",
          displayValue: ["Nicolas MARTIN (Préfecture de Maarch Les Bains) "]
        },
        {
          value: "getCreationAndProcessLimitDates",
          cssClasses: ["align_rightData"],
          icon: "fa-calendar",
          displayValue: {
            creationDate: "2020-05-30 22:38:35.364626",
            processLimitDate: "2020-06-20 00:00:00"
          }
        }
      ]
    };
  });

  baskets: any[] = [
    {
      label: "Courriers à traiter",
      count: "25"
    },
    {
      label: "Courriers de ma direction",
      count: "4120"
    }
  ];

  selectMode: boolean = false;

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {}

  ngOnInit(): void {
    //this.getBaskets();
  }

  getBaskets() {
    this.http
      .get("https://demo.maarchcourrier.com/rest/home")
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  ondrag(item) {
    if (!this.waiting) {
      let percent = item.getSlidingPercent();
      if (percent > 0) {
        // positive
        console.log("right side");
      } else {
        // negative
        console.log("left side");
      }
      if (Math.abs(percent) > 4) {
        this.waiting = true;
        console.log("overscroll");
        console.log(Math.abs(percent));
        this.delete();
      }
    }
  }
  delete() {
    const toast = this.toastCtrl.create({
      message: "User was added successfully",
      duration: 3000
    });
    toast.present();
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RessourceComponent, {
      id: "123"
    });
  }

  openMenu() {
    this.menuCtrl.open("first");
  }

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }
}
