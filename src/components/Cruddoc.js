


import React, { useState } from 'react';

const CrudApp = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    nombre: '',
    apellido: '',
    sintomas: '',
    diagnostico: '',
    medicamento: '',
    doctor: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value
    }));
  };

  const addRecord = () => {
    setRecords([...records, newRecord]);
    setNewRecord({
      nombre: '',
      apellido: '',
      sintomas: '',
      diagnostico: '',
      medicamento: '',
      doctor: ''
    });
  };

  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  return (
    <div>
    
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={newRecord.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={newRecord.apellido}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="sintomas"
          placeholder="Síntomas"
          value={newRecord.sintomas}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="diagnostico"
          placeholder="Diagnóstico"
          value={newRecord.diagnostico}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="medicamento"
          placeholder="Medicamento"
          value={newRecord.medicamento}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="doctor"
          placeholder="Doctor"
          value={newRecord.doctor}
          onChange={handleInputChange}
        />
        <button onClick={addRecord}>Agregar</button>
      </div>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <p><strong>Nombre:</strong> {record.nombre} {record.apellido}</p>
            <p><strong>Síntomas:</strong> {record.sintomas}</p>
            <p><strong>Diagnóstico:</strong> {record.diagnostico}</p>
            <p><strong>Medicamento:</strong> {record.medicamento}</p>
            <p><strong>Doctor:</strong> {record.doctor}</p>
            <button onClick={() => deleteRecord(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
