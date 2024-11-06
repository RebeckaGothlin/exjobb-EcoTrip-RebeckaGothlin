export interface ITheme {
    name: string;
    navBackgroundColor: string;
    navTextColor: string;
    textContainerBackgroundColor: string;
    textContainerTextColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
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
        textContainerBackgroundColor: "#4b524d",
        textContainerTextColor: "white",
        buttonBackgroundColor: "#333",
        buttonTextColor: "white"
    },
    light: {
        name: "Light",
        navBackgroundColor: "rgba(255, 255, 255, 0.6)",
        navTextColor: "black",
        textContainerBackgroundColor: "white",
        textContainerTextColor: "black",
        buttonBackgroundColor: "#fff",
        buttonTextColor: "black"
    },
}