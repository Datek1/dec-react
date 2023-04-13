import React, {useEffect, useState} from 'react';
import Mission from "./Mission";

const Missions = () => {

    const [missions, setMissions] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(response => setMissions(response))
    }, [])

    const filteredMissions = missions.filter(value => +value.launch_year < 2020)
    return (

        <div>

            {
                filteredMissions.map(value => <Mission filteredMissions={value} key={value.flight_number}/>)
            }

        </div>
    );
};

export default Missions;