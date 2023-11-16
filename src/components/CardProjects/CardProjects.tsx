import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { ArrowSquareOut, FolderOpen, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
    title: string
    description: string
    link_project: string
    url: string
    url_image: string
    typeFramework: Array<{
        title: string
    }>
}

export function CardProjects({ title, description, link_project, url, url_image, typeFramework }: Props) {
    return (
        <>
            <Card className="py-4 max-w-xs">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <FolderOpen size={30} />
                        </div>

                        <div className="flex justify-end w-1/2">
                            <Link target="_blank" href={link_project}>
                                <GithubLogo size={30} />
                            </Link>

                            <Link target="_blank" href={url}>
                                <ArrowSquareOut size={30} />
                            </Link>
                        </div>
                    </div>
                    <p className="text-large uppercase font-bold">{title}</p>
                    <p className="text-sm break-words">{description}</p>
                    <div className="flex flex-wrap">
                        {
                            typeFramework.map((element) => (
                                <>
                                    <Chip
                                        className="m-1"
                                        radius="sm"
                                        color="primary"
                                        variant="bordered"
                                    >
                                        {element.title}
                                    </Chip>
                                </>
                            ))
                        }
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={url_image}
                        width={270}
                    />
                </CardBody>
            </Card>

        </>
    )
}