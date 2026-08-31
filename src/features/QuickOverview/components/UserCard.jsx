const UserCard = ({ fullName, email, profile }) => {
  return (
    <article className="flex items-center gap-4 mt-5 cursor-pointer h-20 p-3 rounded-md border primary-border-color bg-gradient-to-b from-zinc-50/50 to-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-zinc-50 hover:shadow-sm">
      <div className="size-12 min-w-12 overflow-hidden rounded-full">
        <img
          src={profile}
          alt={fullName}
          className="size-full object-cover"
        />
      </div>    

      <div className="min-w-0 text-xs space-y-1">
        <p className="truncate text-zinc-700">
          کاربر
          <span className="px-1 text-green-500">
            <strong>{fullName}</strong>
          </span>{" "}
          داخل وبسایت ثبت نام کرد
        </p>    

        <p className="truncate text-neutral-500/80">
          {email}
        </p>
      </div>
    </article>
  );
};

export default UserCard;
