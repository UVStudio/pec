import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: {
    school,
    degree,
    fieldofstudy,
    current,
    to,
    startDate,
    description
  }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{startDate}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field of study: </strong>
        {fieldofstudy}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {};

export default ProfileEducation;
