import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-publica',
  templateUrl: './pagina-publica.component.html',
  styleUrls: ['./pagina-publica.component.scss']
})
export class PaginaPublicaComponent implements OnInit {

  @Input() classeCssLogo: string = "";
  @Input() classeCssCustomizada: string = "";
  @Input() textoBotaoSubmit?: string;

    constructor() {}
  ngOnInit(): void {
    // Inicialização do componente
  }
  public aoSubmeter(){
    console.log("Submeteu o formulário");
  }

}