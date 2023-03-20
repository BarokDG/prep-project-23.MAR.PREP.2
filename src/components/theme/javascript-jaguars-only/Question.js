export default function Question({ setAnsweredQuestion }) {
  const handleOnChange = (e) => {
    const answer = e.target.value.toLowerCase();

    answer.split(" ").forEach((word) => {
      if (word === "javascript" || word === "js") setAnsweredQuestion(true);
    });
  };

  return (
    <>
      <h1>What does a Jaguar do in his spare time?</h1>
      <form action="">
        <input
          type="text"
          placeholder="Type in your answer..."
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}