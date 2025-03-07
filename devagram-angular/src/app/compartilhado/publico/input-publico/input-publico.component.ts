import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-publico',
  templateUrl: './input-publico.component.html',
  styleUrls: ['./input-publico.component.scss']
})
export class InputPublicoComponent implements OnInit {

  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public tipo?: string;
  @Input() public imagem?: string;
  @Input() public placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }

  public aoModificarCampo(event: any): void {
    this.referenciaFormulario?.setValue(event);
    this.referenciaFormulario?.markAsDirty();
  }

  public obterMensagemErro(): string {
    if(!this.referenciaFormulario?.errors) {
      return '';
    }
    if(this.referenciaFormulario?.errors['required']) {
      
      return 'Campo obrigatório!';
    }
    return 'Problema no preenchimento do campo!';
  }


}
