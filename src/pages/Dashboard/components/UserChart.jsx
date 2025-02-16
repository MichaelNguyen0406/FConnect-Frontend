import { LineChart } from "@mui/x-charts";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const UserChart = () => {
  const theme = useTheme();

  const data = [
    { x: 1, newUser: 30, newMatch: 12, access: 20 },
    { x: 2, newUser: 45, newMatch: 52, access: 87 },
    { x: 3, newUser: 28, newMatch: 32, access: 102 },
    { x: 4, newUser: 50, newMatch: 44, access: 122 },
    { x: 5, newUser: 70, newMatch: 39, access: 113 },
    { x: 6, newUser: 70, newMatch: 39, access: 113 },
    { x: 7, newUser: 70, newMatch: 39, access: 113 },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <LineChart
        dataset={data} // Định nghĩa dataset thay vì data
        xAxis={[
          {
            dataKey: "x",
            // label: "Ngày",
            tickFormatter: (value) => value.slice(5), // Format ngày
          },
        ]}
        yAxis={[
          {
            dataKey: "y",
            // label: "Số lượng",
          },
        ]}
        series={[
          {
            dataKey: "newUser",
            color: theme.palette.primary.main, // Sử dụng màu chính từ theme
          },
          {
            dataKey: "newMatch",
            color: theme.palette.secondary.main, // Sử dụng màu chính từ theme
          },
          {
            dataKey: "access",
            color: "#00EB72", // Sử dụng màu chính từ theme
          },
        ]}
        width={600}
        height={300}
        sx={{
          "& .MuiLineElement-root": {
            strokeWidth: 3,
          },
        }}
      />
    </Box>
  );
};

export default UserChart;
