import { ResponsivePie } from '@nivo/pie';
import { useEffect, useState } from 'react';

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
    return (
        <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: '3.3rem',
                fontWeight: 'bold',
                fill: 'white',
            }}
        >
            {parseInt(dataWithArc[3].id)} Kcal
        </text>
    );
};

const MyResponsivePie = ({ showFoodInf }) => {
    const { caloricBreakdown } = showFoodInf;
    const { percentProtein, percentFat, percentCarbs } = caloricBreakdown;
    const { nutrients } = showFoodInf;

    const [showCalories, setShowCalories] = useState();

    useEffect(() => {
        calories();
    }, [showFoodInf]);

    const calories = () => {
        setShowCalories(undefined);
        nutrients?.forEach((element) => {
            if (element.name === 'Calories') setShowCalories(element.amount);
        });
    };

    return (
        <ResponsivePie
            data={[
                {
                    id: 'Protein',
                    label: 'Protein',
                    value: percentProtein,
                    color: 'red',
                },
                {
                    id: 'Fat',
                    label: 'Fat',
                    value: percentFat,
                    color: 'yellow',
                },
                {
                    id: 'Carbs',
                    label: 'Carbs',
                    value: percentCarbs,
                    color: 'blue',
                },
                {
                    id: showCalories,
                    value: 0,
                },
            ]}
            margin={{
                right: 80, bottom: 80, left: 80
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
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
            }}
            defs={[
                {
                    id: 'Protein',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'red',
                    color: 'red',
                },
                {
                    id: 'Fat',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'yellow',
                    color: 'yellow',
                },
                {
                    id: 'Carbs',
                    type: 'patternLines',
                    spacing: 32,
                    rotation: -360,
                    lineWidth: 0,
                    background: 'blue',
                    color: 'blue',
                },
            ]}
            fill={[
                {
                    match: {
                        id: 'Protein',
                    },
                    id: 'Protein',
                },
                {
                    match: {
                        id: 'Fat',
                    },
                    id: 'Fat',
                },
                {
                    match: {
                        id: 'Carbs',
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
                CenteredMetric,
            ]}
        />
    );
};

export default MyResponsivePie;
