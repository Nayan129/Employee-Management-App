const AllTasks = () => {
  return (
    <div
      id="allTasks"
      className="h-55 w-full flex justify-between p-2 rounded gap-2 flex-wrap overflow-y-auto md:overflow-x-auto md:flex-nowrap md:shrink-0"
    >
      <div className="h-full min-w-39 md:w-65 bg-red-400 rounded-lg p-2">
        <div className="flex justify-between">
          <h3 className="bg-red-500 px-2 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 font-semibold text-xl">Make a youtube video</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores nostrum natus ipsum accusamus dolorem.
        </p>
      </div>
      <div className="h-full min-w-39 md:w-65 bg-green-400 rounded-lg p-2">
        <div className="flex justify-between">
          <h3 className="bg-red-500 px-2 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 font-semibold text-xl">Make a youtube video</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores nostrum natus ipsum accusamus dolorem.
        </p>
      </div>
      <div className="h-full min-w-39 md:w-65 bg-blue-400 rounded-lg p-2">
        <div className="flex justify-between">
          <h3 className="bg-red-500 px-2 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 font-semibold text-xl">Make a youtube video</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores nostrum natus ipsum accusamus dolorem.
        </p>
      </div>
      <div className="h-full min-w-39 md:w-65 bg-yellow-400 rounded-lg p-2">
        <div className="flex justify-between">
          <h3 className="bg-red-500 px-2 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 font-semibold text-xl">Make a youtube video</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores nostrum natus ipsum accusamus dolorem.
        </p>
      </div>
    </div>
  );
};

export default AllTasks;
