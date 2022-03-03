import React from 'react';
import Match from './Match';

export default function MatchListContainer({ matchData, userData }) {
  if (!matchData.nickName) return null;
  return (
    <div>
      {matchData?.matches[0]?.matches.map((match, idx) => (
        <Match matchData={match} userData={userData} key={idx} />
      ))}
    </div>
  );
}
