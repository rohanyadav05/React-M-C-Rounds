import React from 'react'

const Settings = ({data, setData, error, setError}) => {
  const handleChange = (e) => {
const newData = {...data, settings : e.target.name};
setData(newData);
  }
  console.log(data);
  return (
    <>
    <div>
      <label >Dark</label>
      <input type="radio" value={data.settings} name='dark' onClick={(e) => handleChange(e)} />
    </div>
    <div>
      <label >Light</label>
      <input type="radio" value={data.settings} name='light' onClick={(e) => handleChange(e)} />
    </div>
    </>
  )
}

export default Settings