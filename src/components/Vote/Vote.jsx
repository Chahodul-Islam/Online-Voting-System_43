import React, { useState } from 'react';
import './Vote.css';
import Result from '../Result/Result';

const candidates = [
  { id: 1, name: 'Candidate 1', party: 'Party A', description: 'Description for Candidate 1', image: 'path-to-image1.jpg' },
  { id: 2, name: 'Candidate 2', party: 'Party B', description: 'Description for Candidate 2', image: 'path-to-image2.jpg' },
  { id: 3, name: 'Candidate 3', party: 'Party C', description: 'Description for Candidate 3', image: 'path-to-image3.jpg' },

];

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [votes, setVotes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [showResults, setShowResults] = useState(false);

  const onVote = () => {
    if (selectedCandidate) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedCandidate.id]: prevVotes[selectedCandidate.id] + 1,
      }));
      setShowResults(true);
    } else {
      alert('Please select a candidate to vote for.');
    }
  };

  return (
    <div className="vote-container">
      <h1 className="heading">Select Your Favourite Candidate</h1>
      {!showResults ? (
        <div className="candidates-list">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img src={candidate.image} alt={candidate.name} className="candidate-image" />
              <div className="candidate-info">
                <h2>{candidate.name}</h2>
                <p><strong>Party:</strong> {candidate.party}</p>
                <p>{candidate.description}</p>
                <label className="checkbox-container">
                  <input type="checkbox" onChange={() => setSelectedCandidate(candidate)} checked={selectedCandidate?.id === candidate.id} />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Result candidates={candidates} votes={votes} />
      )}
      {!showResults && (
        <button className="vote-button" onClick={onVote}>Submit Vote</button>
      )}
    </div>
  );
};

export default Vote;
