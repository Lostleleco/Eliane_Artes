import { Container } from "./styles";

export type Project = {
    title: string;
    description: string;
    tags: string[];
};

type CardProps = {
    title: string;
    description: string;
    tags: string[];
};

const Card = ({ title, description, tags }: CardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-5">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Section = () => {
    const projects: Project[] = [
        {
            title: "The Coldest Sunset",
            description: "Uma visão impressionante do pôr do sol mais frio.",
            tags: ["#photography", "#travel", "#winter"],
        },
        {
            title: "Mountain Adventure",
            description: "Explorando as majestosas montanhas.",
            tags: ["#adventure", "#outdoors", "#mountains"],
        },
        {
            title: "City Lights",
            description: "A beleza das luzes da cidade à noite.",
            tags: ["#cityscape", "#night", "#lights"],
        },
        {
            title: "Ocean Bliss",
            description: "A tranquilidade das ondas do mar.",
            tags: ["#beach", "#ocean", "#vacation"],
        },
        {
            title: "Forest Escape",
            description: "Um refúgio pacífico na floresta.",
            tags: ["#nature", "#forest", "#hiking"],
        },
        {
            title: "Starry Night",
            description: "Um céu estrelado que encanta a alma.",
            tags: ["#astrophotography", "#stars", "#night"],
        },
    ];

    return (
        <>
            <div className="flex mb-auto mt-0">
                <div className="w-full h-36 text-5xl md:font-serif text-blue-500 bg-gray-200 text-center flex justify-center items-center">
                    Alguns de meus trabalhos
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Section;
