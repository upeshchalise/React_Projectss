import SingleQuestion from "./SingleQuestion";

export default function Questions({ list }) {
  console.log(list);
  return (
    <div className="flex flex-col items-center mt-14 bg-white w-2/3 justify-center mx-auto h-max rounded">
      <h2 className="mb-5 text-5xl">Questions and answer</h2>
      {list.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </div>
  );
}
