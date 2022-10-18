import "./Letters.css";

const Letters = ({ alphabet, onClick }) => {
  const getClickonLetter = (event) => {
    event.preventDefault();
    onClick(event.target.textContent);
  };

  return (
    <ul className="letters">
      {alphabet.split("").map((letter) => {
        return (
          <li key={letter} className="letter" onClick={getClickonLetter}>
            <a href={letter}>{letter.toUpperCase()}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Letters;
