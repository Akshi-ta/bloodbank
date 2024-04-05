import React, { useState } from 'react';
import axios from "axios";
import './style.css';
import '../index.css';
import {  useNavigate } from 'react-router-dom';

const MakeRequest = () => {
    const Navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [obj, setObj] = useState({
        pName: "",
        pAge: "",
        pGender: "",
        bloodGroup: "",
        pEmail: "",
        pPhone: "",
        pAddress: "",
        cName: "",
        cPhone: "",
        cGender: "",
        city: "",
        state: "",
        relation: "",
        message: "",
        cEmail: "",
        cAddress: ""
    })

    function doUpdate(event) {
        const { name, value } = event.target; // destructuring

        setObj((prevObj) => {
            const updatedObj = { ...prevObj, [name]: value };
            if (isChecked) {
                const { pName, pPhone, pGender, pEmail, pAddress } = updatedObj;
                return {
                    ...updatedObj,
                    cName: pName,
                    cPhone: pPhone,
                    cGender: pGender,
                    cEmail: pEmail,
                    cAddress: pAddress,
                };
            }

            return updatedObj;
        });
    }

    async function doSubmitdata()
    {
        const url = "http://localhost:2004/product/make-a-request";
        const servermesg = await axios.post(url , obj);
        if(servermesg.data.status === true)
        {
            alert("data submitted successfullyy");
        }
        else{
            alert(servermesg.data.err);
        }
        Navigate("/requests");
    }

    function doApply() {
        setIsChecked(!isChecked);
        if (isChecked == false) {
            const { pName, pPhone, pGender, pEmail, pAddress } = obj;
            setObj({
                ...obj,
                cName: pName,
                cPhone: pPhone,
                cGender: pGender,
                cEmail: pEmail,
                cAddress: pAddress,
            });
        }
        setIsInputDisabled(!isInputDisabled);
    }

    return (
        <div>
            <section id="request" className="request section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Make a Request</h2>
                    </div>

                    {JSON.stringify(obj)};
                    <div className="php-email-form">
                        <fieldset>
                            <legend>Patient:</legend>
                            <div className="row">
                                <div className="col-md-4 form-group mt-md-0">
                                    <input type="text" name="pName" value={obj.pName} onChange={doUpdate} className="form-control" id="pName" placeholder="Patient's Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="number" onChange={doUpdate} value={obj.pAge} className="form-control" min="0" max="500" name="pAge" id="pAge" placeholder="Patient's Age (in years)" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <select name="pGender" id="pGender" onChange={doUpdate} value={obj.pGender} className="form-select" required>
                                        <option value="">Patient's gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <select name="bloodGroup" id="bloodGroup" onChange={doUpdate} value={obj.bloodGroup} className="form-select" required>
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" onChange={doUpdate} className="form-control" value={obj.pEmail} name="pEmail" id="pEmail" placeholder="Patient's Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" onChange={doUpdate} className="form-control" name="pPhone" value={obj.pPhone} id="pPhone" placeholder="Patient's Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3 mt-md-0">
                                    <textarea className="form-control" onChange={doUpdate} name="pAddress" value={obj.pAddress} rows="3" placeholder="Patient's Address"></textarea>
                                    <div className="validate"></div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Coordinator:</legend>
                            <div className='flex'>
                                <p className='mt-2'>same as patient</p>
                                <input type='checkbox' className=' mx-2' id='checkbox' checked={isChecked} onChange={doApply}></input>

                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-md-0">
                                    <input type="text" name="cName" value={obj.cName} onChange={doUpdate} readOnly={isInputDisabled} className="form-control" id="cName" placeholder="Coordinator's Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" readOnly={isInputDisabled} onChange={doUpdate} className="form-control" name="cPhone" value={obj.cPhone} id="cPhone" placeholder="Coordinator's Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <select name="cGender" readOnly={isInputDisabled} onChange={doUpdate} id="cGender" value={obj.cGender} className="form-select" required>
                                        <option value="">Coordinator's gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group mt-md-0" >
                                    <input type="text" name="city" value={obj.city} onChange={doUpdate} className="form-control" id="city" placeholder="City of Tranfusion" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group mt-md-0">
                                    <input type="text" name="state" value={obj.state} onChange={doUpdate} className="form-control" id="state" placeholder="State of Tranfusion" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <select name="relation" readOnly={isInputDisabled} value={obj.relation} onChange={doUpdate} id="relation" className="form-select" required>
                                        <option value="">Select relation with patient</option>
                                        <option value="Self">Self</option>
                                        <option value="Family">Family</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className=" col-md-6 form-group mt-3 mt-md-0">
                                    <textarea className="form-control" name="message" onChange={doUpdate} value={obj.message} rows="1" placeholder="Specify relation (Optional)"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className=" form-group mt-3 mt-md-0">
                                    <input type="email" readOnly={isInputDisabled} onChange={doUpdate} className="form-control" name="cEmail" value={obj.cEmail} id="cEmail" placeholder="Coordinator's Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3 mt-md-0">
                                    <textarea className="form-control" onChange={doUpdate} readOnly={isInputDisabled} name="cAddress" value={obj.cAddress} rows="3" placeholder="Coordinator's Address"></textarea>
                                    <div className="validate"></div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your request has been submitted successfully. Please wait for response</div>
                        </div>
                        <div className="text-center"><button type="submit" onClick={doSubmitdata}>Submit request</button></div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default MakeRequest;