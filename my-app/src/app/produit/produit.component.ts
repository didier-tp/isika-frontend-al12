import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/data/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produit : Produit | null = null; //produit sélectionné (à modifier ou à supprimer ou ....)
  produitTemp : Produit = new Produit(); //produit temporaire (copie selection ou nouveau)

  onSelectionnerProduit(p:Produit){
     this.produit = p; //variante simpliste (idéalement)
     this.produitTemp =  this.clonerProduit(p);//clonage / copie
  }

  clonerProduit(p:Produit):Produit{
    return JSON.parse(JSON.stringify(p));
  }

  onSupprimerSelection(){
      for(let i in this.produits){
          if(this.produitTemp.ref == this.produits[i].ref){
            this.produits.splice(<number><unknown>i,1); break;
          }
      }
    this.produit = new Produit();
 }

 onAjouter(){
   if(this.produitTemp.ref != "?" ){
        let p = this.clonerProduit(this.produitTemp);
        this.produits.push(p);
        this.onNew();//ou ...
   }
 }

 onModifierSelection(){
     if(this.produit){
          this.produit.label =  this.produitTemp.label;
          this.produit.prix =  this.produitTemp.prix;
          this.produit.ref =  this.produitTemp.ref;
     }
 }

 onNew(){
   this.produit = null;
   this.produitTemp  = new Produit();
}
  
  produits : Produit[] = [
    new Produit('p1' , "Cahier" , 2.34) ,
    new Produit('p2' , 'Classeur' , 3.4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
