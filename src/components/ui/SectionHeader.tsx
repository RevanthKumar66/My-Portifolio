"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
    return (
        <div className={cn("mb-10 md:mb-12",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right",
            className
        )}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
