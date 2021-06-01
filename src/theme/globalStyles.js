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

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.color.colorDark};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.color.colorDark};
    }
  }

  main {
    min-height: calc(100vh - 354px);
  }

  .container {
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    padding: 0 26px;

    @media (max-width: 1280px) {
      max-width: 1090px;
    }

    @media (max-width: 768px) {
      max-width: 752px;
    }
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .icon .-stroke {
    fill: none;
    stroke: currentColor;
    stroke-width: 1px;
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
