import { useState } from 'react';

const Bookform = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author });
    setAuthor(' ');
    setTitle(' ');
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:{' '}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:{' '}
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>AddBook</button>
    </form>
  );
};

export default Bookform;
