import styled from "styled-components"

import { colors } from "@utils/styles"

export const StyledMDX = styled.div`
  h4 {
    color: ${colors.darkGray};
    font-weight: bold;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 2.5rem;
    width: 100%;
    text-align: left;
  }

  h4:after {
    content: "";
    position: absolute;
    left: 0;
    right: inherit;
    top: 100%;
    margin: 10px auto;
    width: 15%;
    height: 3px;
    background: #ececec;
  }

  h5 {
    display: inline-block;
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    width: 100%;
    text-align: left;
  }

  h6 {
    display: inline-block;
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.15rem;
    width: 100%;
    text-align: left;
  }

  p {
    text-align: left;
    color: ${colors.lightGray};
    font-weight: 400;
    margin-bottom: 2rem;
  }

  blockquote {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-left: 3px solid #ececec;

    p {
      font-style: italic;
      margin-bottom: 1rem;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  p + blockquote {
    margin-top: -1rem;
  }
`
