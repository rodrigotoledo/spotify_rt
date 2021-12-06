import {
  HeartIcon,
  HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button class="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button class="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button class="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your library</p>
        </button>
        <hr className="border-top-[0.1px] border-gray-900" />

        <button class="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>

        <button class="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>

        <button class="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-top-[0.1px] border-gray-900" />



        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
      </div>
    </div>
  );
}

export default Sidebar
