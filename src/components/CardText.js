function CardText(props) {
  const { heading, subheading } = props;
  return (
    <div>
      <h5 className="card-title">{heading}</h5>
      <p className="card-text">{subheading}</p>
    </div>
  );
}

export default CardText;
