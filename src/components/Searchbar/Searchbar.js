import PropTypes from 'prop-types';
import React from 'react';

export class Searchbar extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {};

// niżej działający komponent funkcyjny

// import React from 'react';
// export const ContactList = ({ contacts, onRemoveContact }) => {
//   return (
//     <>
//       <ul>
//         {contacts.map(elem => (
//           <li className={css.list__elem} key={elem.id}>
//             <span className={css.name}>{elem.name}</span>
//             <span className={css.number}>{elem.number}</span>
//             <button
//               className={css.button}
//               type="Button"
//               onClick={() => onRemoveContact(elem.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   removeContact: PropTypes.func,
// };
