// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChartComponent = ({ showLineChart /* see data tab */ }) => (
    <ResponsiveLine

        data={
            [
                {
                    "id": "france.6",
                    "index": 58,
                    "serieId": "france",
                    "serieColor": "blue",

                    "color": "yellow",
                    "borderColor": "blue",
                    "data": showLineChart
                }
            ]}
        colors={["purple"]}

        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        lineWidth={9}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={6}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-14}
        enableArea={true}
        areaBaselineValue={90}
        areaOpacity={0.35}
        useMesh={true}
        legends={[

        ]}
    />
)
export default LineChartComponent