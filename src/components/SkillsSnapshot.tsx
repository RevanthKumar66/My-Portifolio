import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTensorflow } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const skills = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "AI / ML", icon: SiTensorflow, color: "text-orange-500" },
];

export default function SkillsSnapshot() {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills Snapshot</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                            <skill.icon className={`h-12 w-12 ${skill.color}`} />
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/about">
                        <Button variant="outline">View All Skills</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
