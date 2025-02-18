import { useState } from "react";

import "./CarForm.css";

const CarForm = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");

  const [renavamNumber, setRenavamNumber] = useState("");
  const [fuelType, setFuelType] = useState("Gasolina");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validaLicensePlate = (e) => {
    const plate = e.target.value.replace(/[^A-Za-z0-9]/g, "");
    if (plate.length <= 7 && plate.toUpperCase().startsWith("B")) {
      setLicensePlate(plate);
    }
  };

  const validaManufactureYear = (e) => {
    const year = e.target.value.replace(/\D/g, "");
    if (year.length <= 4 && year.startsWith("1")) {
      setManufactureYear(year);
    }
  };

  const validaChassisNumber = (e) => {
    const chassis = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    if (chassis.length <= 17) setChassisNumber(chassis);
  };

  const validaRenavamNumber = (e) => {
    const renavam = e.target.value.replace(/\D/g, "");
    if (renavam.length <= 11) setRenavamNumber(renavam);
  };

  const validaVehicleColor = (e) => {
    const color = e.target.value.replace(/[^\D]/g, "");
    setVehicleColor(color);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="licensePlate">Placa:</label>
        <input
          type="text"
          id="licensePlate"
          className="license-plate"
          placeholder="BRA"
          value={licensePlate}
          onChange={(e) => validaLicensePlate(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="vehicleModel">Modelo:</label>
        <input
          type="text"
          id="vehicleModel"
          className="vehicle-model"
          value={vehicleModel}
          onChange={(e) => setVehicleModel(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="vehicleBrand">Marca:</label>
        <input
          type="text"
          id="vehicleBrand"
          className="vehicle-brand"
          value={vehicleBrand}
          onChange={(e) => setVehicleBrand(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="manufactureYear">Ano de Fabricação:</label>
        <input
          type="text"
          id="manufactureYear"
          className="manufacture-year"
          value={manufactureYear}
          onChange={(e) => validaManufactureYear(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="vehicleColor">Cor:</label>
        <input
          type="text"
          id="vehicleColor"
          className="vehicle-color"
          value={vehicleColor}
          onChange={(e) => validaVehicleColor(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="chassisNumber">Chassi:</label>
        <input
          type="text"
          id="chassisNumber"
          className="chassis-number"
          value={chassisNumber}
          onChange={(e) => validaChassisNumber(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="renavamNumber">Renavam:</label>
        <input
          type="text"
          id="renavamNumber"
          className="renavam-number"
          placeholder="00000000000"
          value={renavamNumber}
          onChange={(e) => validaRenavamNumber(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="fuelType-select">Tipo de Combustível:</label>
        <select
          id="fuelType-select"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="Gasolina">Gasolina</option>
          <option value="Alcool">Álcool</option>
          <option value="Flex">Flex</option>
          <option value="Elétrico">Elétrico</option>
        </select>
      </div>

      <div className="form-actions">
        <input type="button" value={"Retornar"} id="return" />
        <input type="submit" value={"Enviar"} id="submit" />
      </div>
    </form>
  );
};

export default CarForm;
