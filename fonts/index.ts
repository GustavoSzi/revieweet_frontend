import { Roboto, Poppins, Montserrat } from "next/font/google";

const roboto = Roboto({ 
    subsets: ["latin"],
    weight: ["400", "700"]
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})

const montserrat = Montserrat({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})

export { roboto, poppins, montserrat }