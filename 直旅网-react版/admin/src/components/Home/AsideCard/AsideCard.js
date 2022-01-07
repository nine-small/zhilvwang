import "./AsideCard.scss";

export default function AsideCard(props) {
  return (
    <div className="aside-card-container">
      <div className="img-box">
        <img src={props.url} />
        {props.index < 3 ? (
          <div className={"tips " + "item" + props.index}>{props.index + 1}</div>
        ) : null}
      </div>
      <div className="message-box">
        <div className="message-box-title tips">{props.title}</div>
        <div className="tags tips">{props.tags.join(" ")}</div>
        <div className="price-tag">
          <div className="tag">{props.tag}</div>
          <div className="price">
            <span>¥{props.price}&nbsp;</span>起
          </div>
        </div>
      </div>
    </div>
  );
}
