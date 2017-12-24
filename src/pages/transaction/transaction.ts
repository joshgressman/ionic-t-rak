import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { NgForm } from '@angular/forms';
import { TransactionsService } from '../../services/transactions';


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
   itemCategory: any = [];
   year: number;
   yearSelection: number[] = [];
   imgUrl = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService, private camera: Camera, private file: File) {
    
    //set current year
    let data = new Date().getFullYear();
    
    //add dynamic year selection to the tax year drop down
    for(let i = data -1; i <= data + 1; i++){
      let number = i;
      this.yearSelection.push(number);
    }

   
  }

  
  onSubmit(form: NgForm){
    

    let theYear = parseInt(form.value.year)

    this.transactionsService.addTransaction(form.value.vendor, form.value.purchasedDate, form.value.category, form.value.item, form.value.description, parseFloat(form.value.cost), this.imgUrl, theYear);
    form.reset();
  }

  ionViewDidLoad() {
    this.itemCategory = ["Office Supplies", "Vehicle", "Gas", "Marketing"];
  }

  //Will take receipt image. Will add after local storage to test without xcode
  onTakePhoto(){
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })

   .then(
      imageData => {
        //save image data to be stored in native file
        const currentName = imageData.raplace(/^.*[\\\/]/,'');
        const path = imageData.replace(/[^\/]*$/, '');
        const newFileName = new Date().getUTCMilliseconds() + '.jpg';
        this.file.moveFile(path, currentName, this.file.dataDirectory, newFileName)
        .then(
          data => {
            this.imgUrl = data.nativeURL;
            console.log("image path", this.imgUrl);
            this.camera.cleanup();
            this.file.removeFile(path, currentName);
          }
        )

        .catch(
          err => {
            this.imgUrl = '';
            
          }
        )

        // this.imgUrl = imageData;
      }
   )

   .catch(
     (err) => {
       console.log(err)
     }
   )
   
  }

  //Add File for image url

  // END OF CLASS
}
