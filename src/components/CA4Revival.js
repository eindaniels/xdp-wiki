import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
    {
        name: "CA 4 Revival",
        url: "https://www.mediafire.com/file/sx46suzdqlhbomh/world.zip/file",
        description: (
            <Translate id="ca4rev.download.description">
                Kleines Mini Projekt von Wombli wo er
                die CA 4 Welt umgebaut hat samt aller
                Gebäuden von schon gebauten Basen.
                Credits gehen hier zu Wobo :3
            </Translate>
        )
    }
]
function PlaygroundCard({ name, image, url, urlTS, description }) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className={clsx("card")}>
                <div className="card__body">
                    <Heading as="h3">{name}</Heading>
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <div style={{ textAlign: "center" }}>
                        <b>
                            <Translate id="playground.tryItButton">Minecraft 1.21</Translate>
                        </b>
                    </div>
                    <div className="button-group button-group--block">
                        <Link className="button button--warning" to={url}>
                            Welt-Download
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CA4RevivalDownload() {
    return (
        <div className="row">
            {Playgrounds.map(playground => (
                <PlaygroundCard key={playground.name} {...playground} />
            ))}
        </div>
    )
}
