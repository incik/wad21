import Speaker from "./Speaker";

const Speakers = ({ speakers }) => (
  <div className="flex flex-col sm:flex-row sm:justify-evenly">
    {speakers.map((speaker) => (
      <Speaker speaker={speaker} />
    ))}
  </div>
);

export default Speakers;
