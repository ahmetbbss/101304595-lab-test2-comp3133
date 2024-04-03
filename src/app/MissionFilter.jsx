import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const MissionFilter = () => {
    const [year, setYear] = useState('');
    const [missions, setMissions] = useState([]);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleSearch = () => {
        axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
            .then(response => {
                setMissions(response.data);
            })
            .catch(error => {
                console.error('Error fetching missions:', error);
            });
    };

    return (
        <div>
            <h2>Mission Filter</h2>
            <input 
                type="text" 
                placeholder="Enter year..." 
                value={year} 
                onChange={handleYearChange} 
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {missions.map((mission, index) => (
                    <li key={index}>{mission.mission_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MissionFilter;
