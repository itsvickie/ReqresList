import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { User } from '../create-account/create-account';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = 'eve.holt@reqres.in';
    this.model.password = 'pistol';
  }

  login(){
    this.userProvider.login(this.model.email, this.model.password)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logado com sucesso! Token: ' + result.token, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao logar usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    })
  }
}