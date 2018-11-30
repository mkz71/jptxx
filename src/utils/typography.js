import Typography from "typography";

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.5,
    googleFonts: [
        {
            name: "Montserrat",
            styles: [
                "700",
            ]
        },
        {
            name: "Source Sans Pro",
            styles: [
                "400",
                "700",
                "800"
            ]
        }
    ],
    headerFontFamily: ["Montserrat", "sans-serif"],
    bodyFontFamily: ["Source Sans Pro", "sans-serif"]
})

export default typography;