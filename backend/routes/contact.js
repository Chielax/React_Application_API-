const express = require("express");
const router = express.Router();

let contacts = [
  {
    id: 1,
    name: "Jhoana Marie Sumalpong",
    email: "maimai@gmail.com",
    phone: "0978-901-2345",
  },
  {
    id: 2,
    name: "Mesrelle Cabadonga",
    email: "mesyy@gmail.com",
    phone: "0989-012-3456",
  },
  {
    id: 3,
    name: "Jhustine Anthonett Daarol",
    email: "jaijai@gail.com",
    phone: "0990-123-4567",
  },
  {
    id: 4,
    name: "Archiel Estoconing",
    email: "archielyyy@gail.com",
    phone: "0901-234-6754",
  },
  {
    id: 5,
    name: "Virlyn Sandialan",
    email: "virlyangg@gail.com",
    phone: "0991-123-7658",
  },
];

// Get all contacts
router.get("/", (req, res) => res.json(contacts));

// Add a contact
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { id: Date.now(), name, email, phone };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Delete a contact
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((contact) => contact.id !== parseInt(id));
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = router;
