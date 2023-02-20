// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { Serie } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineGraph = ({ data /* see data tab */ }: { data: Serie[] }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 5, right: 10, bottom: 60, left: 25 }}
    xScale={{ type: "point" }}
    colors={["#9194CE", "#FEB86F", "#F492A0"]}
    enablePoints={false}
    curve="monotoneX"
    lineWidth={3}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: "middle",
      renderTick(props) {
        const { x, y, value } = props;

        return (
          <g transform={`translate(${x},${y + 15})`}>
            <text
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontSize: 12,
                fill: "#9B9DA3",
              }}
            >
              {value}
            </text>
          </g>
        );
      },
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: -40,
      legendPosition: "middle",
      renderTick(props) {
        const { x, y, value, tickIndex } = props;
        if (tickIndex % 2 !== 0) {
          return <></>;
        }
        return (
          <g transform={`translate(${x - 5},${y})`}>
            <text
              textAnchor="end"
              dominantBaseline="central"
              style={{
                fontSize: 12,
                fill: "#9B9DA3",
              }}
            >
              {value}
            </text>
          </g>
        );
      },
    }}
    useMesh={true}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 60,
        itemsSpacing: 2,
        itemWidth: 200,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 10,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    tooltip={({ point }) => (
      <div
        style={{
          background: point.color,
          padding: "9px 12px",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <span style={{ color: "white" }}>
          {point.serieId}: {point.data.yFormatted}
        </span>
      </div>
    )}
  />
);

export default LineGraph;
