import { Component,  Input,  OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

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
        { label : "admin" , path : "..." }
      ]
    }
    ];

  constructor(public preferencesService : PreferencesService) { 
    //injection de dépendance
    console.log("dans constructor, titre="+this.titre);
  }
 

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit, titre="+this.titre);
  }
  


}
