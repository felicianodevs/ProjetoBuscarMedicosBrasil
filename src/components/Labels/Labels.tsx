import Search from '../../assets/search.png'
import Magnifier from '../../assets/magnifier.png'

export default function Labels() {
  return (
    <div id="Search" className="flex justify-start  my-8">
      <label className="relative block">
        <span className="absolute inset-y-0 left-[350px] flex items-center pl-2 ">
          <img src={Magnifier} className="" />
        </span>
        <input
          className=" w-[400px] h-[56px] placeholder:[#e01c1c] block bg-white border border-[#E0E0E0] rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:[#757575] focus:[#757575] focus:ring-1 sm:text-base"
          placeholder="Pesquise Palavra Chave..."
          type="text"
          name="search"
        />
      </label>

      <div className="px-4">
        <select
          id="countries"
          className=" border w-[258px] h-14
          text-[#757575] text-sm rounded-2xl border[1.6px] focus:ring-blue-500 focus:border-blue-500  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected className="text-lg">
            Choose a country
          </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="px-4">
        <select
          id="countries"
          className=" border w-[258px] h-14 border-gray-300
          text-[#757575] text-sm rounded-2xl border[1.6px] focus:ring-blue-500 focus:border-blue-500  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-gray-400"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div>
        <select
          id="countries"
          className=" border w-[258px] h-14 border-gray-300
          text-[#757575] text-sm rounded-2xl border[1.6px] focus:ring-blue-500 focus:border-blue-500  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  )
}
