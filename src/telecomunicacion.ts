class Facturacion{
  constructor() {
  }

  TypePayment(type){
    if(type=="postpago"){
      return true
    }
    if(type=="prepago"){
      return true
    }
    return false
  }

  planPostpago(type){
    if(type=="WAO"){
      return 200
    }
    return "Not found"
  }

  planPrepago(categoria){
    if(categoria == "Libre" || categoria == "Familia"){
      return true
    }
    return false
  }

  planPostpagoAMedida(categoria){
    if(categoria=="S"){
      return 50;
    }
    if(categoria=="M"){
      return 100;
    }
    if(categoria=="L"){
      return 150;
    }
    return "Not found"
  }

  addOn(addons){
    if(addons=="XS"){
      return 10
    }
    return "Not found"
  }

}
export default Facturacion