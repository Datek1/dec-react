import React from 'react';

const Mission = ({filteredMissions}) => {
    return (
        <div>
            <h2>Mission name - {filteredMissions.mission_name}</h2>
            <h3>Launch year - {filteredMissions.launch_year}</h3>
            <img src={filteredMissions.links.mission_patch_small} alt=""/>
        </div>
    );
};

export default Mission;