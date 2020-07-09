import React, { useState } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as DefaultPersonIcon } from '../../assets/icons/defaultPerson.svg';

const Icon = styled.div`
  svg,
  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;

const ProfileIcon = ({ img, className, alt, onClick }) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => setLoading(false);
  return (
    <Icon className={className} onClick={onClick}>
      {loading && <DefaultPersonIcon title={alt} />}
      <img src={img} alt={alt} hidden={loading} onLoad={onLoad} />
    </Icon>
  );
};

ProfileIcon.propTypes = {
  img: string,
  className: string,
  alt: string,
  onClick: func
};

ProfileIcon.defaultProps = {
  img: '',
  className: '',
  alt: 'Profile Icon',
  onClick: () => {}
};

export default ProfileIcon;
