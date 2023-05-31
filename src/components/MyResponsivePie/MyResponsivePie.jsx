import React from 'react';
import './MyResponsivePie.css';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 60, right: 90, bottom: 90, left: 80 }}
        startAngle={-23}
        endAngle={349}
        innerRadius={0.4}
        padAngle={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.2'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}

        defs={[
            {
                "id": "Protein",
                "type": "patternLines",
                "spacing": 1,
                "rotation": -8,
                "lineWidth": 2,
                "background": "#ffffff",
                "color": "yellow"
            },
            {
                "id": "Fat",
                "type": "patternLines",
                "spacing": 1,
                "rotation": -8,
                "lineWidth": 2,
                "background": "#ffffff",
                "color": "#1254ab"
            },
            {
                "id": "Carbs",
                "type": "patternLines",
                "spacing": 1,
                "rotation": -8,
                "lineWidth": 2,
                "background": "#ffffff",
                "color": "#dd0e0e"
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Carbs'
                },
                id: 'Carbs'
            },
            {
                match: {
                    id: 'Fat'
                },
                id: 'Fat'
            },
            {
                match: {
                    id: 'Protein'
                },
                id: 'Protein'
            },

        ]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 17,
                translateY: 56,
                itemsSpacing: 2,
                itemWidth: 96,
                itemHeight: 19,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 25,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)


export default MyResponsivePie;
