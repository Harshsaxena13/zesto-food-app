export default function Restrauent(props) {
  return (
    <div>
      <img src="{props.img_URl}" alt="sjdnj" />
      <h1>{props.rest_name}</h1>
      <h4>Ratings : {props.Rating}</h4>
      <h4> {props.cusines}</h4>
    </div>
  );
}
