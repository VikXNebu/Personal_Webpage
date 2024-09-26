import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const VotingSystem = ({ category }) => {
  const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    // Retrieve votes from localStorage on component mount
    const storedVotes = localStorage.getItem(`votes_${category}`);
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, [category]);

  const castVote = (voteType) => {
    const newVotes = {
      ...votes,
      [voteType]: votes[voteType] + 1
    };
    setVotes(newVotes);
    // Save updated votes to localStorage
    localStorage.setItem(`votes_${category}`, JSON.stringify(newVotes));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center space-x-8 mt-8"
    >
      <button
        onClick={() => castVote('upvotes')}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        <ThumbsUp />
        <span>{votes.upvotes}</span>
      </button>
      <button
        onClick={() => castVote('downvotes')}
        className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        <ThumbsDown />
        <span>{votes.downvotes}</span>
      </button>
    </motion.div>
  );
};

export default VotingSystem;
