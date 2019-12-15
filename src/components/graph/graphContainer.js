

import React from 'react';
export const GraphContainer = React.memo(({ data }) => {
    return (
        <div>
            <p>{data}</p>
        </div>
    );
});

