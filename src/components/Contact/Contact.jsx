import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({item}) => {
    const dispatch = useDispatch ();

    return (
      <div className={css.contact}>
        <div className={css.info}>
          <p className={css.name}>
            <FaUserAlt /> {item.name}
          </p>
          <p className={css.name}>
            {' '}
            <BsFillTelephoneFill /> {item.number}
          </p>
        </div>
        <div>
          <button className={css.button} onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </button>
        </div>
      </div>
    );
}