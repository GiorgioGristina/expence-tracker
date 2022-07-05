import "./Chart.css"
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValue = props.dataPoint.map(data => data.value)
  const totalMaximum = Math.max(...dataPointValue)

  return (
    <div className="chart">
      {props.dataPoint.map((data) => {
        return (
          <ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label} />
        );
      })}
    </div>
  );
}

export default Chart;
