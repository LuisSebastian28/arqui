import Facturacion from "./telecomunicacion.js";

describe("teleco", () => {
  const factura = new Facturacion();

  it("Tipo de pago", () => {
    expect(factura.TypePayment("postpago")).toEqual(true);
    expect(factura.TypePayment("prepago")).toEqual(true);
    expect(factura.TypePayment("cuotas")).toEqual(false);
  });

  it("Tipo de plan postpago", () => {
    expect(factura.planPostpago("WAO")).toEqual(200);
    expect(factura.planPostpago("WAP")).toEqual("Not found");
  });

  it("Tipo de plan postpago", () => {
    expect(factura.planPrepago("Libre")).toEqual(true);
    expect(factura.planPrepago("Familia")).toEqual(true);
    expect(factura.planPrepago("CANINO XD")).toEqual(false);

  });

  it("Tarifas de plan postpago A medida", () => {
    expect(factura.planPostpagoAMedida("S")).toEqual(50);
    expect(factura.planPostpagoAMedida("M")).toEqual(100);
    expect(factura.planPostpagoAMedida("L")).toEqual(150);
    expect(factura.planPostpagoAMedida("XXL")).toEqual("Not found");
  });

  it("Tarifas de plan add on", () => {
    expect(factura.addOn("XS")).toEqual(10);
    expect(factura.addOn("XML")).toEqual("Not found");
  });
});