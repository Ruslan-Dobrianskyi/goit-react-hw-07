import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";

const App = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Phonebook</h1>
      <ContactForm />
      {loading && <Loader />}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
