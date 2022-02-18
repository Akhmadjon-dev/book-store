import React from 'react';
import StyInput from './styInput';
;


function Input(props) {

  const {name, value, type, label, placeholder, onChange, error, isSelect, isCategory, options} = props;

  if(isSelect) {
    return (
      <StyInput>
          <label className='input__label' htmlFor={name}>
              {label}
          </label>
          <select className='input' 
            onChange={onChange} 
            id={name} 
            name={name} 
            >
              <option>{ value }</option>
              { options?.map(item => (
                <option 
                  key={ item._id } 
                  value={ isCategory ? item.type : item._id }>{isCategory ? `${item.name}` :`${item.firstName} ${item.lastName}`}
                </option>
              )) }
            </select>
          {error && <div className="input__error">{error}</div>}
      </StyInput>
    );
  }
  return (
    <StyInput>
        <label className='input__label' htmlFor={name}>
            {label}
        </label>
        <input className='input' onChange={onChange} type={type} id={name} name={name} value={value} placeholder={placeholder}/>
        {error && <div className="input__error">{error}</div>}
    </StyInput>
  );
}

export default Input;