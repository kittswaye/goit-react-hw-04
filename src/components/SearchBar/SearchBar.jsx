import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      toast.error('Search query is required');
			return;
		}

    onSubmit(topic);
    form.reset();
  };

  return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="topic"
          />
          <button type="submit">Search</button>
          <Toaster />
        </form>
      </header>
  );
}
