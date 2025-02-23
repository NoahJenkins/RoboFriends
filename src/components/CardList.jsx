import React from "react";
import Card from './Card.jsx'

// Using React.memo to optimize performance by preventing unnecessary re-renders.
// React.memo will only re-render the CardList component if the robots prop changes.
const CardList = React.memo(({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    return (
        <div>
            {cardArray}
        </div>
    )
});

export default CardList