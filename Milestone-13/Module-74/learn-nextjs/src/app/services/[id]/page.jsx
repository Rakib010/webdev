export default function ServicesDetailPage({ params }) {
  const data = [
    {
      id: "1",
      name: "TeachFix",
    },
    {
      id: "2",
      name: "FitLife",
    },
    {
      id: "3",
      name: "EcoClean",
    },
  ];
  const id = params?.id;
  const singleData = data.find((d) => d.id == id);
  if (singleData) {
    return (
      <div>
        <p>ServicesDetailsPages </p>
        <p>ID:{id}</p>
        <p>{singleData.name}</p>
      </div>
    );
  } else {
    return <p>Not Found Service</p>;
  }
}
