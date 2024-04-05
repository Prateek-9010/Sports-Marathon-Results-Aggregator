import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "context/UserContext";

function Eventtable() {
   
    const navigate = useNavigate();
    const {data}=useContext(UserContext);
    

  return (
    <div className=" mt-8 font-sans flex justify-center">
          <table className="border-collapse mb-20 w-3/5">
        <thead>
          <tr className="">
            <th className="border-b border-black text-left p-10" >SR No.</th>
            <th className="border-b border-black text-left p-10" >Name</th>
            <th className="border-b border-black text-left p-10" >Date</th>
            <th className="border-b border-black text-left p-10" >City</th>
          </tr>
        </thead>
        <tbody>
               {data.map((item, index) => (
           <tr key={item[0]} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
             <td className="border-b border-black text-left p-10">{item[0]}</td>
             <td className="border-b border-black text-left p-10">
               <button onClick={() => {navigate("/result")}}>{item[2]}</button>
             </td>
             <td className="border-b border-black text-left p-10">{item[3]}</td>
             <td className="border-b border-black text-left p-10">{item[4]}</td>
           </tr>
            ))}       
        </tbody>
      </table>
          </div>
  )
}

export default Eventtable;