import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
    {
        name: "Craftattack 3",
        url: "https://www.mediafire.com/file/4nx4nm637m1cqhd/CA3_Welt.zip/file",
        urlTS: "https://www.mediafire.com/file/tccs91l7e24ajc5/CA_3_Doomsday.zip/file",
        description: (
            <Translate id="craftattack.download.one.description">
                Der 3. Teil von Craftattack bereits, was I guess das
                normalste war von allen bisher es waren Ok leute aktiv
                ausser dass wir paar Fehler bei den Datapacks gemacht haben, aber naja
            </Translate>
        )
    },
    {
        name: "Craftattack 4",
        url: "https://www.mediafire.com/file/6fveu59uzr7bwh6/CA_4_World.zip/file",
        urlTS: "https://www.mediafire.com/file/dc34xwti4rnldms/CA_4_World_Doomsday.zip/file",
        description: (
            <Translate id="craftattack.download.two.description">
                Naja sind wir schon beim vierten... Hier passierte sehr
                viel mit rum experimentieren von Features und anderem
                z.B. es gab den Hub, ein Mayor Feature, Ramen und viele NPCs.
                Für erstmal sollte das, das letzte Craftattack gewesen sein, hieß es.
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
                            <Translate id="playground.tryItButton">Craftattack 3 → 1.19.2 ; Craftattack 4 → 1.20.2</Translate>
                        </b>
                    </div>
                    <div className="button-group button-group--block">
                        <Link className="button button--secondary" to={url}>
                            Normale Welt
                        </Link>
                        <Link className="button button--secondary" to={urlTS}>
                            Doomsday Welt
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PlaygroundCardsRows() {
    return (
        <div className="row">
            {Playgrounds.map(playground => (
                <PlaygroundCard key={playground.name} {...playground} />
            ))}
        </div>
    )
}
