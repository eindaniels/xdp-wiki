import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
    {
        name: "Hardcore",
        url: "https://www.mediafire.com/file/vwsze5fvytosbi9/Welt-Download.zip/file",
        description: (
            <Translate id="hardcore.download.description">
                Mini-Projekt was darauf basiert, dass man
                nur ein Leben hat zwar mit Reviver aber
                auch ne Challenge :3
            </Translate>
        )
    }
]

function PlaygroundCard({ name, url, description }) {
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
                        <Link className="button button--danger" to={url}>
                            Welt Download
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HardcoreDownloadRow() {
    return (
        <div className="row">
            {Playgrounds.map(playground => (
                <PlaygroundCard key={playground.name} {...playground} />
            ))}
        </div>
    )
}
