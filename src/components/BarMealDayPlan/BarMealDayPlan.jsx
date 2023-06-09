import { ResponsivePie } from "@nivo/pie";


const BarMealDayPlan = ({ BreakfastCalories, LunchCalories, DinnerCalories, totalCalories }) => {



    return (


        <ResponsivePie
            theme={{
                fontSize: 30
            }}
            data={[
                {
                    id: 'Breakfast',
                    label: 'Breakfast',
                    value: BreakfastCalories,
                    color: 'red',
                },
                {
                    id: 'Lunch',
                    label: 'Lunch',
                    value: LunchCalories,
                    color: 'yellow',
                },
                {
                    id: 'Dinner',
                    label: 'Dinner',
                    value: DinnerCalories,
                    color: 'blue',
                },

            ]}
            margin={{
                right: 80, bottom: 80, left: 20, top: 50
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={11}
            arcLinkLabelsTextOffset={18}
            arcLinkLabelsTextColor="#fff"
            arcLinkLabelsOffset={-8}
            arcLinkLabelsDiagonalLength={23}
            enableArcLabels={false}
            arcLinkLabelsStraightLength={27}
            arcLinkLabelsThickness={12}
            arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
            arcLabel="id"
            arcLabelsRadiusOffset={0.65}
            arcLabelsSkipAngle={6}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '3'
                    ]
                ]
            }}
            defs={[
                {
                    id: 'Protein',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'rgb(110, 110, 203)',
                    color: 'red',
                },
                {
                    id: 'Fat',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'rgb(42, 42, 162)',
                    color: 'yellow',
                },
                {
                    id: 'Carbs',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'rgb(3, 3, 63)',
                    color: 'blue',
                },
            ]}
            fill={[
                {
                    match: {
                        id: 'Breakfast',
                    },
                    id: 'Protein',
                },
                {
                    match: {
                        id: 'Lunch',
                    },
                    id: 'Fat',
                },
                {
                    match: {
                        id: 'Dinner',
                    },
                    id: 'Carbs',
                },
            ]}
            legends={[]}
            layers={[
                'arcs',
                'arcLabels',
                'arcLinkLabels',
                'legends',

            ]}
            fontSize={40}
        />
    );
};





export default BarMealDayPlan