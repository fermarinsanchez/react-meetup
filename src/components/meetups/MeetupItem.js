
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions/index";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({data, section, isFavorite}) {

  const dispatch = useDispatch()
  const isFavoriteSection = section === 'favs'
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
          {isFavorite &&  <div className={classes.fav} disabled>FAVORITE!</div>}
          {isFavoriteSection ? 
            <button onClick={() => dispatch(removeFavorite(data))}>Remove from favorites</button>
            :
            isFavorite ?  null : <button onClick={() => dispatch(addFavorite(data))}>Add to favorites</button>
            }
        </div>
      </Card>
    </li>
  );
}
