
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({data}) {
 
  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={classes.content}>
          <h3>{data.title}</h3>
          <address>{data.address}</address>
          <p>{data.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
