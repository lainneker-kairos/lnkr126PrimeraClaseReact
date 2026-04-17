const Card = (props) => {
	return (
		<div className="card h-100">
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer text-center bg-transparent border-top-0">
				<a href="#" className="btn btn-primary">{props.buttonLabel}</a>
			</div>
		</div>
	);
};

export default Card;