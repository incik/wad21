const Description = ({ description }) => (
  <div
    className="text-sm text-justify my-4 dark:text-gray-100"
    dangerouslySetInnerHTML={{
      __html: description,
    }}
  />
);

export default Description;
