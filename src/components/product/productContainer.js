

import React from 'react';
export const ProductContainer = React.memo(({ data }) => {
    return (
        <div>
            <p>{data}</p>
        </div>
    );
});

