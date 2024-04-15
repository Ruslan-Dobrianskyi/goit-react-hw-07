import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { onChangeSearchStr } from "../../redux/filterSlice";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
const SearchBox = () => {
  const searchStr = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        placeholder="Search user..."
        value={searchStr}
        onChange={(e) => dispatch(onChangeSearchStr(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
