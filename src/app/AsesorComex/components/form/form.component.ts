import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  show: boolean = false;
  public CapturarSolicitud : string = "Capturar Solcitud"
  public ProcesoPendienteAsesorC : string = "Proceso Pendiente Asesor Comex"
  public EspecialistaComexRech : string = "Especialista Comex (Rechazos)"
  public ProcesoPendienteContraloria : string = "Proceso Pendiente Contraloría"
  public FondosDeFomento : string = "Fondos de Fomento"
  public EnviadaNafinet : string = "Enviada a Nafinet"
  public AprobadoNafinet : string = "Aprobado Nafinet"
  public RechaxoNafinet : string = "Rechazo Nafinet"
  public Reproceso : string = "Reproceso"

  fecha: Date = new Date();


  esconder: boolean = false;
  esconderF: boolean = true;
  esconderT: boolean = false;
  showModal: boolean = false;
  buc: string = "";
  nombreORazonSocial: string = "";
  ciudad: string = "";
  colonia: string = "";
  calleNumero: string = "";
  cp: string = "";
  segmento: string = "";
  sexo: string = "";
  entidadFed:string = "Seleccionar";
  munODele:string = "Seleccionar";

  mostrarSolicitudAutomatica: boolean = false;
  mostrarSolicitudSelectiva: boolean = false;
  mostrarSolicitudComexTMEC: boolean = false;
  mostrarContratoPyme: boolean = false;
  mostrarSolicitudTMEC: boolean = false;
  mostrarSolicitudTurismo: boolean = false;



  ventasTA: string = "";
  personalOcupado: string = "";
  sectorGeneral: string = "Seleccionar";
  segmentoBancomext: string = "";
  antiguedadAcreditado: string = "";
  propositoProyecto:string = "Seleccionar";
  porcentajeNacional: string = "";
  personaFisicaMoral:string = "Seleccionar";
  sexoAnexoInfo:string = "Seleccionar";
  actividadEconomica:string = "Seleccionar";
  porcentajeMercadoInterno: string = "";
  vigenciaTotalLinea:string = "";
  montoLinea:string = "";
  tipoCredito:string = "Seleccionar";
  destinoRecursos:string ="Seleccionar";
  codigoBien:string = "Seleccionar";
  tipoGarantia:string = "Seleccionar";
  entidadFinanciera:string = "Seleccionar";
  moneda:string ="Seleccionar";

  constructor() { }

  ngOnInit(): void {
    this.esconder;
  }


  mostrarAutomatica() {
    console.log("mostrar automatica");

    this.mostrarSolicitudAutomatica = true;
    this.mostrarSolicitudSelectiva = false;
  }


  mostrarSelectiva() {
    console.log("mostar selectiva");

    this.mostrarSolicitudSelectiva = true;
    this.mostrarSolicitudAutomatica = false;
  }
  mostrarComexTMEC() {
    this.mostrarSolicitudComexTMEC = true;
  }
  mostrarPYME() {
    this.mostrarContratoPyme = true;
  }
  mostrarTMEC() {
    this.mostrarSolicitudTMEC = true;
  }
  mostrarTurismo() {
    this.mostrarSolicitudTurismo = true;
  }


  mostrar() {
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTabla() {
    this.esconderT = true;
    console.log(this.esconderT)

  }

  mostrarContenido() {
    this.show = true;
  }

  resetBuc() {
    this.buc = "";
    let com = prompt('Ingresa un comentario por el rechazo del BUC', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resertNoRSocial() {
    this.nombreORazonSocial = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Nombre o Razon Social del acreditado', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resertEntidad() {
    this.entidadFed = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Entidad Federativa', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resertMunODel() {
    this.munODele = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Municipio o Delegacion', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetCiudad() {
    this.ciudad = "";
    let com = prompt('Ingresa un comentario por el rechazo de Ciudad', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetColonia() {
    this.colonia = "";
    let com = prompt('Ingresa un comentario por el rechazo de Colonia', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetcalleNumero() {
    this.calleNumero = "";
    let com = prompt('Ingresa un comentario por el rechazo de Calle y Numero', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetcp() {
    this.cp = "";
    let com = prompt('Ingresa un comentario por el rechazo de Codigo Postal', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetSegmento() {
    this.segmento = "";
    let com = prompt('Ingresa un comentario por el rechazo de Segmento', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetSexo() {
    this.sexo = "";
    let com = prompt('Ingresa un comentario por el rechazo de Sexo', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetVentasTA() {
    this.ventasTA = "";
    let com = prompt('Ingresa un comentario por el rechazo de Ventas Totales Anuales', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetPersonalOcupado() {
    this.personalOcupado = "";
    let com = prompt('Ingresa un comentario por el rechazo de Personal Ocupado', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resertSectorGeneral() {
    this.sectorGeneral = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Sector General', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetSegmentoBancomext() {
    this.segmentoBancomext = "";
    let com = prompt('Ingresa un comentario por el rechazo de Segmento Bancomext', "");
    alert(`Tu comentario es: ${com}.`);
  }

  resetAntiguedadAcreditado() {
    this.antiguedadAcreditado = "";
    let com = prompt('Ingresa un comentario por el rechazo de Antiguedad del Acreditado', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resertPropositoProyec() {
    this.propositoProyecto = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Proposito del Proyecto', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetPorcentajeNacional() {
    this.porcentajeNacional = "";
    let com = prompt('Ingresa un comentario por el rechazo de Porcentaje de Origen Nacional', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetPorcentajeMercadoInterno() {
    this, this.porcentajeMercadoInterno = "";
    let com =
    prompt('Ingresa un comentario por el rechazo de Porcentaje de la produccion destinada al Mercado Interno', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resertPersonaMF() {
    this, this.personaFisicaMoral = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Porcentaje de Persona Fisica o Moral', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resertSexoAnexoInformacion() {
    this, this.sexoAnexoInfo = "";
    let com = prompt('Ingresa un comentario por el rechazo de Sexo', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetVigenciaTotalLinea() {
    this.vigenciaTotalLinea = "";
    let com = prompt ('Ingresa un comentario por el rechazo de Vigencia Total de la Linea', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resertActividadEconomica() {
    this.actividadEconomica = "Seleccionar";
    let com = prompt('Ingresa un comentario por el rechazo de Actividad Economica', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetMontoLinea() {
    this.montoLinea = "";
    let com = prompt ('Ingresa un comentario por el rechazo de Monto de la Linea', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetTipoCredito() {
    this.tipoCredito = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de Tipo de Credito', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetDestinoRecursos() {
    this.destinoRecursos = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de destino de los Recursos', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetCodigoBien() {
    this.codigoBien = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de Codigo Bien', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetTipoGarantia() {
    this.tipoGarantia = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de Tipo de Garantia', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetEntidadFinanciera() {
    this.entidadFinanciera = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de Entidad Financiera', "");
    alert(`Tu comentario es: ${com}.`)
  }

  resetMoneda() {
    this.moneda = "Seleccionar";
    let com = prompt ('Ingresa un comentario por el rechazo de Moneda', "");
    alert(`Tu comentario es: ${com}.`)
  }


}
