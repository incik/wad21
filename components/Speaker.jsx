const Speaker = ({ speaker }) => (
  <div className="flex p-2 w-full max-w-sm shadow rounded-lg mr-2 bg-gray-50 dark:bg-gray-600">
    <img
      loading="lazy"
      src={`https://cdn.hubilo.com/speaker/2116606/350/${speaker.profile_img}`}
      className="rounded-full w-12 h-12 mr-4"
    />
    <div className="flex-col">
      <h3 className={"font-bold text-green-600 dark:text-warmGray-300"}>
        {speaker.name}
      </h3>
      <h4 className={"text-sm text-green-800 dark:text-warmGray-400"}>
        {speaker.short_description}
      </h4>
    </div>
  </div>
);

export default Speaker;
