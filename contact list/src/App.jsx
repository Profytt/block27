import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/ContactList.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}