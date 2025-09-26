function ProfileData({ data }) {
  return (
    <div className="profile-data">
      <div>
        <span>Name: {data.name}</span>
        <p>{data.name}</p>
      </div>
      <div>
        <span>Last Name:</span>
        <p>{data.lastName}</p>
      </div>
      <div>
        <span>Email:</span>
        <p>{data.email}</p>
      </div>
    </div>
  );
}

export default ProfileData;
