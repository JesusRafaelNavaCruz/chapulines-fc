import styled from "styled-components";

export const HeroWrapper = styled.header`
  position: relative;
  height: 300px;
  width: 100%;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    background: rgba(48, 1, 50, 0.6);
  }

  .subtitle {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1rem;
  }

  .title {
    font-size: 7rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
  }

  .banner-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 750px) {
    .line1 {
      font-size: 2.3rem;
    }
    .line2 {
      font-size: 9rem;
    }
  }
`;
