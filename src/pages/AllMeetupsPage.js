import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeetup } from "../actions/index";
import { useFetch } from "../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import Spinner from "../components/ui/Spinner";


export default function AllMeetupsPage() {
  const { data, isLoading } = useFetch({
    url: "/data.json",
  });

  const dispatch = useDispatch()
  const meetups = useSelector((state) => state.meetups);
  const favorites = useSelector((state) => state.favorites);


  useEffect(() => {
    data?.forEach((meetup) => {
      const alreadyAdded = meetups.some((m) => m.id === meetup.id);

      if (!alreadyAdded) {
        dispatch(addMeetup(meetup));
      }
    });
  }, [data, dispatch, meetups]);
  return (
    <section>
      <h1>All Meetups</h1>

      <ul className={classes.list}>
        {isLoading ?
          <div className={classes.spinner_root}>
            <Spinner />
          </div>
          :
          meetups?.map((meetup, index) => {
            const isFavorite = favorites.includes(meetup)
            return <MeetupItem data={meetup} key={`meetup-${index}`} isFavorite={isFavorite} />
          })}
      </ul>
    </section>
  );
}
