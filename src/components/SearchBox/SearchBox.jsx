import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch();
    const handleChange = evt => dispatch(filterName(evt.target.value));
    const value = useSelector(selectFilter);
    const id = useId();

    return (
        <div className={css.filter}>
            <label htmlFor={id}>Find contact by name</label>
            <input type="text"
                id={id}
                value={value}
                onChange={handleChange}
                className={css.input}
            />
        </div>
    );
};

export default SearchBox;