import Header from "@/components/Header/Header";
import { Button } from "@nextui-org/react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import htmlLogo from "../../public/html.svg";
import cssLogo from "../../public/css.svg";
import gitLogo from "../../public/git.svg";
import jsLogo from "../../public/js.svg";
import nodejsLogo from "../../public/nodejs.svg";
import tailwindLogo from "../../public/tailwind.svg";
import typescriptLogo from "../../public/typescript.svg";
import nextjsLogo from "../../public/nextjs.svg";
import reactLogo from "../../public/react.svg";
import { CardProjects } from "@/components/CardProjects/CardProjects";
import { Footer } from "@/components/Footer/Footer";



export default function Home() {
    return (
        <>
            <Header />

            {/** apresentação */}
            <div className="mx-4 h-[100vh] flex items-center justify-between py-36">
                <div className="flex">

                    <div className="block px-4">
                        <Link target="_blank" href={""} className="p-1">
                            <GithubLogo className="text-blue-500" size={30} />
                        </Link>

                        <Link target="_blank" href={""}>
                            <LinkedinLogo className="text-blue-500" size={30} />
                        </Link>
                    </div>

                    <div className="block">
                        <h2 className="text-slate-800 text-4xl font-bold py-1">
                            Hi, {"I'am Pedro Faria"}
                        </h2>

                        <span className="text-blue-500 text-xl font-bold py-1">Full Stack Developer</span>

                        <p className="text-slate-800 text-sm py-1 font-bold">
                            {"// I'm a developer who enjoys making digital experiences easier and simpler for people by producing quality work."}
                        </p>

                        <Button
                            color="primary"
                            href=""
                        >
                            Download CV
                        </Button>
                    </div>

                </div>

                {/** imagem */}
                <div className="w-[300px]">
                    <dotlottie-player src="https://lottie.host/78dbb6cc-efa9-453e-bf6e-cc8a799d342d/gAHwsZpzlX.lottie" background="transparent" speed="1" direction="1" mode="normal" loop autoplay></dotlottie-player>
                </div>
            </div>


            {/** minhas skilss */}
            <div className="m-4">
                <h2 className="text-center text-4xl font-bold">Skills</h2>
                <span className="text-center block">{"// Technologies I use on a daily basis"}</span>

                <div className="flex justify-center">
                    <div className="flex">
                        <Image src={htmlLogo} alt="html_logo" />
                        <Image src={cssLogo} alt="css_logo" />
                        <Image src={jsLogo} alt="javascript_logo" />
                        <Image src={reactLogo} alt="react_logo" />
                        <Image src={nodejsLogo} alt="nodejs_logo" />
                        <Image src={gitLogo} alt="git_logo" />
                    </div>
                </div>

                <span className="text-center block py-2">{"// Technologies I want to learn"}</span>
                <div className="flex justify-center">
                    <div className="flex">
                        <Image src={typescriptLogo} alt="typescript_logo" />
                        <Image src={nextjsLogo} alt="nextjs_logo" />
                        <Image src={tailwindLogo} alt="tailwind_logo" />
                    </div>
                </div>
            </div>

            <div className="m-4">
                <h2 className="text-center text-4xl font-bold">About Me</h2>
                <span className="text-center block">My introduction</span>
                <div className="my-2">
                    <p className="text-center p-1">{"👋 Hello, my name is Pedro Henrique de Paula Faria, I'm 19 years old."}</p>
                    <p className="text-center p-1">{"👨‍💻 I'm a Developer Full-Stack, passionate about technology"}</p>
                    <p className="text-center p-1">{"💡 I'm currently improving my skills in React, Node.JS and Nextjs"}</p>
                    <p className="text-center p-1">{"🚀 Always be better than yesterday by being 1% better every day"}</p>
                </div>
            </div>

            {/** projetos */}
            <div className="mx-auto flex justify-center max-w-6xl flex-wrap">
                <div className="m-2">
                    <CardProjects
                        title="Video chat"
                        description="Sistema de video chat em tempo real"
                        link_project="https://github.com/pkratosp/videoChat"
                        url="https://pkratosp.github.io/videoChat/"
                        url_image="https://nextui.org/images/hero-card-complete.jpeg"
                        typeFramework={[
                            {
                                title: 'HTML'
                            },
                            {
                                title: 'JavaScript'
                            }
                        ]} />
                </div>

                <div className="m-2">
                    <CardProjects
                        title="Template single"
                        description="Modelo de spa para exemplo"
                        link_project="https://github.com/pkratosp/Template_single"
                        url="https://pkratosp.github.io/Template_single/"
                        url_image="https://nextui.org/images/hero-card-complete.jpeg"
                        typeFramework={[
                            {
                                title: "HTML",
                            },
                            {
                                title: "CSS",
                            },
                            {
                                title: "JavaScript",
                            }
                        ]} />
                </div>

                <div className="m-2">
                    <CardProjects
                        title="Repositórios github"
                        description="Busca respositórios do github"
                        link_project="https://github.com/pkratosp/search-repository-github"
                        url="https://search-repository-github.vercel.app/"
                        url_image="https://nextui.org/images/hero-card-complete.jpeg"
                        typeFramework={[
                            {
                                title: "Typescript"
                            },
                            {
                                title: "Next.js"
                            },
                            {
                                title: "NextUI"
                            },
                            {
                                title: "Tailwind"
                            },
                        ]} />
                </div>

                <div className="m-2">
                    <CardProjects
                        title="Habit front-end"
                        description="Plataforma onde criar seus hábitos do dia a dia"
                        link_project="https://github.com/pkratosp/projeto_habit_web"
                        url=""
                        url_image="https://nextui.org/images/hero-card-complete.jpeg"
                        typeFramework={[
                            {
                                title: "Typescript"
                            },
                            {
                                title: "ViteJs"
                            },
                            {
                                title: "clx"
                            },
                            {
                                title: "phosphor-icons"
                            },
                            {
                                title: "Tailwind"
                            },
                            {
                                title: "Radix-UI"
                            }
                        ]} />
                </div>

                <div className="m-2">
                    <CardProjects
                        title="Habit back-end"
                        description="Uma Api cria para ser responsavel em criar hábitos e mostrar ao usuário"
                        link_project="https://github.com/pkratosp/projeto_habit_server"
                        url=""
                        url_image="https://nextui.org/images/hero-card-complete.jpeg"
                        typeFramework={[
                            {
                                title: "Typescript"
                            },
                            {
                                title: "Prisma"
                            },
                            {
                                title: "SQLite"
                            },
                            {
                                title: "Fastify"
                            },
                            {
                                title: "Zod"
                            },
                        ]} />
                </div>
            </div>


            <Footer />
        </>
    );
}
