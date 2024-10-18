const Table = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-950 h-[100vh]">
      <div className="mx-auto flex w-full mt-20 flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[92%] lg:h-[60vh] lg:max-w-[80%] lg:px-6 xl:pl-0">
        <div className="relative flex w-full flex-col pt-[20px] md:pt-0">
          <div className="h-full w-full rounded-lg">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full p-0 border-zinc-800 sm:overflow-auto">
              <div>
                <div className="relative w-full overflow-auto">
                  <table className="caption-bottom text-sm w-full">
                    <thead className="[&tr]:border-b border-b-[1px] p-6 border-zinc-800">
                      <tr className="border-zinc-800">
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <div className="flex max-w-max items-center">
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              value="on"
                              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            ></button>
                          </div>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400">
                            EMAIL ADDRESS
                          </p>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400">
                            PROVIDER
                          </p>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400">
                            CREATED
                          </p>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400">
                            LAST SIGN IN
                          </p>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400">
                            USER UID
                          </p>
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800">
                          <p className="text-xs font-semibold text-zinc-400"></p>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&tr:last-child]:border-0">
                      <tr className="border-b border-zinc-800 transition-colors hover:bg-muted/50 dark:hover:bg-zinc-900">
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <div className="flex max-w-max items-center">
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              value="on"
                              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            ></button>
                          </div>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium text-white">
                            vlad@simmmple.com
                          </p>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <div className="flex w-full items-center gap-[14px]">
                            <p className="text-sm font-medium text-white">
                              Google
                            </p>
                          </div>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <div className="flex w-full items-center gap-[14px]">
                            <p className="text-sm font-medium text-white">
                              06 Nov, 2023 11:33
                            </p>
                          </div>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium text-white">
                            06 Nov, 2023 11:33
                          </p>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium text-white">
                            f3f42fc419-ce32-49fc-92df...
                          </p>
                        </td>
                        <td className="p-4 align-middle w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <div>
                            <button
                              className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex items-center text-xl hover:cursor-pointer text-white hover:bg-transparent active:bg-transparent justify-center rounded-lg font-bold transition duration-200"
                              type="button"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* You can add more rows here as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
