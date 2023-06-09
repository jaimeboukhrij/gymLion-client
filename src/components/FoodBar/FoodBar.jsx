import { useState } from "react";
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ data }) => {
    const [colors, setColors] = useState([]); // Colores aleatorios


    // Función para generar un color aleatorio en formato hexadecimal
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Generar colores aleatorios para cada objeto en el array de datos
    useState(() => {
        const randomColors = data.map(() => getRandomColor());
        setColors(randomColors);
    }, []);
    return (
        <ResponsiveBar
            data={data}
            keys={["value"]}
            indexBy="nutrient"
            margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
            padding={0.85}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={({ id }) => colors[id]}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.3]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Value",
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Nutrient",
                legendPosition: "middle",
                legendOffset: -40,
            }}
            labelSkipWidth={9}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            tooltipFormat={value => `${value}`} // Formato del tooltip para mostrar los valores
            tooltip={({ id, value }) => (
                <strong style={{ color: "#fff" }}>
                    {id}: {value}
                </strong>
            )}
        />
    );
};

const ExampleBarChart = () => {
    const data = [
        {
            nutrient: "Protein",
            value: 20,
        },
        {
            nutrient: "Fat",
            value: 30,
        },
        {
            nutrient: "Carbs",
            value: 50,
        },
    ];


};

export default MyResponsiveBar
