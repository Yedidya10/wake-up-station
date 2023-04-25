import "styled-components"
import { lightTheme, darkTheme } from "./themes"

type ThemeInterface = typeof lightTheme | typeof darkTheme

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface (this is only necessary if you ur eslint complains. Since it should be and Interface and not a Type.) 
    interface DefaultTheme extends ThemeInterface {}
}