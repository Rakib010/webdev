import Link from "next/link";

export default function ServicesPage() {
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
  return (
    <div>
      <p>ServicesPages </p>
      {data.map((d) => {
        return (
          <div>
            <Link href={`/services/${d.id}`}>
              <p>{d.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
