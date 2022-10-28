import React from 'react';
import { SmallText } from './Text';

export const Footer = () => {
    return (
        <footer>
            <div className="text">
                <SmallText
                text='ETEC Ferrúcio Humberto Gazzetta'
                />
                <SmallText
                text='Jardim da alvorada, Nova odessa, SP'
                />
                <SmallText 
                text='(19) 3498-1709 (19) 3476-5074'
                />
                <SmallText
                text='Copyright © 2021 ETEC FHG'
                />
            </div>
        </footer>
    )
}