import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    numFallos: number;
    letras: Array<string>;
    letrasErroneas: Array<string>;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.numFallos = 0;
        this.letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.letrasErroneas = [];
  }

  letraClick(event, letra: string) {

      if (this.numFallos < 6) {
          this.numFallos++;
          this.letrasErroneas.push(letra);
      } else {
          this.presentAlert();
      }
     
  }

  presentAlert() {
      let alert = this.alertCtrl.create({
          title: 'Has muerto',
          subTitle: '¿quieres volver a jugar?',
          buttons: [{
              text: 'Volver a Jugar',
              handler: () => {
                  this.numFallos = 0;
              }
          }]
      });
      alert.present();
  }

}
