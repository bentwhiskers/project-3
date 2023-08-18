import { useState } from 'react';
export default function Hashtags() {

  const [searchInput, setSearchInput] = useState ('');
  const [searchResults, setSearchResults] = useState ([]);
  
  const handleSearch = async () => {
    const hashtags = extractHashtags(searchInput);
    const apiUrl = `/api/products?hashtags=${hashtags.join(',')}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const extractHashtags = (text) => {
    return text.match(/#\w+/g) || [];
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search products with hashtags..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Add Hashtag:</h2>
        <input
          type="text"
          placeholder="Add your own hashtag..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}
