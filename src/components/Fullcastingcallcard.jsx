import { FilmSlateIcon, XIcon } from "@phosphor-icons/react";
import "../styles/fullcastingcallstyles.css";
const Fullcastingcallcard = ({ setIsViewCastingClicked }) => {
  return (
    <div className="full-casting-card-container">
      <button
        className="-button-empty"
        onClick={() => setIsViewCastingClicked(false)}
      >
        <XIcon />
      </button>
      <p className="-display-flex-align-center -gap-10">
        <FilmSlateIcon weight="fill" /> Film
      </p>

      <h2>Kabayan</h2>
      <p style={{ fontSize: "12px" }}>Role: Johnson</p>
      <div>
        <button className="-tags-btn">Short Film</button>
        <button className="-tags-btn">$800 rate</button>
        <button className="-tags-btn">Queenstown</button>
        <button className="-tags-btn">Male</button>
        <button className="-tags-btn">Queenstown</button>
        <button className="-tags-btn">Queenstown</button>
        <button className="-tags-btn">Queenstown</button>
      </div>

      <p
        style={{
          marginTop: "10px",
          fontSize: "14px",
          lineHeight: "1.5",
          height: "250px",
          overflow: "auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        dolores, ratione aut placeat recusandae tempora, odio eligendi deserunt
        nobis ipsa autem assumenda in minima repellat error hic iure
        consequatur. Incidunt. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Reiciendis accusantium, libero quisquam architecto
        commodi illo ducimus magni animi temporibus vero repellat repudiandae
        tenetur nulla earum consequatur voluptatibus adipisci facere debitis!
      </p>

      <p style={{ marginBottom: "10px", fontSize: "14px" }}>
        Pay range: ~ $1000
      </p>
      <button className="full-casting-apply-button">Apply job</button>
    </div>
  );
};

export default Fullcastingcallcard;
