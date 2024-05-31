/* eslint-disable react/prop-types */
export default function DatePicker({ selectedDate, setSelectedDate }) {
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value)); // Seçilen tarihi Date objesine dönüştür
  };

  return (
    <>
      {/**/}
      <div className="relative my-2">
        <input
          id="id-date01"
          type="date"
          name="id-date01"
          className="peer relative h-10 w-[10rem] rounded-md border bg-gray-900 border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          value={selectedDate.toISOString().split("T")[0]} // Yalnızca tarihi göster (YYYY-MM-DD formatı)
          onChange={handleDateChange}
        />
      </div>
      {/**/}
    </>
  );
}
