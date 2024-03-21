import React from 'react'

const Button = ({ title }) => {
    return (
        <button
            type="button"
            class="text-white bg-custom_orange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {title}
        </button>
    )
}

export default Button