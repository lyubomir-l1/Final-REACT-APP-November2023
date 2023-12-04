import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <section className="about-us-section">
        <div className="about-us-wrap">

          <div className="about-us-image">
            <img src="../../images/aboutUsImage.png" alt="" />
          </div>

          <div className="about-us-content">
            <h2 className="about-us-h2">
              Sustainable Relationship to Nature
            </h2>
            <p className="about-us-paragraph">
              If we put this provocative question, “Does hunting make us human,” in the past tense—“DID hunting make us human?”—the answer, I think, would unequivocally be “yes.”
              The more demanding and fraught question is this: Has hunting KEPT us human, long after we needed to hunt in order to survive?
              Again, I think the answer is “yes,” but this is by no means a simple “yes.”
              I am not suggesting that everyone must hunt in order to be human.
              Even in hunting/gathering societies, only a minority of the population at any moment in time hunted.
              To be sure, the whole community participated in the butchering and preparing of the game, and this tradition persisted well into the modern era, both with the processing of game and domestic animals.
              If few hunted or killed domestic animals, the transformation of a living wild or domestic animal into food was a broadly shared communal activity.
            </p>
            <button><Link to="/courses">See All Courses</Link></button>
          </div>

        </div>
      </section>
    </>
  )
}