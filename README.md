# Rkatime

check android setting autodatetime is on-off enable/disable

ionic cordova plugin add https://github.com/rupendraa/cordova-plugin-rkatime
npm i --save https://github.com/rupendraa/ionic-native-Rkatime

Add this plugin to your app's module https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module



	  import { Rkatime } from '@ionic-native/Rkatime';

	  constructor( private rkatime: Rkatime,  public platform: Platform  ) {

					if(  this.platform.is('android')  ){
					   await this.rkatime.getOtherInfo().then((datax) =>{
						   if( !datax.is_time_automatic_enabled ){

									// == do somthing like this if setting is disable/off 
								   // this.nav.setRoot('BlankpagePage');
								   // let alert = this.alertCtrl.create({
								  //    title: 'Required Auto Time Setting On',
								  //    subTitle: 'Please go to mobile settings and set "Autometic date & time" Enable/On !!',
									 // buttons: ['OK'],
								  //    enableBackdropDismiss: false // <- Here! :)
								  //  });

								  //  alert.addButton({
								   //   text: 'Ok',
								   //   handler: (data: any) => {
								   //     this.platform.exitApp();
									//    return;
								   //   }
								  //  });

								  //  alert.present();
						   }
						});                  
					 }


	  }

