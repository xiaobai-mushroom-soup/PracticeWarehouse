import styled from "styled-components";

export const AppWrapper = styled.div`
  .footer {
    background-color: red;
  }
`;

// export const SectionWrapper = styled.div`
//   border: 1px solid red;

//   .title {
//     font-size: ${props => props.size}px;
//     color: ${props => props.color};

//     &:hover {
//       background-color: purple;
//     }
//   }
// `;

// 设置默认值
export const SectionWrapper = styled.div`
  border: 1px solid red;

  .title {
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color || "skyblue"};

    &:hover {
      background-color: purple;
    }
  }
`;
