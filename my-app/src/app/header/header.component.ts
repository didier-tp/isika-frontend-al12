import { Component,  Input,  OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';
import { ProduitService } from '../common/service/produit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string = "titre_par_defaut";

  //<bsu-nav-bar  [menuDefs]="myMenuDefs"></bsu-nav-bar> coté .html
  myMenuDefs : MenuDefinition[] = [
    { label : "basic" , path : "/ngr-basic" } , 
    { label : "welcome" , path : "/ngr-welcome" } ,
    { label : "autres" , 
      children : [
        { label : "login" , path : "/ngr-login" } ,
        { divider : true },
        { label : "produit" , path : "/ngr-produit" },
        { label : "conversion" , path : "/ngr-conversion" },
        { label : "admin-devise" , path : "/ngr-admin-devise" } 
      ]
    }
    ];

  nbProdPrixInferieurSeuilMaxi : number = 0;

  actualiserNbProd(prixMaxi : number){
    this.produitService.rechercherNombreProduitSimu$(prixMaxi)
    .subscribe((nbProd) => { this.nbProdPrixInferieurSeuilMaxi = nbProd;});
  }

  //injection de dépendance par constructeur
  constructor(public preferencesService : PreferencesService ,
    private produitService : ProduitService){
      console.log("dans constructeur : titre="+this.titre);
      this.produitService.seuilMaxiObservable.subscribe
      (
      (nouveauSeuil)=>{ this.actualiserNbProd(nouveauSeuil);}
      );
}
 

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit, titre="+this.titre);
  }
  


}
