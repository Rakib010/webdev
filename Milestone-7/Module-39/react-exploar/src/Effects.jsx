export default function Effects({ effect }) {
  const { name, email } = effect;
  return (
    <div className="box">
      <h4>Name:{name}</h4>
      <h5>Email:{email}</h5>
    </div>
  );
}
