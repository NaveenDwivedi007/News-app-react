import React, { useEffect, useState } from 'react';
import './Feedback.css';
import validator from 'validator';
const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


const FeedBack = ()=>{

    const [email,setEmail] = useState("")
    const [emailErr,setEmailErr] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState("")
    const [phoneErr,setPhoneErr] = useState(null)
    
    useEffect(()=>{
        if( !validator.isEmail(email)){
            setEmailErr("Enter Valid email")
        }else{
            setEmailErr(null)
        }
        if (phoneNumber.length === 10) {
            setPhoneErr(null)
        }else{
            setPhoneErr("Enter Valid Phone Number")
        }
    },[email,phoneNumber])
 return(
     <div className="feedback-form-container">
        <h2>Thank you so much for tacking your time!</h2>
        <p>Please Provide the below detail!</p>
        <form onSubmit={(e)=>{
            return e.preventDefault();
        }} >
            <label>
                First Name:
                <input type="text" placeholder="John" />
            </label>
            <label>
                Last Name:
                <input type="text" placeholder="Doe" />
            </label>
            <label>
                Country:
                <input list="country" type="text" placeholder="Select your Country" />
                <datalist id="country">
                {
                    country_list.map((x)=>{
                        return(
                            <option
                            key={x}
                             value={x}/>
                        )
                    })
                }
                </datalist>
            </label>
            <label>
                Address:
                <textarea type="text" placeholder="Enter Your Postal Address" />
            </label>
            <label>
                Email ID:
                <input type="text" placeholder="example@sample.com" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <p className="err">{emailErr}</p>
            </label>
            <label>
                Phone Number
                <span className="phone-number-input">
                        <input className="country-code" type="number" placeholder="+91" />
                        <input type="number" placeholder="123456789" value={phoneNumber} onChange={(e)=>{
                            setPhoneNumber(e.target.value)
                        }} />
                </span>
                <p className="err">{phoneErr}</p>
            </label>
            <button className="feedback-btn" >Submit Feedback </button>
        </form> 
    </div>
 )
}

export default FeedBack