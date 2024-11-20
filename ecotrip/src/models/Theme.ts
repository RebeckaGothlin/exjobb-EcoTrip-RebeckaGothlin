export interface ITheme {
    name: string;
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
        navBackgroundColor: "rgba(0, 0, 0, 0.6)",
        navTextColor: "white",
        activeNavTextColor: "orange",
        textContainerBackgroundColor: "linear-gradient(#1b2624, #1b2624, #1c5148, #1c5148, #1b2624)",
        textContainerTextColor: "white",
        buttonBackgroundColor: "#c2fbd7",
        buttonTextColor: "white",
        buttonBorderColor: "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px",
        sliderBackgroundColor: "linear-gradient(#004E41, #51b8a7)", 
        sliderBorderColor: "none",
    },
    light: {
        name: "Light",
        navBackgroundColor: "rgba(255, 255, 255, 0.6)",
        navTextColor: "black",
        activeNavTextColor: "blue",
        textContainerBackgroundColor: "white",
        textContainerTextColor: "black",
        buttonBackgroundColor: "#fff",
        buttonTextColor: "black",
        buttonBorderColor: "black",
        sliderBackgroundColor: "rgba(255, 255, 255, 0.2)",
        sliderBorderColor: "1px solid black",
    },
}