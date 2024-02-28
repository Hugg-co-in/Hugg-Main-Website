import React from "react";

const PsychologistCard = () => {
  return (
    <div
      class="card mb-3"
      //   style={"max-width: 540px;"}
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="assets/img/psychologists/ritika.jpeg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">Tadiparthi Ritika | Trainee</h4>
            <p class="card-text">
              Tadiparthi Ritika is a counselor with expertise in Cognitive
              Behavioral Therapy(CBT). Mindfulness and coping-focused therapy.{" "}
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <a href="https://topmate.io/have_a_hugg/286223">
                {" "}
                <button class="btn btn-danger" type="button">
                  Book a session
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistCard;
