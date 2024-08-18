export default function Payee(){
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row items-center justify-center">
                <label className='font-bold dark:text-white'>Payee:</label>
                <input
                type="text"
                name="myname"
                placeholder="Enter Name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            </div>
        </div>
    );
}