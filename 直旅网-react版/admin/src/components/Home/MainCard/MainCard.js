import "./MainCard.scss";

export default function (props) {
  return (
    <div className="main-card-container">
      <div className="img-box">
        <img src={props.url} />
        <div className={props.niu === "牛人专线" ? "active tips" : "tips"}>
          {props.niu}
        </div>
      </div>
      <div className="message">
        <div className="satisfaction-price">
          <div className="price">
            ¥&nbsp; <span>{props.price}</span>&nbsp;元
          </div>
          <div className="satisfaction">
            满意度:&nbsp;<span>{props.satisfaction}%</span>
          </div>
        </div>
        <div className="mes">{props.mes.join("、")}</div>
      </div>
    </div>
  );
}
