import ProtoTypes from "prop-types";


function List({tags}) {
  return (
    <ul className="ul-center">
      {tags.map((tag) => (
        <li key={tag.id}>
          <span>{tag.content}</span>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  tags: ProtoTypes.array.isRequired
};


export default List