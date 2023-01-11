import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMessage } from '../redux/messages/messages';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  const getRandomMessage = () => {
    dispatch(getMessage());
  };

  return (
    <section className="message-container">
      <h1>Random Greeting</h1>
      <p className="message">
        Message:
        {' '}
        {message.length > 0 ? message : 'Loading...'}
      </p>
      <div className="button-div">
        <span>Click the button to see a different message</span>
        <button className="btn" type="button" onClick={getRandomMessage}>
          Random Greeting
        </button>
      </div>
      <br />
      <button type="button" onClick={handleNavigation}>
        Back to Home Page &lt;
      </button>
    </section>
  );
};

export default Greeting;
