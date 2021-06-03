import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SiriShortcuts } from '../../../Documents/GitHub/capacitor-plugin-siri-shortcuts/dist/esm';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private toastController: ToastController) {}

  ngOnInit() {
    SiriShortcuts.addListener('appLaunchBySiriShortcuts', async (res) => {
      console.log(res);
      const toast = await this.toastController.create({
        header: 'Shortcut received',
        message: `Persistent Identifier: ${res.persistentIdentifier}`,
        buttons: [{
          text: 'Dismiss'
        }]
      });

      toast.present();
    });
  }
}
