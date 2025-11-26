import React, { useState } from 'react';

// Dummy data and functions (replace with your GraphQL logic)
const dummySignIn = async ({ username, password }) => {
  if (!username || !password) throw new Error('Invalid');
  return { token: 'dummy-token' };
};

const dummyCreateReview = async ({ repoName, rating, text }) => {
  return {
    id: Math.random().toString(36).substring(7),
    repoName,
    rating: Number(rating),
    text
  };
};

// Already created reviews for demonstration
const initialReviews = [
  { id: '1', repoName: 'RepoA', rating: 80, text: 'Great!' },
  { id: '2', repoName: 'RepoB', rating: 60, text: 'Good' },
  { id: '3', repoName: 'RepoC', rating: 90, text: 'Excellent' },
];

const App = () => {
  const [page, setPage] = useState('signin');
  const [token, setToken] = useState(null);
  const [createdReview, setCreatedReview] = useState(null);
  const [reviews, setReviews] = useState(initialReviews);

  // Sign In Page
  const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
      try {
        const data = await dummySignIn({ username, password });
        setToken(data.token);
        setPage('createReview');
      } catch (err) {
        alert(err.message);
      }
    };

    return (
      <div>
        <h2>Sign In</h2>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    );
  };

  // Create Review Page
  const CreateReview = () => {
    const [repoName, setRepoName] = useState('');
    const [rating, setRating] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async () => {
      try {
        const review = await dummyCreateReview({ repoName, rating, text });
        setCreatedReview(review);
        setReviews(prev => [...prev, review]);
        setPage('reviewDisplay');
      } catch (err) {
        alert(err.message);
      }
    };

    return (
      <div>
        <h2>Create Review</h2>
        <input placeholder="Repository Name" value={repoName} onChange={e => setRepoName(e.target.value)} />
        <input placeholder="Rating (0-100)" type="number" value={rating} onChange={e => setRating(e.target.value)} />
        <textarea placeholder="Review text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    );
  };

  // Display Created Review
  const ReviewDisplay = () => {
    if (!createdReview) return null;
    return (
      <div>
        <h2>Review Created!</h2>
        <p><strong>Repository:</strong> {createdReview.repoName}</p>
        <p><strong>Rating:</strong> {createdReview.rating}</p>
        <p><strong>Review:</strong> {createdReview.text}</p>
        <button onClick={() => setPage('repoList')}>View All Reviews</button>
      </div>
    );
  };

  // Repository List with Sorting
  const RepositoryList = () => {
    const [sortOrder, setSortOrder] = useState('desc');

    const sortedReviews = [...reviews].sort((a, b) => 
      sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating
    );

    return (
      <div>
        <h2>Repository Reviews</h2>
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by Rating ({sortOrder})
        </button>
        <ul>
          {sortedReviews.map(r => (
            <li key={r.id}>
              <strong>{r.repoName}</strong> - Rating: {r.rating} - {r.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Main Render
  switch(page) {
    case 'signin': return <SignIn />;
    case 'createReview': return <CreateReview />;
    case 'reviewDisplay': return <ReviewDisplay />;
    case 'repoList': return <RepositoryList />;
    default: return <SignIn />;
  }
};

export default App;
