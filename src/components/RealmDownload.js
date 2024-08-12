import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
    {
        name: "Survival | Events Realm",
        url: "https://www.mediafire.com/file/2a3dlll65jhozqr/archive-2021-12-24T220447%252B0100.tar/file",
        description: (
            <Translate id="realm.download.description">
                Der Survival Events Realm war das erste
                richtige Minecraft ding von mir,
                wo auch die meisten dazu kamen und
                bis heute geblieben sind (Wenige von ihnen xd)
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
                            <Translate id="playground.tryItButton">Minecraft 1.20</Translate>
                        </b>
                    </div>
                    <div className="button-group button-group--block">
                        <Link className="button button--info" to={url}>
                            Welt-Download
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
