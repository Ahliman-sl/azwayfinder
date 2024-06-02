/* eslint-disable react/prop-types */
export default function DatePicker() {
  // const handleDateChange = (event) => {
  //   setSelectedDate(new Date(event.target.value));
  // };

  const now = new Date();

  // Günü, ayı ve yılı alarak formatı değiştirin
  const day = String(now.getDate()).padStart(2, "0"); // Günü iki haneli formatta alın
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Ayı iki haneli formatta alın (0-11 olduğu için +1 ekleyin)
  const year = now.getFullYear(); // Yılı alın

  // İstediğiniz formatta tarihi birleştirin
  const formattedDate = `${day}.${month}.${year}`;

  return (
    <>
      {/**/}
      <div className="relative my-2">
        <div className="peer relative px-5 py-2 text-center rounded-md border bg-gray-900 border-slate-200 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-900 disabled:text-slate-400">
          {formattedDate}
        </div>
      </div>
      {/**/}
    </>
  );
}
// {formattedDate.split(",")[0]}
