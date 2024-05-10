//this was a test page to understand an issue regarding products service

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../Services/products.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonBackButton, IonIcon, IonThumbnail, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonBackButton, IonIcon, IonThumbnail, IonButton]
})
export class ShopPage implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
  }

}

/*
products:any = [];
  constructor(private productsService:ProductsService) { 

  }

  ngOnInit(): void{
    this.productsService.getProductData().subscribe(
      (data)=>{
        this.products = data.Shopping;
      }
    );
  }
*/