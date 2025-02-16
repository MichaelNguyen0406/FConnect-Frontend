import { PieChart } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";

import { useTheme } from "@mui/material";

const otherProps = {
  width: 600,
  height: 300,
  sx: {
    [`.${legendClasses.root}`]: {
      transform: "translate(20px, 0)",
    },
  },
};

function GenderChart() {
  const theme = useTheme();
  const data = [
    { team: "Male", rank: 3, points: 31, color: theme.palette.primary.main },
    {
      team: "Female",
      rank: 1,
      points: 50,
      color: theme.palette.secondary.main,
    },
    { team: "Other", rank: 4, points: 18, color: "#00EB72" },
  ];
  return (
    <PieChart
      series={[
        {
          data: data.map((d) => ({
            label: d.team,
            id: d.team,
            value: d.points,
            color: d.color,
          })),
          valueFormatter: (v, { dataIndex }) => {
            const { rank } = data[dataIndex];
            return `has ${v.value} points and is ranked ${rank}.`;
          },
        },
      ]}
      {...otherProps}
    />
  );
}
export default GenderChart;
