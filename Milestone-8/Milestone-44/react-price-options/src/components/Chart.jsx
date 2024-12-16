import { LineChart, Line, XAxis, YAxis } from "recharts";

const Chart = () => {
  const marks = [
    {
      student_id: 1,
      name: "Alice",
      math_marks: 78,
      physics_marks: 85,
      chemistry_marks: 80,
    },
    {
      student_id: 2,
      name: "Bob",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 82,
    },
    {
      student_id: 3,
      name: "Charlie",
      math_marks: 92,
      physics_marks: 88,
      chemistry_marks: 91,
    },
    {
      student_id: 4,
      name: "David",
      math_marks: 67,
      physics_marks: 70,
      chemistry_marks: 65,
    },
    {
      student_id: 5,
      name: "Eva",
      math_marks: 88,
      physics_marks: 82,
      chemistry_marks: 86,
    },
    {
      student_id: 6,
      name: "Frank",
      math_marks: 75,
      physics_marks: 74,
      chemistry_marks: 77,
    },
    {
      student_id: 7,
      name: "Grace",
      math_marks: 94,
      physics_marks: 90,
      chemistry_marks: 92,
    },
    {
      student_id: 8,
      name: "Hannah",
      math_marks: 82,
      physics_marks: 84,
      chemistry_marks: 79,
    },
    {
      student_id: 9,
      name: "Ian",
      math_marks: 69,
      physics_marks: 72,
      chemistry_marks: 68,
    },
    {
      student_id: 10,
      name: "Jack",
      math_marks: 90,
      physics_marks: 89,
      chemistry_marks: 87,
    },
  ];

  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-10">
        Explore Graph Chart
      </h1>
      <LineChart width={500} height={300} data={marks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math_marks" stroke="pink"></Line>
        <Line dataKey={"physics_marks"} stroke="purple"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
