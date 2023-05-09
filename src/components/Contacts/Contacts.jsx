const Contacts = ({ data, deleteContact }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : {number}
              <button type="button" onClick={()=>(deleteContact(id))}>Delete Contact</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Contacts };
