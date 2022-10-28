import React from 'react';
import { SmallText } from './Text';

export const Footer = () => {
    return (
        <footer>
            <div className="text">
                <SmallText>
                    ETEC Ferrúcio Humberto Gazzetta
                </SmallText>
                <SmallText>
                    Jardim da alvorada, Nova odessa, SP
                </SmallText>
                <SmallText>
                    (19) 3498-1709 (19) 3476-5074
                </SmallText>
                <SmallText>
                    Copyright © 2021 ETEC FHG
                </SmallText>
            </div>
        </footer>
    )
}