const TeamMember = () => {
  return (
    <div className="flex items-center gap-4 p-2">
      <div className="h-16 w-16">
        <img
          className="h-full w-full object-cover rounded-full"
          src="https://github.com/shadcn.png"
          alt="Profile picture of Amitai Eliram"
        />
      </div>
      <div className="flex-1 px-2 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Amitai Eliram</h2>
            <p>Co-founder & CEO</p>
          </div>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#0076b2"
                  d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
                />
                <path
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
