import { useState } from "react";

export default function ZikrOptions() {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handle select change
interface SelectChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}

const handleSelectChange = (event: SelectChangeEvent): void => {
    setSelectedOption(event.target.value);
};

  return (
    <div className="p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Select The Zikr you want to count</h2>
      
      {/* Select input */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Choose an option:
        </label>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          <option value="option1">Subhanallah</option>
          <option value="option2">Alhamdulillah</option>
          <option value="option3">Allahu Akbar</option>
          <option value="option4">Astgafirullah</option>
        </select>
      </div>
      
      {/* Display area - content changes based on selection */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-zinc-600">
        <h3 className="font-medium mb-2">Selected Content:</h3>
        
        {selectedOption === "" && (
          <p className="text-gray-500">Please select an option to display your Zikr</p>
        )}
        
        {selectedOption === "option1" && (
          <div className="bg-blue-100 p-4 r text-center ounded">
            <h4 className="font-bold text-blue-800 text-xl">سبحان الله</h4>
            <p>Glory be to Allah <br /> ( expressing wonder and awe ) </p>
          </div>
        )}
        
        {selectedOption === "option2" && (
          <div className="bg-green-100 p-4  text-center rounded">
            <h4 className="font-bold text-green-800">الحمد لله</h4>
            <p>Praise Be to Allah <br /> ( expressing gratitude and Allah Appreciation)</p>
          </div>
        )}
        
        {selectedOption === "option3" && (
          <div className="bg-purple-100 p-4 text-center  rounded">
            <h4 className="font-bold text-teal-800">الله أكبر</h4>
            <p>Allah is the Greatest <br />(expressing the Greatness of his majesty ) </p>
          </div>
        )}
        {selectedOption === "option4" && (
          <div className="bg-purple-100 p-4 text-center  rounded">
            <h4 className="font-bold text-amber-800">أستغفر الله</h4>
            <p>I seek Allah's Forgiveness <br />( Seeking Forgiveness from Sins )</p>
          </div>
        )}
      </div>
    </div>
  );
}
