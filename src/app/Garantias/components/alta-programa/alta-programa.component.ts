import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-programa',
  templateUrl: './alta-programa.component.html',
  styleUrls: ['./alta-programa.component.scss']
})
export class AltaProgramaComponent implements OnInit {
  public EmpresasComex : string = '9700-EMPRESAS COMEX';
  public PymeComex : string = '9699-PYME COMEX MXP AUTOMATICA';
  public GrandesEmpresas : string = '9701-GRANDES EMPRESAS COMEX';
  public Automotriz : string = '9702-AUTOMOTRIZ MXP USD COMEX';
  public Capex : string = '9703-CAPEX';
  public CEPyme : string = '9755-COMERCIO EXTERIOR PYME T-MEC EMP';
  public CEGrandes : string = '9754-COMERCIO EXTERIOR GRANDES EMPRESAS T-MEC';
  public Reactivacion : string = '9747-REACTIVACION ECONOMICA SECTOR HOTELERO';

  constructor() { }

  ngOnInit(): void {
  }

}
