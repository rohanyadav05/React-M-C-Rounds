import React, { useState } from 'react'
import Profile from './formComponents/Profile'
import Interests from './formComponents/Interests'
import Settings from './formComponents/Settings'
import './FormStyles.css';

const FormValidation = () => {

    const [data, setData] = useState({
        name: 'Rohan',
        age: 27,
        email: 'rohan@gmail.com',
        interests: ['Dance', 'Gym'],
        settings: "dark"
    });
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState({
    })
    const tabs = [
        {
            name: 'Profile',
            component: Profile,
            validate : () => {
                const err = {} ;
               if(!data.name || data.name.length < 2){
                err.name = "Name is not valid"
               }
               if(!data.age ||  data.age < 18){
                err.age = "Age is not valid"
               }
               if(!data.email || data.email < 2){
                err.email = "Email is not valid"
               }
               setError(err)
               return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name: 'Interests',
            component: Interests,
            validate: () => {
                const err = {};
                if(data.interests.length <= 0 ){
                    err.interests = "Select atleast one interest."
                }
                setError(err);
                return err.interests ? false : true;
            }
        },
        {
            name: 'Settings',
            component: Settings,
            validate : () => {
                return true;
            }
        }
    ]

    const handleButtonClick = (buttonName) => {

        if (buttonName === 'next' && currentTab < 2 && tabs[currentTab].validate()) {
            setCurrentTab(currentTab + 1);
        }
        if (buttonName === 'prev' && currentTab > 0 && tabs[currentTab].validate()) {
            setCurrentTab(currentTab - 1);
        }

    }
    const ActiveComponent = tabs[currentTab].component;
    return (
        <>
            <div>
                <div className='form-container'>
                    {tabs.map((item, index) => {
                        return (
                            <div className='form-heading' name={item.name} key={index}
                            onClick={() => {
                                if(tabs[currentTab].validate()){
                                    setCurrentTab(index);
                                
                                }
                                
                            }
                            }
                            >
                                {item.name}
                            </div>

                        )
                    })}
                </div>
                <div className='form-body'>
                    < ActiveComponent data={data} error={error} setError={setError} setData={setData} />
                </div>
                <div>
                    <button onClick={() => handleButtonClick('prev')}>Prev</button>
                    <button onClick={() => handleButtonClick('next')}>Next</button>
                    {
                        currentTab === 2 && (
                            <button >Submit</button>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default FormValidation