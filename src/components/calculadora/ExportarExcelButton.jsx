import React from "react";
import { utils, writeFile } from "xlsx";

export default function ExportarExcelButton({ nombreTabla, nombreArchivo }) {
  const exportarExcel = () => {
    const table = document.getElementById(nombreTabla);
    const wb = utils.table_to_book(table, { sheet: "Sheet1" });
    writeFile(wb, nombreArchivo + ".xlsx");
  };

  return (
    <div className="mb-3">
      <button onClick={exportarExcel} className="btn btn-success">
        Exportar a Excel
      </button>
    </div>
  );
}
