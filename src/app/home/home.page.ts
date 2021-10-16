import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SiriShortcuts } from 'capacitor-plugin-siri-shorts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async someAction(id: number) {
    await SiriShortcuts.donate({
      persistentIdentifier: `test${id}`,
      title: `Test ${id}`
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

  async presentAction() {
    const id = 1;
    await SiriShortcuts.present({
      persistentIdentifier: `test${id}`,
      title: `Test ${id}`
    }).then(async () => {
      (await this.toastController.create({ header: 'Success', message: 'User saved donation' })).present();
    }).catch(async (error) => {
      console.log(error);
      (await this.toastController.create({ header: 'Error', message: error })).present();
    });
  }

  async deleteOne(id: number) {
    await SiriShortcuts.delete({identifiers: [`test${id}`]});

    const toast = await this.toastController.create({
      header: 'Success',
      message: `Deletion of Test ${id} executed`,
      buttons: [
        {
          text: 'Dismiss'
        }
      ]
    });

    toast.present();
  }

  async deleteAll() {
    await SiriShortcuts.deleteAll();

    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Deletion of all activities executed',
      buttons: [
        {
          text: 'Dimiss'
        }
      ]
    });

    toast.present();
  }

}
