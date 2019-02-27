import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Cam Lan Suc', duration: '4:05' },
    { title: 'Phan Kim Tien', duration: '2:30' },
    { title: 'Tran Mu', duration: '3:49' },
    { title: 'La Con Bong Long Xien', duration: '5:11' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
