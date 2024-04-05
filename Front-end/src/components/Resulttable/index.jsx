import React, {useContext} from "react";
import UserContext from "context/UserContext";


function resulttable() {

  const {eventData}=useContext(UserContext);


  return (
    <div className=" mt-8 font-sans flex justify-center">
          <table className="border-collapse mb-20 w-3/5">
        <thead>
          <tr className="">
            <th className="border-b border-black text-left p-10" >BIB No.</th>
            <th className="border-b border-black text-left p-10" >Name</th>
            <th className="border-b border-black text-left p-10" >Finished time</th>
            <th className="border-b border-black text-left p-10" >Rank</th>
          </tr>
        </thead>
        <tbody>
               {eventData.map((item, index) => (
           <tr key={item[0]} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
             <td className="border-b border-black text-left p-10">{item[0]}</td>
             <td className="border-b border-black text-left p-10">{item[2]}</td>
             <td className="border-b border-black text-left p-10">{item[3]}</td>
             <td className="border-b border-black text-left p-10">{item[4]}</td>
           </tr>
            ))}       
        </tbody>
      </table>
    </div>
  )
}

export default resulttable