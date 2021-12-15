import React, { useRef, useEffect } from 'react'; 
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddPersonForm.css";


function AddPersonForm(props) {
    const { register, handleSubmit, setFocus, reset, formState: { errors }} = useForm();
    const currentImage = useRef(null)
    useEffect(()=> {
      currentImage.current = null;
    })

    const notifyContactExist = (name,last="") => {
      toast.error(`${name} ${last} is alredy exist`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
      })
    }

    const notifyContactAdded = (name,last="") => {
      toast.success(`${name} ${last} is addes successfuly!`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
      })
    }

    const uploadImageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          currentImage.current = reader.result;
        }
        if (reader.readyState === 1) {
          return;
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    return (
     <React.Fragment>
      <div className="form-container">
          <form
            onSubmit={handleSubmit((new_person) => {   
              new_person["id"] = Math.random(); // gan new id
              new_person["image"] = currentImage.current ? currentImage.current : "https://image.shutterstock.com/image-vector/people-person-icon-modern-flat-260nw-1691909635.jpg"
              let listArray = JSON.parse(localStorage.getItem('persons_list'));          
              const found = listArray.some(el => el.phone === new_person.phone); // check by phone if person alrady exsist in array      
              if (!found) {
                listArray.push(new_person);
                localStorage.setItem('persons_list', JSON.stringify(listArray));
                notifyContactAdded(new_person.firstName,new_person.lastName);
                reset();
                setFocus("firstName");
                props.setNewContactAddedToggle(!props.newContactAddedToggle);
                props.setShowForm(false)
              }
              if (found) {
                notifyContactExist(new_person.firstName,new_person.lastName);
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
          <label htmlFor="image">Upload image:</label>
          <input 
           {...register('image')}
           id="image" 
           name="image" 
           type="file"
           onChange={uploadImageHandler} />
          <input type="submit" value="Add Person" />
        </form>
      </div> 
    </React.Fragment> 
    );
}

export default AddPersonForm;