import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
    return (
        <div className="order-end text-center">
            <div className="order-end-box">
                <Text>Wystąpił błąd</Text>
            </div>
        </div>
    );
}

const Text = styled.h3`
    text-align: center;
`;
