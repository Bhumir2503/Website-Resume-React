import "./styles/Education.css";

interface Props{
  title: string;
  image: string;
  date: string;
  degree: string;
}


function Education(prop: Props) {
  const cardstyle = {
    maxWidth: "75%",
    border: "none",
    
  };

  return (
    <div className="card education border-dark mb-3" style={cardstyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={prop.image} className="img-fluid rounded-start"  />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            <p className="card-text">
              {prop.degree}
            </p>
              <small>
                {prop.date}
              </small>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
