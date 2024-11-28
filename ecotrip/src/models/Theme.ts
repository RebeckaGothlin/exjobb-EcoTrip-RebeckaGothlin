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
    linkButtonBackgroundColor: "transparent", 
    linkButtonTextColor: "#f7e8d0", 
    navBackgroundColor: "rgba(20, 20, 20, 0.95)", 
    navTextColor: "#f7e8d0", 
    activeNavTextColor: "#f7e8d0",
    textContainerBackgroundColor: "#242424",
    textContainerTextColor: "#f7e8d0", 
    buttonBackgroundColor: "transparent", 
    buttonTextColor: "#f7e8d0", 
    buttonBorderColor: "#f7e8d0",
    // sliderBackgroundColor: "linear-gradient(45deg, #ED3975, #ff9f71)",
    sliderBackgroundColor: "#f7e8d0",
    sliderBorderColor: "none", 
},

    
    light: {
        name: "Light",
        linkButtonBackgroundColor: "#f7e8d0",
        linkButtonTextColor: "#242424", 
        navBackgroundColor: "rgba(250, 240, 220, 0.8)",
        navTextColor: "#242424", 
        activeNavTextColor: "#242424",
        textContainerBackgroundColor: "#f7e8d0",
        textContainerTextColor: "#242424", 
        buttonBackgroundColor: "#f7e8d0",
        buttonTextColor: "#242424",
        buttonBorderColor: "rgba(80, 60, 100, 0.9)", 
        sliderBackgroundColor: "#242424", 
        sliderBorderColor: "1px solid rgba(80, 60, 100, 0.9)",
    },
}