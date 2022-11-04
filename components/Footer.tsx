import React from 'react';
import { SmallText } from './text';

const Footer = () => {
    return (
        <footer>
            <div className="text">
                <SmallText
                text='2022. ETEC Ferrúcio Humberto Gazzetta'
                />
                <SmallText
                text='Av São Gonçalo, 2770 - Jardim da alvorada, Nova odessa, SP'
                />
                <SmallText 
                text='CEP 13460-000 - (19) 3498-1709 (19) 3476-5074'
                />
                {/* <SmallText
                text='Copyright © 2021 ETEC FHG'
                /> */}
            </div>
        </footer>
    )
}
export default Footer;