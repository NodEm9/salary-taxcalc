import React, { useState, useMemo } from "react";
import { ThemeContext } from "../../ThemeContext/theme-context";

function TaxData() {
  const [grossIncome, setGrossIncome] = useState("");
  const [incomeTax, setIncomeTax] = useState("");
  const [pensionTax, setPensionTax] = useState("");
  const [htInsurance, setHtInsurance] = useState("");
  const [unTax, setUnTax] = useState("");
  const [chTax, setChTax] = useState("");
  const [caInsurance, setcaInsurance] = useState("");
  const [list, setList] = useState([]);
  const [tax, setTax] = useState("");

  const _amount = grossIncome / 100;

  const taxWorkings = useMemo(() => {
    const _incaInsure = 0.1022 * 100;
    const _tax = _incaInsure * _amount;
    let incTax = setIncomeTax(parseFloat(_tax.toPrecision(5)));
    return incTax;
  }, [_amount]);

  const taxWorkings2 = useMemo(() => {
    const _pen_tax_rate = 0.093 * 100;
    const _tax = _pen_tax_rate * _amount;
    const _penTax = setPensionTax(parseFloat(_tax.toPrecision(5)));
    return _penTax;
  }, [_amount]);

  const taxWorkings3 = useMemo(() => {
    const _htInsure = 0.079 * 100;
    const _tax = _htInsure * _amount;
    const newResult = setHtInsurance(parseFloat(_tax.toPrecision(5)));
    let htIns = newResult;
    return htIns;
  }, [_amount]);

  const taxWorkings4 = useMemo(() => {
    const _unEmp = 0.012 * 100;
    const _tax = _unEmp * _amount;
    const newTax = setUnTax(parseFloat(_tax.toPrecision(5)));
    let unEmploy = newTax;
    return unEmploy;
  }, [_amount]);

  const taxWorkings5 = useMemo(() => {
    const _chuTax = 0.009196 * 100;
    const _tax = _chuTax * _amount;
    const newR = setChTax(parseFloat(_tax.toPrecision(5)));
    let chrTax = newR;
    return chrTax;
  }, [_amount]);

  const taxWorkings6 = useMemo(() => {
    const _caInsure = 0.01875 * 100;
    const _tax = _caInsure * _amount;
    let caInsure = setcaInsurance(parseFloat(_tax.toPrecision(5)));
    return caInsure;
  }, [_amount]);

  const store = useMemo(() => {
    setList([
      taxWorkings,
      taxWorkings2,
      taxWorkings3,
      taxWorkings4,
      taxWorkings5,
      taxWorkings6,
    ]);
  }, [
    taxWorkings,
    taxWorkings2,
    taxWorkings3,
    taxWorkings4,
    taxWorkings5,
    taxWorkings6,
  ]); // returns void

  const calculatedTaxes = 
  parseFloat(
    incomeTax + 
    pensionTax + 
    htInsurance + 
    unTax + 
    chTax + 
    caInsurance
  ).toPrecision(6);
  //Calculate 
  const netIncomeDerived = parseFloat(grossIncome - calculatedTaxes).toPrecision(6);

  function FuncList() {
    setGrossIncome("");
    if (_amount || store) {
      return (
        <ul>
          <div>
          <h3>BruttoEinkommen</h3>
          {
              <li className="li" key={list}>
                <span className="pre tax-name">Bruttoeinkommen </span>
                <span className="net-income">{grossIncome} €</span>
              </li>
            }
            <h3>diese sind die Abzüge</h3>
            {
              <li className="li" key={incomeTax}>
                <span className="pre tax-name">Einkommensteuer </span>
                <span className="deductions">{incomeTax} €</span>
              </li>
            }
            {
              <li className="li" key={pensionTax}>
                <span className="pre tax-name">Rentenversicherung </span>
                <span className=" deductions">{pensionTax} €</span>
              </li>
            }
            {
              <li className="li" key={htInsurance}>
                <span className="pre tax-name">Krankenversicherung </span>
                <span className=" deductions">{htInsurance} €</span>
              </li>
            }
            {
              <li className="li" key={unTax}>
                <span className="pre tax-name">Abeitlosenversicherung </span>
                <span className="deductions">{unTax} €</span>
              </li>
            }
            {
              <li className="li" key={chTax}>
                <span className="pre tax-name">Kirchensteuer </span>
                <span className="deductions">{chTax} €</span>
              </li>
            }
            {
              <li className="li" key={caInsurance}>
                <span className="pre tax-name">Phlegeversicherung </span>
                <span className="deductions">{caInsurance} €</span>
              </li>
            }
            { 
              <li className="li">
                <span className="pre tax-name">Gesamtbeitrag </span>
                <span className=" deductions">-{calculatedTaxes} €</span>
              </li>
            }
            <h3 className="netIncome">Nettoeinkommen nach alle <em>Abzüge</em></h3>
            {
              <li className="li ">
                <span className="pre tax-name">Nettoeinkommen </span>
               <span className="net-income">{netIncomeDerived} €</span>
              </li>
            }
          </div>
        </ul>
      );
    }
  }

  return (
    <div>
      <div className="main">
          <input
            className="input1"
            placeholder="Enter Gross Income"
            value={grossIncome}
            onChange={(e) => setGrossIncome(e.target.value)}
          />
          <em className="help-word">Check taxes on a specific wage.</em>
          <button className="btn" onClick={() => setTax(FuncList)}>
            Get Tax
          </button>
      </div>
      <div> {tax}</div>
    </div>
  );
}

export default TaxData;
