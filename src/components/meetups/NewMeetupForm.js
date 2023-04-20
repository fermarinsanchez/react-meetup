import React, { useState } from 'react';
import Card from '../ui/Card';
import { useDispatch } from 'react-redux';
import { addMeetup } from '../../actions/index';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: '',
    image: '',
    address: '',
    description: '',
    id: Math.random()  * 10
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMeetup(values));
    setValues({ title: '', image: '', address: '', description: '' });
  };
// https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            name="image"
            value={values.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
