import { Flower, ClipboardCheck, Ruler } from 'lucide-react';
import Hero from '../../assets/images/hero1.png';
import feature1 from '../../assets/images/feature1.avif';
import feature2 from '../../assets/images/feature2.avif';
import feature3 from '../../assets/images/feature3.avif';
import './style.css';

const features = [
  {
    title: 'Create a custom made profile',
    icon: Flower,
    color: 'plum',
    image: feature1,
  },
  {
    title: 'Log your daily calories at the touch of a button',
    icon: ClipboardCheck,
    color: 'grass',
    image: feature2,
  },
  {
    title: 'Daily analytics tailored to focus your daily vitality',
    icon: Ruler,
    color: 'orange',
    image: feature3,
  },
];

function Home() {
  return (
    <>
      <div className="container py-5 my-5 h-100 home-container">
        <div className="row row-gap-4">
          <div className="order-2 order-lg-1 col-lg-6 text-center text-lg-start d-flex d-sm-flex d-lg-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-center mb-4">
            <div style={{ maxWidth: '400px' }}>
              <h1 className="fs-1 text-capitalize">
                Take control of your health
              </h1>
              <p className=" my-3">
                A journey of a thousand miles begins with a single step! Start
                your journey today with our easy to use app. Create a profile,
                log your daily calories and get daily analytics tailored to your
                needs.
              </p>
              <a href="/profile" className="btn btn-plum  btn-lg" role="button">
                Get Started
              </a>
            </div>
          </div>
          <div className="order-1 order-lg-2 col-lg-6 mb-4 d-flex justify-content-center justify-content-lg-end">
            <img
              id="fitness-img"
              src={Hero}
              className=" img-fluid w-100"
              alt="Bootstrap Themes"
              style={{ maxWidth: '700px' }}
              height="700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container  h-100 px-4 py-5" id="custom-cards">
        <h2 className="fs-1 pb-2 border-bottom">Features</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {features.map((feature, idx) => {
            return (
              <div key={idx} className="col">
                <div
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{
                    background: `linear-gradient(0deg, rgba(64, 0, 38, 0.3), rgba(64, 0, 38, 0.3)), url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className={`pt-5 mt-5 mb-4 display-6 lh-1 fw-bold`}>
                      {feature.title}
                    </h3>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto bg-light p-1 rounded-2">
                        <feature.icon
                          size={32}
                          className={`${feature.color}`}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
