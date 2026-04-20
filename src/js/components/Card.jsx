const Card = ({ imageUrl, title, description, buttonLabel }) => {
  return (
    <div className="card h-100">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-center bg-transparent border-top-0">
        <a href="#" className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  );
};

export default Card;