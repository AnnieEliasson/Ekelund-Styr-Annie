import AboutCard from "../AboutCard/AboutCard";
import FilterBtn from "../FilterButton/FilterBtn";
import NavBar from "../NavBar/NavBar";
import NewComment from "../NewComment/NewComment";
import SearchBar from "../SearchBar/SearchBar";
import PropertyTable from "../Table/Table";
import "./Modal.scss";
import keyDown from "../../hooks/useKeyDown";

const Modal = () => {
  const closeModal = () => {
    const modalBackground = document.querySelector(
      ".Modal-background"
    ) as HTMLElement;

    modalBackground.style.display = "none";
  };

  keyDown("Escape", closeModal);

  return (
    <div
      className="Modal-background"
      onClick={() => {
        closeModal();
      }}
    >
      <div className="Modal" onClick={(event) => event.stopPropagation()}>
        <AboutCard />
        <NavBar />
        <div className="search-container">
          <FilterBtn />
          <SearchBar />
          <div className="small-icons-container">
            <img
              className="comment-icon"
              src="src\assets\addcomment.svg"
              alt=""
              onClick={() => {
                const comment = document.querySelector(
                  ".NewComment"
                ) as HTMLElement;

                comment.style.display = "block";
              }}
            />
            <img className="comment-icon" src="src\assets\Send.svg" alt="" />
            <img className="comment-icon" src="src\assets\Delete.svg" alt="" />
          </div>
        </div>
        <NewComment />
        <PropertyTable />
      </div>
    </div>
  );
};

export default Modal;
