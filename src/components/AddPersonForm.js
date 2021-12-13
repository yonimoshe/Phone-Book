import React from 'react'; 
import { useForm } from 'react-hook-form';
import "./AddPersonForm.css";


function AddPersonForm(props) {
    const { register, handleSubmit, setFocus, reset, formState: { errors }} = useForm();

    console.log('<AddPersonForm /> component rendered');
    return (
     <React.Fragment>
      <div className="form-container">
          <form
            onSubmit={handleSubmit((new_person) => {   
              new_person["id"] = Math.random(); // gan new id
              new_person["image"] = "https://image.shutterstock.com/image-vector/people-person-icon-modern-flat-260nw-1691909635.jpg" // gan photo placeholder
              let listArray = JSON.parse(localStorage.getItem('persons_list'));          
              const found = listArray.some(el => el.phone === new_person.phone); // check by phone if person alrady exsist in array      
              if (!found) {
                listArray.push(new_person);
                localStorage.setItem('persons_list', JSON.stringify(listArray));
                alert(`${new_person.firstName} ${new_person.lastName} Added`);
                reset();
                setFocus("firstName");
                props.setNewContactAdded(true);
              }
              if (found) {
                alert(`Ooops.. ${new_person.firstName} ${new_person.lastName} is already exist`);
              }
           })}
          >
          <label htmlFor="firstName">First Name:</label>
          <input
            {...register("firstName", { required: "This is required" })}
            id="firstName"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}

          <label htmlFor="lastName">Last Name:</label>
          <input
            {...register("lastName", {
              minLength: { value: 2, message: "Last name should be long then 2 charectrs" }
            })}
            id="lastName"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}

          <label htmlFor="phone">Phone:</label>
          <input
            {...register("phone", {
              required: "This is required",
              pattern: { value: /^\d*\.?\d*$/ , message: "Numbers Only"},
              minLength: { value: 10, message: "Phone should containe 10 digits" },
              maxLength: { value: 10, message: "Phone should containe 10 digits" }
            })}
            id="phone"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
          <input type="submit" value="Add Person" />
        </form>
      </div> 
    </React.Fragment> 
    );
}

export default AddPersonForm;