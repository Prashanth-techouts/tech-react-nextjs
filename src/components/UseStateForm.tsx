import React, { useState } from "react";

function UseStateForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            id="first_name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            id="last_name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h3>yopur first name is {name.firstName}</h3>
          <h3>yopur last name is {name.lastName}</h3>
          <h1>{JSON.stringify(name)}</h1>
        </div>
      </form>
    </div>
  );
}

export default UseStateForm;
