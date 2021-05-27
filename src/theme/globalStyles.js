import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Neue-Machina-Regular';
    src: url('/fonts/Neue-Machina/NeueMachina-Regular.eot');
    src: url('/fonts/Neue-Machina/NeueMachina-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Neue-Machina/NeueMachina-Regular.woff2') format('woff2'),
      url('/fonts/Neue-Machina/NeueMachina-Regular.woff') format('woff'),
      url('/fonts/Neue-Machina/NeueMachina-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BasisGrotesquePro-Bold';
    src: url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Bold.eot');
    src: url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Bold.woff2') format('woff2'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Bold.woff') format('woff'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'BasisGrotesquePro-Regular';
    src: url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Regular.eot');
    src: url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Regular.woff2') format('woff2'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Regular.woff') format('woff'),
      url('/fonts/Basis-Grotesque-Pro/BasisGrotesquePro-Regular.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-width: 320px;
    font-family: BasisGrotesquePro-Regular;
    font-size: 14px;
    background: ${(props) => props.theme.color.colorWhite};
  }

  a {
    color: $color-dark;
    text-decoration: none;

    &:hover {
      color: $color-dark;
    }
  }

  @keyframes blur1 {
    0% {
      filter: blur(0) contrast(1);
    }

    50% {
      filter: blur(5px) contrast(20);
    }

    100% {
      filter: blur(0) contrast(1);
    }
  }

  @keyframes blur2 {
    0% {
      filter: blur(0) contrast(20);
    }

    50% {
      filter: blur(8px) contrast(20);
    }

    100% {
      filter: blur(0) contrast(20);
    }
  }
`;
