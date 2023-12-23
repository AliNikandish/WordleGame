import { useState } from "react";
export default function Help() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-center gap-x-2 px-2 py-1 bg-red-500 text-slate-50 rounded shadow cursor-pointer mb-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>

        <p>راهنما</p>
      </button>
      <p className="my-1 text-sm">پس از تکمیل حروف دکمه ی enter کیبورد رو بزنید</p>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">راهنما</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    این اپلیکیشن تستی میباشد و دارای دیتابیس ناقص میباشد برای
                    امتحان کردن از بین کلمات زیر شانس خود را امتحان کنید:
                  </p>
                  <div>
                    <p>ابلاغ</p>
                    <p>ابلهه</p>
                    <p> آبنوس</p>
                    <p> اصالت</p>
                    <p>اصابت</p>
                    <p>اصوات</p>
                    <p>اصواب</p>
                    <p>اصناف</p>
                    <p>اصناع</p>
                    <p>اصلیت</p>
                    <p>اداره</p>
                    <p>اداری</p>
                    <p>اذعان</p>
                    <p>آبادی</p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
