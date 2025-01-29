import React from 'react'

const Interests = ({data, setData, error, setError}) => {
  console.log('interser', data);

  const handleChange = (item) => {
    let newInterestArr = data.interests;
    if(data.interests.includes(item)){
      newInterestArr = data.interests.filter((prod) => prod !== item);
      const newData = { ...data, interests: newInterestArr}
      setData(newData);
    } else
    if (!data.interests.includes(item)) {
      newInterestArr.push(item);
      const newData = { ...data, interests: newInterestArr }
      setData(newData);
    }

  }
  return (
    <>
      {/* {data.interests.map((item, index) => {
        return(
          <div key={index}>
        <label>{item}</label>
        <input type='checkbox'
        // checked={data.interests.includes(item)}
        onChange={() => handleChange(item)} />
          </div >
        )
      })} */}

      <div>
        <label>Dance</label>
        <input type='checkbox'
          value='Dance'
          checked={data.interests.includes('Dance')}
          onChange={(e) => handleChange(e.target.value)} />
      </div >

      <div>
        <label>Acting</label>
        <input type='checkbox'
          value='Acting'
          checked={data.interests.includes('Acting')}
          // checked={data.interests.includes(item)}
          onChange={(e) => handleChange(e.target.value)} />
      </div >
      <div>
        <label>Reading</label>
        <input type='checkbox'
          value='Reading'
          checked={data.interests.includes('Reading')}
          // checked={data.interests.includes(item)}
          onChange={(e) => handleChange(e.target.value)} />
      </div >
      <div>
        {error && (
          <span className='error-body'>{error.interests}</span>
        )}
      </div>

    </>
  )
}

export default Interests