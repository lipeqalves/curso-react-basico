import "./styles.css";
export const TextInput = ({ searchValue, handleChange }) => {
  return <input 
  className="text-input"
  placeholder="Type your serach"
  type="search" 
  value={searchValue} 
  onChange={handleChange} />;
};
