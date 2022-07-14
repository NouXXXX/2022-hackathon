let monthlyTrash = document.getElementById("monthly-trash");

let lineChart = new Chart(monthlyTrash, {
  type: "line",
  data: {
    labels: [
      "",
      "2022-03",
      "2022-04",
      "2022-05",
      "2022-06",
      "2022-07",
      "2022-08",
      "2022-09",
      "2022-10",
      "2022-11",
      "",
    ],
    datasets: [
      {
        label: "우리 동네 월간 쓰레기 배출량",
        data: [0, 10, 80, 50, 100, 60, 90, 40, 30, 70, 0],
      },
    ],
  },
});
