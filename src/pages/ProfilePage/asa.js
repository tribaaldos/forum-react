import { useState } from 'react';

function Square({ value, onSquareCick }) {
    return( 
        <button className="square" onClick={onSqaureClick}>
            {value}
        </button>
    )
}

function boar