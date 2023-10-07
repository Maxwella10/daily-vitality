import { ProfileCard } from '../../components/ProfileCard';
import { BmiCard } from '../../components/BmiCard';
import { DailyCaloriesCard } from '../../components/DailyCaloriesCard';
import { MacroCard } from '../../components/MacroCard';
import { useProfile } from '../../utils/use-profile';
import { NotFound } from '../../components/NotFound';
import './style.css';

function Dashboard() {
  const [profile] = useProfile();
  return (
    <div>
      <div className="container header-styling mt-4 px-4 py-3 rounded-5 shadow">
        <h2 className="display-5">Dashboard</h2>
        <p>
          Welcome to Daily Vitality, your one stop shop for all things health
          and fitness!
        </p>
      </div>
      <div className="container my-4">
        {profile.age === '' &&
        profile.weight === '' &&
        profile.height === '' ? (
          <div className="text-center mt-5 pt-5">
            <NotFound
              title="Opps! No Profile Data"
              text="We didn't find you in our database. Please create a profile to get started."
              href="/profile"
              hrefText="Create Profile"
            />
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6 col-lg-4 mt-3">
                <ProfileCard />
              </div>
              <div className="col-md-6 col-lg-4 mt-3">
                <BmiCard />
              </div>
              <div className="col-md-6 col-lg-4 mt-3">
                <DailyCaloriesCard />
              </div>
            </div>
            <MacroCard />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
