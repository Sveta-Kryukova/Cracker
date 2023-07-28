import { CrackerConstructor } from "../crackerConstructor"

export const MainBlock = () => {
  return (
    <div className="main-block">
      <div className="main-block__content">
        <h2 
        id='about-us'className="main-block__content__title">about cracker</h2>

        <div className="main-block__content__block">
        <article className="main-block__content__block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</article>
        </div>
        <div className="main-block__content__background-image"></div>
        <div className="main-block__content__logo"></div>
      </div>

      <CrackerConstructor />
    </div>
  );
}