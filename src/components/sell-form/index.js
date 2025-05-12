import React, { useRef, useState } from 'react';
import './index.css';
import { TbPhotoUp } from 'react-icons/tb';

const SellForm = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedBHK, setSelectedBHK] = useState('');
    const [selectedBath, setSelectedBath] = useState('');

  const initialValue = {
    name: '' ,
    areaSqft: '',
    carpetArea: '',
    title: '',
    description: '',
    state: '',
    price: '',
    type: '',
    bhk: '',
  };
  const initialErrValue = {
    name: '',
    areaSqft: '',
    carpetArea: '',
    title: '',
    description: '',
    state: '',
    price: '',
    type: '',
    bhk: '',
  };
  const [mandatoryData, setMandatoryData] = useState(initialValue);
  const [formErr, setFormErr] =useState(initialErrValue);

    const handleTypeSelect = (value) => {
      setSelectedType(value);
      setMandatoryData((prev) => ({ ...prev, type: value }));
      setFormErr((prevErrors) => ({ ...prevErrors, type: '' }));
    };
    const handleBHK = (value) => {
      setSelectedBHK(value);
      setMandatoryData((prev) => ({...prev, bhk: value}))
      setFormErr((prevErrors) => ({ ...prevErrors, type: '' }));
    }
    const handleBath = (value) => {
      setSelectedBath(value);
    }
  const fileInputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleClick = (index) => {
    fileInputRefs[index].current.click();
  };
    const fileInputRef = useRef();

    const handleIconClick = () => {
      fileInputRef.current.click();
    };
    const handleChange = (e) => {
      const{name, value} =  e.target;
      setMandatoryData({
        ...mandatoryData,
        [name]: value,
      })
      setFormErr((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
    const validation = () => {
      const errors= {}
      if(!mandatoryData.areaSqft){
        errors.areaSqft = 'This field is required';
      }
      if(!mandatoryData.carpetArea.trim()){
        errors.carpetArea = 'This field is required';
      }
      if(!mandatoryData.type.trim()){
        errors.type = 'This field is required';
      }
      if(!mandatoryData.bhk){
        errors.bhk = 'This field is required';
      }
      if(!mandatoryData.title.trim()){
        errors.title = 'This field is required';
      }
      if(!mandatoryData.name.trim()){
        errors.name = 'This field is required';
      }
      if(!mandatoryData.description.trim()){
        errors.description = 'This field is required';
      }
      if(!mandatoryData.price){
        errors.price = 'This field is required';
      }
      if(!mandatoryData.state.trim()){
        errors.state = 'This field is required';
      }
        setFormErr(errors);
        return Object.keys(errors).length === 0;
      
    }
   const handleSubmit = (e) => {
     e.preventDefault();
     const isValid = validation();
     if (!isValid) return;

     console.log('Form Submitted:', mandatoryData);
     setMandatoryData(initialValue);
   };

  return (
    <div className='form-container'>
      <div className='form-main-heading'>POST YOUR AD</div>
      <div className='select-heading'>
        <span className='form-heading'>SELECTED CATEGORY</span>
        <p>
          Properties / For Sale: Houses & Apartments <a href='/'>Change</a>
        </p>
      </div>
      <form
        className='form-field-container'
        onSubmit={handleSubmit}>
        <div>
          <span className='detail-heading'>INCLUDE SOME DETAILS</span>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Type*</label>
          <div className='button-group'>
            <button
              className={`radio-button ${selectedType === 'Flats / Apartments' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Flats / Apartments')}>
              Flats / Apartments
            </button>
            <button
              className={`radio-button ${selectedType === 'Independent/Builder Floors' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Independent/Builder Floors')}>
              Independent/Builder Floors
            </button>
            <button
              className={`radio-button ${selectedType === 'Farm House' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Farm House')}>
              Farm House
            </button>
            <button
              className={`radio-button ${selectedType === 'House & Villa' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('House & Villa')}>
              House & Villa
            </button>
          </div>
          {formErr.type && <span className='error-text'>{formErr.type}</span>}
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>BHK</label>
          <div className='button-group'>
            <button
              className={`number-radio-button ${selectedBHK === 1 ? 'selected' : ''}`}
              onClick={() => handleBHK(1)}>
              1
            </button>
            <button
              className={`number-radio-button ${selectedBHK === 2 ? 'selected' : ''}`}
              onClick={() => handleBHK(2)}>
              2
            </button>
            <button
              className={`number-radio-button ${selectedBHK === 3 ? 'selected' : ''}`}
              onClick={() => handleBHK(3)}>
              3
            </button>
            <button
              className={`number-radio-button ${selectedBHK === 4 ? 'selected' : ''}`}
              onClick={() => handleBHK(4)}>
              4
            </button>
            <button
              className={`number-radio-button ${selectedBHK === '4+' ? 'selected' : ''}`}
              onClick={() => handleBHK('4+')}>
              4+
            </button>
            {formErr.bhk && <span className='error-text'>{formErr.bhk}</span>}
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Bathrooms</label>
          <div className='button-group'>
            <button
             className={`number-radio-button ${selectedBath === 1 ? 'selected' : ''}`}
              onClick={() => handleBath(1)}>
              1
            </button>
            <button
             className={`number-radio-button ${selectedBath === 2 ? 'selected' : ''}`}
              onClick={() => handleBath(2)}>
              2
            </button>
            <button
             className={`number-radio-button ${selectedBath === 3 ? 'selected' : ''}`}
              onClick={() => handleBath(3)}>
              3
            </button>
            <button
             className={`number-radio-button ${selectedBath === 4 ? 'selected' : ''}`}
              onClick={() => handleBath(4)}>
              4
            </button>
            <button
             className={`number-radio-button ${selectedBath === '4+' ? 'selected' : ''}`}
              onClick={() => handleBath('4+')}>
              4+
            </button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Furnishing</label>
          <div className='button-group'>
            <button className='radio-button'>Furnished</button>
            <button className='radio-button'>Semi-Furnished</button>
            <button className='radio-button'>Unfurnished</button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Project Status</label>
          <div className='button-group'>
            <button className='radio-button'>New Launch</button>
            <button className='radio-button'>Ready to Move</button>
            <button className='radio-button'>Under Construction</button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Listed by</label>
          <div className='button-group'>
            <button className='radio-button'>Builder</button>
            <button className='radio-button'>Dealer</button>
            <button className='radio-button'>Owner</button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Super Builtup area sqft *</label>
          <input
            type='number'
            id='name'
            name='areaSqft'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.areaSqft}
          />
          {formErr.areaSqft && <span className='error-text'>{formErr.areaSqft}</span>}
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Carpet Area sqft *</label>
          <input
            type='number'
            id='name'
            name='carpetArea'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.carpetArea}
          />
          {formErr.carpetArea && <span className='error-text'>{formErr.carpetArea}</span>}
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Maintenance (Monthly)</label>
          <input
            type='number'
            id='name'
            name='name'
            className='input-field'
          />
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Total Floors</label>
          <input
            type='number'
            id='name'
            name='name'
            className='input-field'
          />
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Floor No</label>
          <input
            type='number'
            id='name'
            name='name'
            className='input-field'
          />
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Car Parking</label>
          <div className='button-group'>
            <button className='number-radio-button'>0</button>
            <button className='number-radio-button'>1</button>
            <button className='number-radio-button'>2</button>
            <button className='number-radio-button'>3</button>
            <button className='number-radio-button'>3+</button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Facing</label>
          <select className='selector-input-field'>
            <option>East</option>
            <option>West</option>
            <option>North</option>
            <option>South</option>
          </select>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Project Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className='input-field'
          />
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Add title*</label>
          <input
            type='text'
            id='name'
            name='title'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.title}
          />
          {formErr.title && <span className='error-text'>{formErr.title}</span>}
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Description*</label>
          <textarea
            id='name'
            name='description'
            className='textarea-field'
            rows='4'
            cols='50'
            onChange={handleChange}
            value={mandatoryData.description}
          />
          {formErr.description && <span className='error-text'>{formErr.description}</span>}
        </div>
        <hr />
        <div className='single-field-container'>
          <h3>SET A PRICE</h3>
          <label htmlFor='name'>Price*</label>
          <input
            type='text'
            id='name'
            name='price'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.price}
          />
          {formErr.price && <span className='error-text'>{formErr.price}</span>}
        </div>
        <hr />
        <div className='single-field-container'>
          <h3>UPLOAD 4 PHOTOS</h3>
          <div className='photo-field'>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className='photo-icon'
                onClick={() => handleClick(index)}>
                <TbPhotoUp size={40} />
                <input
                  type='file'
                  accept='image/*'
                  ref={fileInputRefs[index]}
                  style={{ display: 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className='single-field-container'>
          <label htmlFor='name'>State*</label>
          <input
            type='text'
            id='name'
            name='state'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.state}
          />
          {formErr.state && <span className='error-text'>{formErr.state}</span>}
        </div>
        <hr />
        <div className='single-field-container'>
          <h3>Review your details</h3>
          <div className='name-photo'>
            <div
              onClick={handleIconClick}
              style={{ cursor: 'pointer' }}>
              <TbPhotoUp size={80} />
              <input
                type='file'
                accept='image/*'
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
            <div className='single-field-container'>
              <label htmlFor='name'>Name*</label>
              <input
                type='text'
                id='name'
                name='name'
                className='input-field'
                onChange={handleChange}
                value={mandatoryData.name}
              />
              {formErr.name && <span className='error-text'>{formErr.name}</span>}
            </div>
          </div>
          <div className='phone-number'>
            <p>YOUR PHONE NUMBER</p>
            <p>6397212119</p>
          </div>
        </div>
        <hr />
        <div className='single-field-container'>
          <button
            className='post-button'
            type='submit'>
            Post now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellForm;
