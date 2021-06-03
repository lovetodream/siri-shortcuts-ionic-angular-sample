import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SiriShortcuts } from '../../../../Documents/GitHub/capacitor-plugin-siri-shortcuts/dist/esm';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async someAction() {
    await SiriShortcuts.donate({
      persistentIdentifier: 'test',
      title: 'Test'
    });

    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Donation executed',
      buttons: [
        {
          text: 'Dismiss'
        }
      ]
    });

    toast.present();
  }

}
