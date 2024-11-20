import React, { useState } from "react";
import axios from "axios";

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5003/api/contacts", { name, email, phone })
      .then((res) => onAdd(res.data))
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="p-8 bg-gradient-to-r from-purple-100 to-indigo-100 shadow-2xl rounded-2xl max-w-lg mx-auto border border-indigo-200">
      <h2 className="text-4xl font-semibold mb-8 text-indigo-800 text-center">Contact</h2>
      <input
        className="border border-gray-300 rounded-lg p-4 w-full mb-5 text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-500 transition duration-200 ease-in-out transform hover:scale-105"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-lg p-4 w-full mb-5 text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-500 transition duration-200 ease-in-out transform hover:scale-105"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-lg p-4 w-full mb-5 text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-500 transition duration-200 ease-in-out transform hover:scale-105"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
        Add Contact
      </button>
    </form>
  );
  
};

export default AddContact;
