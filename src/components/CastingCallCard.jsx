import { ArrowRightIcon } from "@phosphor-icons/react";
import "../styles/castingcallstyles.css";
const CastingCallCard = ({ setIsViewCastingClicked }) => {
  return (
    <div className="casting-call-card-container">
      <div className="-display-flex-align-center-justify-space-between">
        <div className="-display-flex-align-center -gap-10">
          <img
            className="casting-call-profile-pic"
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="profile pic"
          />
          <div>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>Aaron Sierra</p>
            <p style={{ fontSize: "10px", color: "gray" }}>Film Director</p>
          </div>
        </div>

        <div>
          <button className="-follow-btn">Follow</button>
        </div>
      </div>

      <div>
        <div>
          <button className="-tags-btn">Short Film</button>
          <button className="-tags-btn">$800 rate</button>
          <button className="-tags-btn">Queenstown</button>
          <button className="-tags-btn">Queenstown</button>
          <button className="-tags-btn">Queenstown</button>
          <button className="-tags-btn">Queenstown</button>
          <button className="-tags-btn">Queenstown</button>
        </div>
        <p
          style={{
            lineHeight: "1.5",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          sit placeat, mollitia amet voluptatibus voluptas id in animi
          voluptates accusamus a nesciunt dolore accusantium rem officiis, rerum
          laudantium! Sapiente, dolore? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto dignissimos consectetur, harum consequatur cum
          tenetur dicta sunt esse minima dolorem, quod ad ullam laboriosam nobis
          non possimus accusantium perferendis nostrum?
        </p>
      </div>

      <button
        className="-button-empty view-role-btn"
        onClick={() => setIsViewCastingClicked(true)}
      >
        View role <ArrowRightIcon />
      </button>
    </div>
  );
};

export default CastingCallCard;
