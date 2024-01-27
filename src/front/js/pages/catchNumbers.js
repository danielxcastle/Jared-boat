import React from "react";

export const CatchNumbers = () => {
    // Function to generate dummy data for the last 10 days
    const generateDummyData = () => {
        const currentDate = new Date();
        const fishingNumbers = [];

        for (let i = 3100; i >= 0; i--) {
            const date = new Date();
            date.setDate(currentDate.getDate() - i);

            const fishCounts = {
                date: date.toLocaleDateString(),
                tuna: Math.floor(Math.random() * 20) + 5,
                barracuda: Math.floor(Math.random() * 10),
                whitefish: Math.floor(Math.random() * 15),
                sculpin: Math.floor(Math.random() * 5),
            };

            fishingNumbers.push(fishCounts);
        }

        return fishingNumbers;
    };

    const fishingNumbers = generateDummyData();

    return (
        <div className="home-page mt-2">
            <h2 className="home-header">
                <center>Recent Fishing Numbers for the Last 10 Days</center>
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Tuna</th>
                        <th>Barracuda</th>
                        <th>Whitefish</th>
                        <th>Sculpin</th>
                    </tr>
                </thead>
                <tbody>
                    {fishingNumbers.map((fishCounts, index) => (
                        <tr key={index}>
                            <td>{fishCounts.date}</td>
                            <td>{fishCounts.tuna}</td>
                            <td>{fishCounts.barracuda}</td>
                            <td>{fishCounts.whitefish}</td>
                            <td>{fishCounts.sculpin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
