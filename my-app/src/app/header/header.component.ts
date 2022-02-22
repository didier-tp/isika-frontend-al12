import { Component,  Input,  OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string = "titre_par_defaut";

  constructor(public preferencesService : PreferencesService) { 
    //injection de dépendance
  }
 

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
  
  }
  


}
