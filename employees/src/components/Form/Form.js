import React from 'react';
import './Form.css';

const Form = () => (
    <div className="form__wrapper"> 
        <h2>Add new employee</h2>
        <form className="form__form">
            <div className="form__item">
                <input placeholder="name" name="name" type="text"/>
            </div>
            <div className="form__item">
                <input placeholder="age" name="age" type="number"/>
            </div>
            <div className="form__item">
                <input placeholder="salary" name="salary" type="number"/>
            </div>
            <div className="form__item">
                <button className="form__button" type="submit">add new employee</button>
            </div>
        </form>
    </div>
);
export default Form;