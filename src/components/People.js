import got from "../data/got";

let people = got.houses.reduce((acc, cur) => {
  acc = [...acc, ...cur.people];
  return acc;
}, []);

function People() {
  return (
    <div className="basis-[80%] p-4 text-zinc-700">
      <div className="grid grid-cols-3 gap-4">
        {people.map((person, i) => {
          const { name, description, image, wikiLink } = person;
          return (
            <div className="p-2 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="rounded-full border border-green-300"
                  src={image}
                  alt={name}
                />
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <div className="text-center text-sm">
                <p className="mb-2">{description}</p>
                <a href={wikiLink}>Wiki Link</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default People;
