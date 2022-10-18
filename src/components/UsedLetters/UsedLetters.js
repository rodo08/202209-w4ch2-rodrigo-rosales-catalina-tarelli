import "./UsedLetters.css";

const UsedLetters = () => {
  const usedLettersList = ["a", "b", "c"];
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {usedLettersList.map((letter, key) => (
          <li key={key} className="used-letter">
            {`${letter}, `}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
