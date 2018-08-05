import React from "react";

const Form = () => {
  console.log("click working");
  return (
    <div>
      <p className="form">
        The thickness of the tears running down this man's chest <br />{" "}
        represent the tendency for men to cry in that country. <br />Each click
        moves up the list and gradually thickens the tears
      </p>
      <a
        id="study-link"
        href="https://www.researchgate.net/publication/254081226_Culture_and_Crying"
      >
        The data is taken from this study
      </a>
      <p>
        <br />
        <br />
      </p>
      <a id="return" href="http://tearstearstears.herokuapp.com/">
        Return to the weeping
      </a>
    </div>
  );
};

export default Form;
