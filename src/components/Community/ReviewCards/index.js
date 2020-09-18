import React from 'react';
import ReviewCards_Mobile from './Mobile';
import ReviewCards_Tablet from './Tablet';
import useWindowSize from '../../WindowCheck';

export default function ReviewCards() {
    const isMobile = useWindowSize().width < 768;
    const ReviewCards = isMobile ? <ReviewCards_Mobile /> : <ReviewCards_Tablet />;

    return ReviewCards;
};