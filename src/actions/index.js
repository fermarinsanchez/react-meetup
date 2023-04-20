import { ADD_MEETUP, ADD_FAVORITE, REMOVE_FAVORITE } from './types'

// action creators

export const addMeetup = (meetup) => ({
    type: ADD_MEETUP,
    payload: meetup
  });
  
  export const addFavorite = (meetupId) => ({
    type: ADD_FAVORITE,
    payload: meetupId
  });
  
  export const removeFavorite = (meetupId) => ({
    type: REMOVE_FAVORITE,
    payload: meetupId
  });