const Phrase = ({ text }) => {
  return text.map((data) => (
    <div className="block">
      <h3>{data}</h3>
    </div>
  ));
};

export default Phrase;
