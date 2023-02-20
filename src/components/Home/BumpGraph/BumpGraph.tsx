// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bump
import { BumpSerie, DefaultBumpDatum, ResponsiveBump } from "@nivo/bump";
import Legend from "../../shared/Legend";
const colors = ["#9194CE", "#FEB86F", "#F492A0"];
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BumpGraph = ({
  data /* see data tab */,
}: {
  data: BumpSerie<DefaultBumpDatum, Record<string, never>>[];
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexGrow: 1,
      flexDirection: "column",
      //   backgroundColor: "red",
    }}
  >
    <ResponsiveBump
      data={data}
      colors={colors}
      lineWidth={2}
      activeLineWidth={5}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      endLabel={true}
      endLabelPadding={19}
      pointSize={0}
      activePointSize={9}
      inactivePointSize={0}
      pointColor={{ from: "serie.color", modifiers: [] }}
      activePointBorderWidth={5}
      pointBorderColor={{ from: "serie.color" }}
      enableGridX={false}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
        renderTick(props) {
          const { x, y, value } = props;

          return (
            <g transform={`translate(${x},${y})`}>
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
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      axisRight={null}
      margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
    />
    {/* legends */}
    <div
      style={{
        // wrap
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flex: 1,
        flexGrow: 1,
        flexDirection: "row",
        width: "100%",
        gap: 20,
      }}
    >
      {data.map((serie, index) => (
        <Legend key={serie.id} color={colors[index]} label={serie.id} />
      ))}
    </div>
  </div>
);

export default BumpGraph;
