import { styled } from "@linaria/react";
import RainbowText from "~/components/RainbowText";

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
  min-height: 100vh;
  padding: 1rem;

  & > *:where(header, main, footer):not(:empty) {
    border: 1px solid var(--clr-line);
    border-radius: 0.125rem;
    background-color: var(--clr-fg);
    padding: 1rem;
    width: 100%;
    max-width: min(80ch, calc(100vw - 4rem));
    min-width: 250px;
  }

  & > main {
    flex-grow: 1;
  }
`;

type Props = {
  _nothing?: null;
};

const HomePage = (_: Props) => {
  return (
    <>
      <Page>
        <header>
          <h1>
            <RainbowText text="Home Page" />
          </h1>
        </header>
        <main>
          <div className="content">This is the home page</div>
        </main>
        <footer></footer>
      </Page>
    </>
  );
};

export default HomePage;
