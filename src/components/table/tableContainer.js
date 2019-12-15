

import React from 'react';

export const TableContainer = React.memo(({ data }) => {
    return (
        <div>
            <p>{data}</p>
        </div>
    );
});

