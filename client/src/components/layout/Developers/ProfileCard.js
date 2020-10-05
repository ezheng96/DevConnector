import React from 'react';

const ProfileCard = ({ profile }) => {
  const { name } = profile;
  console.log(profile);
  return (
    <div className='developer-page-profile-card'>
      <h1>{name}</h1>

      {/* <img src={gravatar} alt={`Profile photo for ${name}`}></img> */}
    </div>
  );
};

export default ProfileCard;
