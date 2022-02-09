import React from 'react';
import StyInput from './styInput';
;


function Input(props) {

  const {name, value, type, label, placeholder, onChange, error, isSelect, options} = props;

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
            value={value}>
              <option>select author</option>
              { options?.map(item => (
                <option 
                  key={ item._id } 
                  value={ item._id }>{`${item.firstName} ${item.lastName}`}
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