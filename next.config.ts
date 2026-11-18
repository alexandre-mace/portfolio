import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
        // partagé par tous les projets du compte, et `hostname: "**"` laissait
        // n'importe qui faire transformer n'importe quelle image du web. La seule
        // image du site est une icône de 12 px, servie telle quelle.
        unoptimized: true,
    },
};

export default nextConfig;
