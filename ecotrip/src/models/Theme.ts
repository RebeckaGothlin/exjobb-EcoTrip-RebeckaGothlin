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
        linkButtonBackgroundColor: "rgba(255, 245, 250, 1)",
        linkButtonTextColor: "rgba(50, 50, 50, 0.9)", 
        navBackgroundColor: "rgba(240, 230, 255, 0.8)",
        navTextColor: "rgba(50, 50, 50, 0.9)", 
        activeNavTextColor: "rgba(80, 80, 80, 1)",
        textContainerBackgroundColor: `
        radial-gradient(circle at center, rgba(245, 230, 255, 0.6), rgba(240, 220, 255, 0.4), transparent 70%),
        radial-gradient(circle at 30% 70%, rgba(250, 240, 255, 0.5), transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(230, 210, 255, 0.3), transparent 50%),
        #ffffff`,
        textContainerTextColor: "rgba(50, 50, 50, 0.9)", 
        buttonBackgroundColor: "rgba(240, 230, 255, 0.9)",
        buttonTextColor: "rgba(50, 50, 50, 0.9)",
        buttonBorderColor: "rgba(80, 60, 100, 0.9)", 
        sliderBackgroundColor: "rgba(240, 230, 255, 0.8)", 
        sliderBorderColor: "1px solid rgba(80, 60, 100, 0.9)",
    },
}