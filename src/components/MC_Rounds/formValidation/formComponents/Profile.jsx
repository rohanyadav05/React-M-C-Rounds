import React from 'react'

const Profile = ({data, setData, error, setError}) => {
  console.log('error.name=', error.name);
  const handleChange = (e, fieldName) => {
    if((e.target.value === 'name' || e.target.value === 'email' ) &&  e.target.value.length <= 0){
      error.name = 'Name is not valid.'
    }
    if(e.target.value === 'age'  &&  e.target.value <= 18){
      error.name = 'Age is not valid.'
    }
    const newData = {...data, [fieldName] : e.target.value};
    setData(newData);
  }
  return (
    <>
    <div>
      <label className='label-header' >Name:</label>
      <input className='label-body' type='text' name='name' value={data.name}
      onChange={ (e) => handleChange(e, e.target.name)}
        />
        {error.name && (
          <span className='error-body'>{error.name}</span>
        )}
    </div>
    <div>
      <label className='label-header' >Age:</label>
      <input className='label-body' type='number' name='age' value={data.age}
      onChange={ (e) => handleChange(e, e.target.name)}
       />
       {error.age && (
          <span className='error-body'>{error.age}</span>
        )}
    </div>
    <div>
      <label className='label-header' >Emailame:</label>
      <input className='label-body' type='text' name='email' value={data.email}
      onChange={ (e) => handleChange(e, e.target.name)}
      />
      {error.email && (
          <span className='error-body'>{error.email}</span>
        )}
    </div>
    </>
  )
}

export default Profile