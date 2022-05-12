import { Component, OnInit } from '@angular/core';
import { CalcularInvestimentoService } from '../calcular-investimento.service';
import { FormGroup, FormBuilder, Validators  } from  '@angular/forms';

@Component({
  selector: 'app-calcular-investimento',
  templateUrl: './app-calcular-investimento.component.html',
  styleUrls: ['./app-calcular-investimento.component.scss']
})
export class AppCalcularInvestimentoComponent implements OnInit {

  constructor(private calcularInvestimentoService : CalcularInvestimentoService,
    private formBuilder: FormBuilder) { }
    
  ngOnInit(): void {
    this.createCalcularForm();
  }

  get f(){
    return this.CalcularForm.controls;
  }

  CalcularForm!: FormGroup;
  ValorFinalBruto: any;
  ValorFinalLiquido : any;
  ValorImposto : any;
  valorInicial : any;
  mesesInvestimento : any;
  tipoInvestimento : any;

  createCalcularForm(){
    this.CalcularForm = this.formBuilder.group({
      valorInvestimento: [null, Validators.required],  
      mesesInvestimento: [null, Validators.required],
      tipoInvestimento: [null, Validators.required]
    });
  }

  onSubmit() {
    this.valorInicial = this.CalcularForm.get("valorInvestimento")?.value;
    this.mesesInvestimento = this.CalcularForm.get("mesesInvestimento")?.value;
    this.tipoInvestimento = this.CalcularForm.get("tipoInvestimento")?.value;

    this.Calcular();
  }

  Calcular()
  {
    this.calcularInvestimentoService.CalcularInvestimento(this.valorInicial, this.mesesInvestimento, this.tipoInvestimento)
    .subscribe(
      data => {
        this.ValorFinalBruto = data;
        this.calcularInvestimentoService.CalcularImposto(this.ValorFinalBruto - this.valorInicial, this.mesesInvestimento)
        .subscribe(
          data => {
            this.ValorImposto = data
            this.ValorFinalLiquido = this.ValorFinalBruto - this.ValorImposto;
          }  
        );
      }
    );
  }
}
