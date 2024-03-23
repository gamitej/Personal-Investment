import DonutChart from "@/components/charts/DonutChart";

const fillData = [
  {
    match: {
      id: "ruby",
    },
    id: "dots",
  },
  {
    match: {
      id: "c",
    },
    id: "dots",
  },
  {
    match: {
      id: "go",
    },
    id: "dots",
  },
  {
    match: {
      id: "python",
    },
    id: "dots",
  },
  {
    match: {
      id: "scala",
    },
    id: "lines",
  },
  {
    match: {
      id: "lisp",
    },
    id: "lines",
  },
  {
    match: {
      id: "elixir",
    },
    id: "lines",
  },
  {
    match: {
      id: "javascript",
    },
    id: "lines",
  },
];

const data = [
  {
    id: "go",
    label: "go",
    value: 39,
    color: "hsl(243, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 203,
    color: "hsl(267, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 291,
    color: "hsl(188, 70%, 50%)",
  },
];

const MajorExpense = () => {
  return <DonutChart series={data} />;
};

export default MajorExpense;
