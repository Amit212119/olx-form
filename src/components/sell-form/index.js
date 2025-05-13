import React, { useRef, useState } from 'react';
import './index.css';
import { TbPhotoUp } from 'react-icons/tb';

const SellForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedType, setSelectedType] = useState('');
  const [selectedBHK, setSelectedBHK] = useState('');
  const [selectedBath, setSelectedBath] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [furnished, setFurnished] = useState('');
  const [listedBy, setListedBy] = useState('');
  const wordLimits = {
    title: 70,
    description: 4000,
    name: 30,

  };

  const initialValue = {
    name: '',
    areaSqft: '',
    carpetArea: '',
    title: '',
    description: '',
    state: '',
    price: '',
    type: '',
    bhk: '',
    project: '',
    bath: '',
    furnish: '',
    listed: '',
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
    project: '',
    bath: '',
    furnish: '',
    listed: '',
  };
  const [mandatoryData, setMandatoryData] = useState(initialValue);
  const [formErr, setFormErr] = useState(initialErrValue);

  const handleTypeSelect = (value) => {
    setSelectedType(value);
    setMandatoryData((prev) => ({ ...prev, type: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, type: '' }));
  };
  const handleBHK = (value) => {
    setSelectedBHK(value);
    setMandatoryData((prev) => ({ ...prev, bhk: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, bhk: '' }));
  };
  const handleBath = (value) => {
    setSelectedBath(value);
    setMandatoryData((prev) => ({ ...prev, bath: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, bath: '' }));
  };
  const handleFurnished = (value) => {
    setFurnished(value);
    setMandatoryData((prev) => ({ ...prev, furnish: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, furnish: '' }));
  };
  const handleProjectStatus = (value) => {
    setSelectedProject(value);
    setMandatoryData((prev) => ({ ...prev, project: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, project: '' }));
  };
  const handleListedBy = (value) => {
    setListedBy(value);
    setMandatoryData((prev) => ({ ...prev, listed: value }));
    setFormErr((prevErrors) => ({ ...prevErrors, listed: '' }));
  };
  const fileInputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleClick = (index) => {
    fileInputRefs[index].current.click();
  };
  const fileInputRef = useRef();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (wordLimits[name]) {
      const wordCount = value.trim().length;
      if (wordCount > wordLimits[name]) return;
    }
    setMandatoryData({
      ...mandatoryData,
      [name]: value,
    });
    setFormErr((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  const validation = () => {
    const errors = {};
    if (!mandatoryData.areaSqft) {
      errors.areaSqft = 'Super Builtup area sqft is mandatory. Please complete the required field.';
    }
    if (!mandatoryData.carpetArea) {
      errors.carpetArea = 'Carpet Area sqft is mandatory. Please complete the required field.';
    }
    if (!mandatoryData.type.trim()) {
      errors.type = 'Type is mandatory. Please complete the required field.';
    }
    if (!mandatoryData.bhk) {
      errors.bhk = 'This field is required';
    }
    if (!mandatoryData.title.trim()) {
      errors.title = 'A minimum length of 10 characters is required. Please edit the field.';
    }
    if (!mandatoryData.name.trim()) {
      errors.name = 'This field is required';
    }
    if (!mandatoryData.description.trim()) {
      errors.description = 'A minimum length of 10 characters is required. Please edit the field.';
    }
    if (!mandatoryData.price) {
      errors.price = 'This field is required';
    }
    if (!mandatoryData.state.trim()) {
      errors.state = 'This field is mandatory.';
    }
    setFormErr(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const isValid = validation();
    if (!isValid) return;

    console.log('Form Submitted:', mandatoryData);
    setMandatoryData(initialValue);
    setFormErr(initialErrValue);
    setSelectedType('');
    setSelectedBHK('');
    setSelectedBath('');
    setIsSubmitted(false);
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
          <label
            htmlFor='name'
            className={formErr.type ? 'error-label' : ''}>
            Type*
          </label>
          <div className='button-group'>
            <button
              type='button'
              className={`radio-button ${selectedType === 'Flats / Apartments' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Flats / Apartments')}>
              Flats / Apartments
            </button>
            <button
              type='button'
              className={`radio-button ${selectedType === 'Independent/Builder Floors' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Independent/Builder Floors')}>
              Independent/Builder Floors
            </button>
            <button
              type='button'
              className={`radio-button ${selectedType === 'Farm House' ? 'selected' : ''}`}
              onClick={() => handleTypeSelect('Farm House')}>
              Farm House
            </button>
            <button
              type='button'
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
              type='button'
              className={`number-radio-button ${selectedBHK === 1 ? 'selected' : ''}`}
              onClick={() => handleBHK(1)}>
              1
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBHK === 2 ? 'selected' : ''}`}
              onClick={() => handleBHK(2)}>
              2
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBHK === 3 ? 'selected' : ''}`}
              onClick={() => handleBHK(3)}>
              3
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBHK === 4 ? 'selected' : ''}`}
              onClick={() => handleBHK(4)}>
              4
            </button>
            <button
              type='button'
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
              type='button'
              className={`number-radio-button ${selectedBath === 1 ? 'selected' : ''}`}
              onClick={() => handleBath(1)}>
              1
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBath === 2 ? 'selected' : ''}`}
              onClick={() => handleBath(2)}>
              2
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBath === 3 ? 'selected' : ''}`}
              onClick={() => handleBath(3)}>
              3
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBath === 4 ? 'selected' : ''}`}
              onClick={() => handleBath(4)}>
              4
            </button>
            <button
              type='button'
              className={`number-radio-button ${selectedBath === '4+' ? 'selected' : ''}`}
              onClick={() => handleBath('4+')}>
              4+
            </button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Furnishing</label>
          <div className='button-group'>
            <button
              onClick={() => handleFurnished('Furnished')}
              type='button'
              className={`radio-button ${furnished === 'Furnished' ? 'selected' : ''}`}>
              Furnished
            </button>
            <button
              onClick={() => handleFurnished('Semi-Furnished')}
              type='button'
              className={`radio-button ${furnished === 'Semi-Furnished' ? 'selected' : ''}`}>
              Semi-Furnished
            </button>
            <button
              onClick={() => handleFurnished('Unfurnished')}
              type='button'
              className={`radio-button ${furnished === 'Unfurnished' ? 'selected' : ''}`}>
              Unfurnished
            </button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Project Status</label>
          <div className='button-group'>
            <button
              onClick={() => handleProjectStatus('New Launch')}
              type='button'
              className={`radio-button ${selectedProject === 'New Launch' ? 'selected' : ''}`}>
              New Launch
            </button>
            <button
              onClick={() => handleProjectStatus('Ready to Move')}
              type='button'
              className={`radio-button ${selectedProject === 'Ready to Move' ? 'selected' : ''}`}>
              Ready to Move
            </button>
            <button
              onClick={() => handleProjectStatus('Under Construction')}
              type='button'
              className={`radio-button ${selectedProject === 'Under Construction' ? 'selected' : ''}`}>
              Under Construction
            </button>
          </div>
        </div>
        <div className='single-field-container'>
          <label htmlFor='name'>Listed by</label>
          <div className='button-group'>
            <button
              onClick={() => handleListedBy('Builder')}
              type='button'
              className={`radio-button ${listedBy === ' Builder' ? 'selected' : ''}`}>
              Builder
            </button>
            <button
              onClick={() => handleListedBy('Dealer')}
              type='button'
              className={`radio-button ${listedBy === 'Dealer' ? 'selected' : ''}`}>
              Dealer
            </button>
            <button
              onClick={() => handleListedBy('Owner')}
              type='button'
              className={`radio-button ${listedBy === 'Owner' ? 'selected' : ''}`}>
              Owner
            </button>
          </div>
        </div>
        <div className='single-field-container'>
          <label
            htmlFor='name'
            className={formErr.areaSqft ? 'error-label' : ''}>
            Super Builtup area sqft *
          </label>
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
          <label
            htmlFor='name'
            className={formErr.carpetArea ? 'error-label' : ''}>
            Carpet Area sqft *
          </label>
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
            <button
              type='button'
              className='number-radio-button'>
              0
            </button>
            <button
              type='button'
              className='number-radio-button'>
              1
            </button>
            <button
              type='button'
              className='number-radio-button'>
              2
            </button>
            <button
              type='button'
              className='number-radio-button'>
              3
            </button>
            <button
              type='button'
              className='number-radio-button'>
              3+
            </button>
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
          <label
            htmlFor='name'
            className={formErr.title ? 'error-label' : ''}>
            Add title*
          </label>
          <input
            type='text'
            id='name'
            name='title'
            className='input-field'
            onChange={handleChange}
            value={mandatoryData.title}
          />
          {formErr.title && <span className='error-text'>{formErr.title}</span>}
          <p className='word-counter'>
            {mandatoryData.title.trim() === '' ? 0 : mandatoryData.title.trim().length} / {wordLimits.title}
          </p>
        </div>
        <div className='single-field-container'>
          <label
            htmlFor='name'
            className={formErr.description ? 'error-label' : ''}>
            Description*
          </label>
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
          <p className='word-counter'>
            {mandatoryData.description.trim() === '' ? 0 : mandatoryData.description.trim().length} /
            {wordLimits.description}
          </p>
        </div>
        <hr />
        <div className='single-field-container'>
          <h3>SET A PRICE</h3>
          <label
            htmlFor='name'
            className={formErr.price ? 'error-label' : ''}>
            Price*
          </label>
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
          <label
            htmlFor='name'
            className={formErr.state ? 'error-label' : ''}>
            State*
          </label>
          <select
            id='state'
            name='state'
            className={`input-field ${formErr.state ? 'error-select' : ''}`}
            onChange={handleChange}
            value={mandatoryData.state}>
            <option value=''>Select a State</option>
            <option value='Andhra Pradesh'>Andhra Pradesh</option>
            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
            <option value='Assam'>Assam</option>
            <option value='Bihar'>Bihar</option>
            <option value='Chhattisgarh'>Chhattisgarh</option>
            <option value='Delhi'>Delhi</option>
            <option value='Goa'>Goa</option>
            <option value='Gujarat'>Gujarat</option>
            <option value='Haryana'>Haryana</option>
            <option value='Himachal Pradesh'>Himachal Pradesh</option>
            <option value='Jharkhand'>Jharkhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
            <option value='Madhya Pradesh'>Madhya Pradesh</option>
            <option value='Maharashtra'>Maharashtra</option>
            <option value='Manipur'>Manipur</option>
            <option value='Meghalaya'>Meghalaya</option>
            <option value='Mizoram'>Mizoram</option>
            <option value='Nagaland'>Nagaland</option>
            <option value='Odisha'>Odisha</option>
            <option value='Punjab'>Punjab</option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Sikkim'>Sikkim</option>
            <option value='Tamil Nadu'>Tamil Nadu</option>
            <option value='Telangana'>Telangana</option>
            <option value='Tripura'>Tripura</option>
            <option value='Uttar Pradesh'>Uttar Pradesh</option>
            <option value='Uttarakhand'>Uttarakhand</option>
            <option value='West Bengal'>West Bengal</option>
          </select>
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
                className='name-input-field'
                onChange={handleChange}
                value={mandatoryData.name}
              />
              {formErr.name && <span className='error-text'>{formErr.name}</span>}
              <p className='name-word-counter'>
                {mandatoryData.name.trim() === '' ? 0 : mandatoryData.name.trim().length} / {wordLimits.name}
              </p>
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
