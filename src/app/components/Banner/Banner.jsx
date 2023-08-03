"use client";

import { HeroWrapper } from "./Banner.element";

function Banner({title, subtitle, img}) {
    return (
        <HeroWrapper>
            <div className="overlay">
                <div className="content">
                    <span className="title">{title}</span>
                    <span className="subtitle">{subtitle}</span>
                </div>
            </div>
        </HeroWrapper>
    )
}
