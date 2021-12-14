import React, {useState, useEffect} from 'react';
// import Modal from 'react-modal';
import './Person.css';

function Person(props) {
    // const [showImgsModal, setShowImgsModal] = useState(false);
    // const [profileImg, setProfileImg] = useState(null);
  
    // useEffect(()=> {
    //   console.log(props.id);
    //   if (profileImg) {
    //     let listArray = JSON.parse(localStorage.getItem('persons_list')); 
    //     let pos = listArray.map((e) =>  e.id ).indexOf(props.id); // position of the user i want to add in the array
    //     listArray[pos].image = profileImg;
    //     localStorage.setItem('persons_list', JSON.stringify(listArray));
    //     window.location.reload();
    //   }
    // },[profileImg])

    // const modalStyles = {
    //   content: {
    //     position: 'absolute',
    //     top: '20vh',
    //     left: '5vw',
    //     float: 'center',
    //     padding: 0,
    //     marging: '0',
    //     width: '90vw',
    //     height:'50vh'
    //   },
    // };

    // const openImgsModalHandler = () => {
    //   setShowImgsModal(true);
    // }
  
    // const closeImgsModalHandler = () => {
    //     setShowImgsModal(false);
    // }

    // const uploadImageHandler = (e) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setProfileImg(reader.result)
    //     }
    //     if (reader.readyState === 1) {
    //       return;
    //     }
    //   }
    //   reader.readAsDataURL(e.target.files[0]);
    //   setShowImgsModal(false);
    // }

    return (
      <>
        {/* <Modal ariaHideApp={false} isOpen={showImgsModal} style={modalStyles} onRequestClose={closeImgsModalHandler}>
           <input type="file" name="image-upload" id="input" accept="image/*" onChange={uploadImageHandler} />
        </Modal> */}

        <li className="person-li" key={props.id}>
          <div className="card">   
            <div> 
                <img src={props.image}
                     alt="icon"
                     width="50px"
                     height="50px"
                     className='profile-image'
                    //  onClick={openImgsModalHandler}
                />
            </div>  
            <div>
              <h3>{props.firstName} {props.lastName}</h3>
            </div>  
            <div>
              <a href={`tel:${props.phone}`}>{props.phone}</a>
            </div>
          </div>
        </li>
      </>
    );
}

export default Person;