const Person = (person) => {
  const { age, image, name } = person;
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h2>{name}</h2>
        <h2>{age} years</h2>
      </div>
    </article>
  );
};
export default Person;
