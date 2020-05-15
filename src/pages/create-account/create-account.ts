import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = "eve.holt@reqres.in";
    this.model.password = "pistol";
  }

  createAccount(){
    this.userProvider.createAccount(this.model.email, this.model.password)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao criar usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    })
  }
}

export class User {
  email: string;
  password: string;
}