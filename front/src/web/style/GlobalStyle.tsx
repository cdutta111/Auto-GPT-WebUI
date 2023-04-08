import { createGlobalStyle } from "styled-components"
import colors from "./fondation/colors"

const GlobalStyle = createGlobalStyle`
 :root {
    ${colors}
}
body {
    margin: 0;
    padding: 0;
}
* {
    box-sizing: border-box;
}
`
export default GlobalStyle