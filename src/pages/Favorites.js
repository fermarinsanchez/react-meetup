import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import MeetupItem from '../components/meetups/MeetupItem';


export default function FavoritesPage() {

  const favorites = useSelector(state => state.favorites)

  return (
    <section>
      <h1>Favorites Page</h1>
      {!favorites.length && (
        <>
          <h3>No favorites added</h3>
          <p>Go to <Link to='/'>All Meetups</Link> section and add some favorites</p>
        </>
      )}
      {favorites?.map((fav, index) =>  <MeetupItem data={fav} key={`meetup-${index}`} section={'favs'}/>)}
    </section>
  );
}
