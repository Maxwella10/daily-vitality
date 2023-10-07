import { useState } from 'react';
import { activityLevels, goals } from '../../utils/Constants';
import { useProfile } from '../../utils/use-profile';
import femaleAvatar from '../../assets/images/female.png';
import maleAvatar from '../../assets/images/male.png';
import './style.css';

function Profile() {
  const [profile, setProfile] = useProfile();
  const [isEditing, setIsEditing] = useState(false);

  const defaultProfile = {
    name: '',
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activitylevel: 'level_1',
    goal: 'maintain',
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClear = () => {
    localStorage.clear();
    setProfile(defaultProfile);
  };

  const handleSave = () => {
    setProfile(profile);
    setIsEditing(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div className="card ">
            <div className="card-body text-center">
              <img
                src={profile.gender === 'male' ? maleAvatar : femaleAvatar}
                className="rounded-circle object-fit-cover border background-plum"
                alt=" Avatar"
                width="150"
                height="150"
                align="centre"
              />
              <h3 className="mt-3">
                {profile.name ? profile.name : 'Unknown User'}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-9  pt-4 pt-lg-0">
          {isEditing ? (
            // Don't work on this one
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <select
                  className="form-select"
                  id="gender"
                  required
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age (yr):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter your age"
                  required
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="height" className="form-label">
                  Height (cm):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  placeholder="Enter your height"
                  required
                  name="height"
                  value={profile.height}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  Weight (kg):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  placeholder="Enter your weight"
                  value={profile.weight}
                  onChange={handleChange}
                  required
                  name="weight"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="activitylevel" className="form-label">
                  Activity Level:
                </label>
                <select
                  className="form-select"
                  id="activitylevel"
                  required
                  name="activitylevel"
                  value={profile.activitylevel}
                  onChange={handleChange}
                >
                  {Object.keys(activityLevels).map(key => (
                    <option key={key} value={key}>
                      {activityLevels[key]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="goal" className="form-label">
                  Goals :
                </label>
                <select
                  className="form-select"
                  id="goal"
                  required
                  name="goal"
                  placeholder="Enter your goal"
                  value={profile.goal}
                  onChange={handleChange}
                >
                  {Object.keys(goals).map(key => (
                    <option key={key} value={key}>
                      {goals[key]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-success"
                  id="save"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="clear"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </form> // Don't work on this one it ends here.
          ) : (
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name:
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.name}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.gender}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age (yr):
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.age}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="height" className="form-label">
                  Height (cm):
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.height}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  Weight (kg):
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.weight}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="activitylevel" className="form-label">
                  Activity Level:
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.activitylevel}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="goal" className="form-label">
                  Goals :
                </label>
                <div className="border-bottom py-1 text-secondary">
                  {profile.goal}
                </div>
              </div>
              <div>
                <button
                  onClick={handleEdit}
                  type="button"
                  className="btn btn-primary"
                  id="edit"
                >
                  Edit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
