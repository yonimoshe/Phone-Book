import React from 'react';
import Person from './Person';
import './PersonList.css';

function PersonsList(props) {
   let persons_list_element = <h2 className='not-found-msg'>No Contacts To Display</h2>
   let listArray = localStorage.getItem("persons_list") ?  JSON.parse(localStorage.getItem("persons_list")) : [];

   if (listArray.length > 0) {
    persons_list_element = <ul className="person-list-container">
                                {listArray && listArray.map((person) => (
                                <Person
                                    key={person.id}
                                    id={person.id}
                                    firstName={person.firstName}
                                    lastName={person.lastName}
                                    phone={person.phone}
                                    image={person.image}
                                />
                                ))}
                            </ul>
    }

    console.log('<PersonsList /> component rendered');
    return persons_list_element;
}

export default PersonsList;