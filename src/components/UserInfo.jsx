import React from 'react';

const UserInfo = (props) => {
  const {userInfo} = props;

  return (
    <div className="user-info">
      <span className="mr-2">{userInfo.firstName}</span>
      <span>{userInfo.lastName}</span>
    </div>
  );
};

export default UserInfo;