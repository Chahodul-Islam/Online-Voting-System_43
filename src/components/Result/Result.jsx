import React from 'react';
import './Result.css';
import ResultChart from './ResultChart';

const Result = ({ candidates, votes }) => {
  return (
    <div className="result-container">
      <h1>Voting Results</h1>
      <div className="chart-container">
        <ResultChart candidates={candidates} votes={votes} />
      </div>
      {candidates.map((candidate) => (
        <div key={candidate.id} className="result-card">
          <h3>{candidate.name}</h3>
          <p>Votes: {votes[candidate.id]}</p>
        </div>
      ))}
    </div>
  );
};

export default Result;
