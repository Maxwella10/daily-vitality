import { useProfile } from '../../utils/use-profile';
import femaleAvatar from '../../assets/images/female.png';
import maleAvatar from '../../assets/images/male.png';
import { NotFound } from '../NotFound';
import { activityLevels, goals } from '../../utils/Constants';
import './style.css';

export function ProfileCard() {
  const [profile] = useProfile();
  const goalVal = goals[profile.goal];
  const levelVal = activityLevels[profile.activitylevel];

  return (
    <div className="card rounded-5 shadow">
      <div className="card-body text-center">
        {profile.age === '' &&
        profile.weight === '' &&
        profile.height === '' ? (
          <>
            <NotFound
              title="Opps! No Profile Data"
              text="We didn't find you in our database. Please create a profile to get started."
              href="/profile"
              hrefText="Create Profile"
            />
          </>
        ) : (
          <>
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
            <p>
              <strong>Age:</strong> {profile.age}
            </p>
            <p>
              <strong>Gender: </strong>
              {profile.gender}
            </p>
            <p>
              <strong> Height: </strong> {profile.height}
            </p>
            <p>
              <strong>Weight:</strong> {profile.weight}
            </p>
            <p>
              <strong>Activity Level:</strong> {levelVal}
            </p>
            <p>
              <strong>Goal:</strong> {goalVal}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
