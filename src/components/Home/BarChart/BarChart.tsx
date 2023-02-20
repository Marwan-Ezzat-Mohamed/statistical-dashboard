import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { BarItem } from "./BarItem";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = ({ data /* see data tab */ }: { data: BarDatum[] }) => {
  return (
    <ResponsiveBar
      barComponent={BarItem}
      data={data}
      keys={["Planned expenses", "Actual expenses"]}
      indexBy="title"
      margin={{ top: 5, right: 5, bottom: 55, left: 35 }}
      padding={0.6}
      groupMode="grouped"
      colors={["#F492A0", "#9194CE"]}
      enableLabel={false}
      borderRadius={7}
      innerPadding={7}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        format: function (e) {
          const formattedNumber = new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
          }).format(e);
          return formattedNumber;
        },
      }}
      legends={[
        {
          dataFrom: "keys",
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
      role="application"
      ariaLabel="Nivo bar chart"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
