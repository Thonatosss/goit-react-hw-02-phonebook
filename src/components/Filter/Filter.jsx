const Filter = ({ value, label, filterChange }) => {
  return (
      <input type="text" value={value} onChange={filterChange} />
  );
};
export { Filter };
