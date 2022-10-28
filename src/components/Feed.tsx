import React from "react";
import { Image } from "../components/Image";

import img from '../publics/etec2.svg';

export const Feed = () => {
    return (
        <div className="feed">
            <div className="recentNews">

                <div className="mainNews">
                    <div className="feedItem main">
                        <Image src={img} />
                    </div>
                </div>

                <div className="othersNews">
                    <div className="feedItem">
                        <Image src={img} />
                    </div>

                    <div className="feedItem">
                        <Image src={img} />
                    </div>
                </div>

            </div>

            <div className="recentDocuments">
                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

            </div>
        </div>
    )
}