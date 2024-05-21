import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
    {
        name: "Origins #1",
        url: "https://www.mediafire.com/file/hv6lvdzgohbzid3/origins-world.zip/file",
        urlTS: "https://modrinth.com/modpack/xdaluls-origins",
        description: (
            <Translate id="origins.download.description">
                Erstes aktives Minecraft Mod Projekt von uns, mit der Hauptmod
                Origins und vielen weiteren Mods. Zum spielen der Welt bitte
                unten auf dem Modpack button, das Modpack auf Modrinth herunterladen.
            </Translate>
        )
    }
    //{
    //name: "⚡ StackBlitz 🆕",
    //url: "https://docusaurus.new/stackblitz",
    //urlTS: "https://docusaurus.new/stackblitz-ts",
    //description: (
    //<Translate
    //id="playground.stackblitz.description"
    //values={{
    //webContainersLink: (
    //<Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
    //WebContainers
    //</Link>
    //)
    //}}
    //>
    //{
    //"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser."
    //}
    //</Translate>
    //)
    //}
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
                            <Translate id="playground.tryItButton">Minecraft 1.20.1</Translate>
                        </b>
                    </div>
                    <div className="button-group button-group--block">
                        <Link className="button button--secondary" to={url}>
                            Welt Download
                        </Link>
                        <Link className="button button--secondary" to={urlTS}>
                            Modpack
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PlaygroundCardsRow() {
    return (
        <div className="row">
            {Playgrounds.map(playground => (
                <PlaygroundCard key={playground.name} {...playground} />
            ))}
        </div>
    )
}
