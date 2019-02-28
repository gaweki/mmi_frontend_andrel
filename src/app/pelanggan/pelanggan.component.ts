import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Pelanggan {
  constructor(
    public name: string = '',
    public alamat: string = '',
    public bidang_usaha: string = '',
    public mulai: NgbDateStruct = null,
    public kontrak: string = '',
    public bukti: string = '',
    public currency: string = 'IDR'
  ) {}
}

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  
  pelanggans: Pelanggan[] = [];
  
  regModel: Pelanggan;
  
  showNew: Boolean = false;

  showTable: Boolean = true;
  
  submitType: string = 'Save';
  
  selectedRow: number;
  
  usaha: string[] = ['Bangunan', 'IT'];

  perpageItem: number = 100

  pageItemList : string[] = [ '10', '25', '100' ];

  currency: string[] = ['USD', 'IDR', 'YEN'];
  constructor() { 
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Jakarta', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Jakarta', 'IT', {day: 26, month: 2, year: 1980}, '2000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '3000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan1111', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));  
    this.pelanggans.push(new Pelanggan('Johan2222', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json')); 
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan3333', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan4444', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      
    this.pelanggans.push(new Pelanggan('Johan5555', 'Palmerah', 'IT', {day: 26, month: 2, year: 1980}, '1000000','package.json'));      

  }

  ngOnInit() {}

  
  onNew() {
    
    this.regModel = new Pelanggan();
    
    this.submitType = 'Save';
    
    this.showNew = true;

    this.showTable = false; 
  }

  
  onSave() {
    if (this.submitType === 'Save') {
      
      this.pelanggans.push(this.regModel); 
    } else {
      
      this.pelanggans[this.selectedRow].name = this.regModel.name;
      this.pelanggans[this.selectedRow].alamat = this.regModel.alamat;
      this.pelanggans[this.selectedRow].bidang_usaha = this.regModel.bidang_usaha;
      this.pelanggans[this.selectedRow].mulai = this.regModel.mulai;
      this.pelanggans[this.selectedRow].kontrak = this.regModel.kontrak;
      this.pelanggans[this.selectedRow].currency = this.regModel.currency;
      this.pelanggans[this.selectedRow].bukti = this.regModel.bukti;
    }
    
    this.showNew = false;

    this.showTable = true;

  }

  
  onEdit(index: number) {
    
    this.selectedRow = index;
    
    this.regModel = new Pelanggan();
    
    this.regModel = Object.assign({}, this.pelanggans[this.selectedRow]);
    
    this.submitType = 'Update';
    
    this.showNew = true;

    this.showTable = false;
  }
 
  onDelete(index: number) { 

    this.pelanggans.splice(index, 1);

  }
 
  onCancel() { 

    this.showNew = false;
    
    this.showTable = true;  
      
  } 

  onChangeBidangUsaha(bidang: string) { 
    this.regModel.bidang_usaha = bidang;
  }

  onChangeCurrency(uang: string) {  

    this.regModel.currency = uang;
  
  } 

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     { 
        this.regModel.bukti = event.target.files[0].name;
     }
   }

   onChangeTotalData(items : number){ 

       this.perpageItem = items; 
    
    }

}
