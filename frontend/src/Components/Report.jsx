import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectForm from "../form/SelectForm";
import { FaPlus } from "react-icons/fa";
import { Button } from "antd";
import InputAutoCompleteForm from "../form/autoCompleteForm";
import SelectFormForMedicine from "../form/selectFormForMedicine";
import { MedicalCheckupOptions,DosageOptions,FrequencyOptions,MedicalSymptomsOptions } from "../constants/global";
const Treatment = () => {
    const {handleSubmit} = useForm();
    const [symptom,setSymptom] = useState([]);
    const [tests,setTests] = useState([]);
    const [medicineList,setMedicineList] = useState([{ id: 1 }]);

    const addField = (e) => {
        e.preventDefault();
        setMedicineList([...medicineList, { id: medicineList.length + 1 }])
    }
    return (
        <div className="w-100 mb-3 rounded p-3 bg-gray-g">
            <div className="text-center mb-2 d-flex justify-content-center">
                    <h5 className="border-success border-bottom w-25 pb-2 border-5">Report</h5>
                </div>
                <form className="row form-row" >
                    <div className="col-md-12">
                        <div className="card p-3 mb-3">
                          <h6 className="card-title text-secondary">Identify Disease & Symptoms</h6>
                           <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <div>
                                            <label>Symptom</label>
                                        </div>
                                        <SelectForm
                                            mode={true}
                                            options={MedicalSymptomsOptions}
                                            setSelectData={setSymptom}
                                        />
                                      <small className="form-text text-muted">Note : Type & Press enter to add new symptom</small>
                                  </div>
                                </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="card mb-2 p-3 mt-2">
                            <h6 className="card-title text-secondary">Medical Checkup</h6>
                            <div className="row form-row">
                                <div className="form-group mb-2 card-label">
                                    <label>Medical Checkup</label>
                                    <SelectForm
                                        mode={true}
                                        setSelectData={setTests}
                                        options={MedicalCheckupOptions}
                                    />
                                    <small className="form-text text-muted">Note : Type & Press enter to add new services</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card mb-2 p-3 mt-2">
                            <h6 className="card-title text-secondary">Medicine</h6>
                            {
                                medicineList?.map((item, index) => (
                                    <div className="row form-row mb-4 position-relative border border-success rounded m-2 p-2" key={index + 1}>
                                        <div className="col-md-6 mb-3">
                                            <label>Medicine Name</label>
                                            <div className="form-group mb-2">
                                                <InputAutoCompleteForm
                                                    id={item.id}
                                                    medicineList={medicineList}
                                                    setMedicineList={setMedicineList}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Dosage</label>
                                            <div className="form-group mb-2">
                                                <SelectFormForMedicine
                                                    id={item.id}
                                                    keyName={"dosage"}
                                                    options={DosageOptions}
                                                    medicineList={medicineList}
                                                    setMedicineList={setMedicineList}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Frequency</label>
                                            <div className="form-group mb-2">
                                                <SelectFormForMedicine
                                                    id={item.id}
                                                    keyName={"frequency"}
                                                    options={FrequencyOptions}
                                                    medicineList={medicineList}
                                                    setMedicineList={setMedicineList}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="mb-4" style={{ width: '120px' }}>
                            <Button type="primary" size='small' htmlType="button" onClick={addField} block icon={<FaPlus />}>
                                Add
                            </Button>
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <Button htmlType='submit' type="primary" size='large' onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </form>
        </div>
    );

}
export default Treatment;
