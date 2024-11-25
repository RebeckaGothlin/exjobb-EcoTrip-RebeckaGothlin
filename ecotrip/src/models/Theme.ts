export interface ITheme {
    name: string;
    linkButtonBackgroundColor: string;
    linkButtonTextColor: string;
    navBackgroundColor: string;
    navTextColor: string;
    activeNavTextColor: string;
    textContainerBackgroundColor: string;
    textContainerTextColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    buttonBorderColor: string;
    sliderBackgroundColor: string;
    sliderBorderColor: string;
}

interface IThemes {
    dark: ITheme;
    light: ITheme;
}

export const themes: IThemes = {
    dark: {
        name: "Dark",
        linkButtonBackgroundColor: "white",
        linkButtonTextColor: "black",
        navBackgroundColor: "rgba(0, 0, 0, 0.8)",
        navTextColor: "white",
        activeNavTextColor: "white",
        textContainerBackgroundColor: `
            radial-gradient(circle at 30% 30%, rgba(75, 0, 75, 0.4), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(178, 41, 98, 0.3), transparent 60%),
            radial-gradient(circle at 50% 90%, rgba(139, 0, 66, 0.2), transparent 10%),
            #000000`,



        //     textContainerBackgroundColor: `
        //     radial-gradient(circle at 30% 30%, rgba(0, 0, 139, 0.2), transparent 50%),  
        //     radial-gradient(circle at 70% 70%, rgba(0, 191, 255, 0.15), transparent 60%),
        //     radial-gradient(circle at 50% 90%, rgba(0, 0, 255, 0.1), transparent 70%),   
        //     #000000; /* Svart */
        //     background-size: 200% 200%;
        //     animation: moveBackground 20s infinite linear;
        //   `,



        textContainerTextColor: "white",
        buttonBackgroundColor: "linear-gradient(45deg, rgba(0, 0, 139, 0.8), rgba(255, 105, 180, 0.8))",

        buttonTextColor: "white",
        buttonBorderColor: "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px",
        // sliderBackgroundColor: "linear-gradient(#004E41, #51b8a7)",
        // sliderBackgroundColor: "linear-gradient(45deg, rgba(0, 0, 139, 0.8), rgba(173, 216, 230, 0.8))", 
        sliderBackgroundColor: "linear-gradient(225deg, rgba(128, 0, 168, 0.8), rgba(255, 105, 180, 0.8), rgba(255, 165, 0, 0.8))",


        sliderBorderColor: "none",
    },
    light: {
        name: "Light",
        linkButtonBackgroundColor: "black",
        linkButtonTextColor: "white",
        navBackgroundColor: "rgba(255, 255, 255, 0.8)",
        navTextColor: "black",
        activeNavTextColor: "black",
        textContainerBackgroundColor: "white",
        textContainerTextColor: "black",
        buttonBackgroundColor: "linear-gradient(45deg, rgba(255, 165, 0, 0.8), rgba(255, 105, 180, 0.8))",
        buttonTextColor: "black",
        buttonBorderColor: "black",
        // sliderBackgroundColor: "rgba(255, 255, 255, 0.2)",
        sliderBackgroundColor: "linear-gradient(45deg, rgba(255, 165, 0, 0.8), rgba(255, 105, 180, 0.8))",
        sliderBorderColor: "1px solid gray",
    },
}