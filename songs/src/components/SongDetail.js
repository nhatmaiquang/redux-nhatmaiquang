import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song })=> {
  if (!song) {
    return <div>Chon bai di dit me may</div>
  }

  return (
    <div>
      <h3>Thong tin bai hat:</h3>
      <p>
        Ten bai: {song.title}
        <br />
        Thoi luong phat song: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
