import Pet from "./Pet";

function Results({ pets, isLoading }) {
  console.log(isLoading);
  return (
    <div className="search">
      {isLoading ? (
        <h1>🌀</h1>
      ) : !pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              //needs key so that react knows what it's doing with the elements of an array
              name={pet.name}
              id={pet.id}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
}

export default Results;
