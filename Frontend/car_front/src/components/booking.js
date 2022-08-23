import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FcApproval} from 'react-icons/fc'
import Navbar from './navbar'


const BookingHistory = () => {
    const [singledata, setSingledata] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:180/car/details")
            .then(result => {
                console.log(result.data)
                setSingledata(result.data.data);
            })
            .catch(e => {
                console.log("something went wrong!!")
            })
    }, [])
    return (
        <div >
          <Navbar/>
          <p>Car Name: {singledata?.firstname}  {singledata.isApproved? <FcApproval size={25}></FcApproval>:''}
           </p>
        </div>
    )
}
export default BookingHistory;