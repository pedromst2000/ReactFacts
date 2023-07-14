const tags = [
  { id: 1, content: "Was first released in 2013" },
  { id: 2, content: "Was originally created by Jordan Walke" },
  { id: 3, content: "Has well over 100K stars on GitHub" },
  { id: 4, content: "Is maintained by Facebook" },
  { id: 5, content: "Powers thousands of enterprise apps, including mobile apps" },
];

function List() {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>{tag.content}</li>
      ))}
    </ul>
    )
}

export default List