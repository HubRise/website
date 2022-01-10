import * as React from "react"

import { StyledVideo } from "./Styles"

const Video: React.FC = ({ children, ...otherProps }) => <StyledVideo {...otherProps}>{children}</StyledVideo>

export default Video
