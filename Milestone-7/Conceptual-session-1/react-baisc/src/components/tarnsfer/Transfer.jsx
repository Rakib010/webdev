export default function Transfer({ transfer }) {
  return (
    <div>
      <h1>This is Transfer</h1>
      <button onClick={() => transfer("data dilam")}>Click For Transfer</button>
    </div>
  );
}
