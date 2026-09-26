import React from "react";
const Navbar = () =>{
    return (
        <div className="h-16 dark:bg-[#OAOAOA] bg-white border -b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
            {/* Desktop */}
            <div className = "max-w-7xl mx-auto hidden md:flex justify-between ite-center gap-10 h-full">
                <div className="flex items-centre gap-2">
                    <School size={"30"} />
                    <link to ="/">
                        <h1 className="hidden" md:block font-extrabold text-2xl">
                          E-Learning
                        </h1>
                    </link>

                </div>
                {//* user icons and dark mode icon*/}
                    <div className="flex items-center gap-8">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage
                                            src={user?.photoUrl || "https://github.com/shadcn.pn
                                    </Avatar>
                                </DropdownMenuTrigger>
                            </DropdownMenu>
                        )
                    </div>

            </div>
        </div>
    )
}