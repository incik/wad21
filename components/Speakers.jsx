import Speaker from "./Speaker";

const Speakers = ({ speakers }) => (
  <div className="flex justify-evenly">
    {speakers.map((speaker) => (
      <Speaker speaker={speaker} />
    ))}
  </div>
);

export default Speakers;
