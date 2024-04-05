import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";


const Addevent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    city:''
  });

  const handleChange = (e) => {
    //console.log(e.target.value)
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    e.preventDefault();

        if (!formData.name) 
        {
          alert('Please enter event name.');
          return;
        }

         if (!formData.date) 
         {
           alert('Please enter date.');
           return;
         }

        if (!formData.city) 
        {
          alert('Please enter city.');
          return;
        }
        try {
             const response = await axios.post('http://localhost:5000/submitEventData', formData);
             console.log(response.data);
             // Reset form after successful submission
             setFormData({ name: '', date: '', city:'' });
             onClose();
             alert('Your Event has been added!');
            } catch (error) {
              console.error('Error submitting form data:', error);
           }
       // console.log(formData);
  };

  return (
    < div className="">
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="bg-gray-500">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
          <div className="relative p-0 mt-10 w-1/2">
          <label className="absolute top-0 transition duration-200 text-base text-gray-400" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="font-sans w-full border-0 border-b-2 border-gray-400 outline-none text-white text-lg py-7 bg-transparent transition duration-200 placeholder-transparent"
            style={{
              boxShadow: 'none'
            }}
            value={formData.name}
            onChange={handleChange}
          />
          </div>
          <div className="relative p-0 mt-10 w-1/2">
          <label className="absolute top-0 transition duration-200 text-base text-gray-400" htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="font-sans w-full border-0 border-b-2 border-gray-400 outline-none text-white text-lg py-7 bg-transparent transition duration-200 placeholder-transparent"            
            style={{
              boxShadow: 'none'
            }}
            value={formData.date}
            onChange={handleChange}
           />
          </div>
          <div className="relative p-0 mt-10 w-1/2">
          <label className="absolute top-0 transition duration-200 text-base text-gray-400" htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            className="font-sans w-full border-0 border-b-2 border-gray-400 outline-none text-white text-lg py-7 bg-transparent transition duration-200 placeholder-transparent"            
            style={{
              boxShadow: 'none'
            }}
            value={formData.city}
            onChange={handleChange}
            />
           </div>
           <button onClick={handleSubmit} className="bg-gray-400 text-white shadow-md">Submit</button>
           <button onClick={onClose} className="bg-red-400 text-white shadow-md justify-right">Cancel</button>
      </form>
      </div>
    </Modal>
    </div>
  );
};

export default Addevent;
