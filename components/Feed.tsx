import React from "react";
import Image from "next/image";

import img from '../public/etec2.svg';

export const Feed = () => {
    return (
        <div className="feed">
            <div className="recentNews">

                <div className="mainNews">
                    <div className="feedItem main">
                        <Image alt="img" width={20} height={20} src={img} />
                    </div>
                </div>

                <div className="othersNews">
                    <div className="feedItem">
                        <Image alt="img" width={20} height={20} src={img} />
                    </div>

                    <div className="feedItem">
                        <Image alt="img" width={20} height={20} src={img} />
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