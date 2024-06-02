/* eslint-disable react/prop-types */
export default function DatePicker({ setSelectedDate }) {
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const now = new Date();

  // Tarixi Azərbaycan formatında göstərmək üçün Intl.DateTimeFormat obyektini yaradın
  const formatter = new Intl.DateTimeFormat("az-AZ", {
    year: "numeric",
    month: "numeric", // 'numeric' və ya '2-digit' da istifadə edə bilərsiniz
    day: "numeric",
    weekday: "long", // Bu xətt həftə gününü göstərir, lazım deyilsə silə bilərsiniz
  });

  // Formatlanmış tarixi əldə edin
  const formattedDate = formatter.format(now);

  return (
    <>
      {/**/}
      <div className="relative my-2">
        <input
          id="id-date01"
          type="date"
          name="id-date01"
          className="peer relative h-10 w-[10rem] text-center rounded-md border bg-gray-900 border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-900 disabled:text-slate-400"
          value={formattedDate.split(",")[0]}
          onChange={handleDateChange}
          disabled
        />
      </div>
      {/**/}
    </>
  );
}
