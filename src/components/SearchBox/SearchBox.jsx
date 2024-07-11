import css from './SearchBox.module.css';
import { setFilter, selectFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.searchBox}>
      <p>Name</p>
      <input
        className={css.input}
        type="text"
        name="username"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </div>
  );
};
