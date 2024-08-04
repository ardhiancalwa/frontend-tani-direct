import React from "react";
import PesananDibuatIcon from "../../assets/images/stepper1.svg";
import PesananDikemasIcon from "../../assets/images/stepper2.svg";
import PesananSampaiIcon from "../../assets/images/stepper3.svg";
import PesananDiterimaIcon from "../../assets/images/stepper4.svg";
import PesananSelesaiIcon from "../../assets/images/stepper5.svg";
import TerkirimIcon from "../../assets/images/stepper6.svg";
import PesananSampaiVerticalIcon from "../../assets/images/stepper7.svg";
import DikemasIcon from "../../assets/images/stepper8.svg";
import DibuatIcon from "../../assets/images/stepper9.svg";
import DetailOrder from "../../components/common/text_detail_order";

const steps = [
  {
    label: "Pesanan Dibuat",
    icon: (
      <img
        src={PesananDibuatIcon}
        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Dibuat"
      />
    ),
  },
  {
    label: "Pesanan Dikemas",
    icon: (
      <img
        src={PesananDikemasIcon}
        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Dikemas"
      />
    ),
  },
  {
    label: "Pesanan Sampai",
    icon: (
      <img
        src={PesananSampaiIcon}
        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Sampai"
      />
    ),
  },
  {
    label: "Pesanan Diterima",
    icon: (
      <img
        src={PesananDiterimaIcon}
        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Diterima"
      />
    ),
  },
  {
    label: "Pesanan Selesai",
    icon: (
      <img
        src={PesananSelesaiIcon}
        className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Selesai"
      />
    ),
  },
];

const stepsVertical = [
  {
    date: "28 Jun",
    time: "13.21",
    label: "Terkirim",
    icon: (
      <img
        src={TerkirimIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Terkirim"
      />
    ),
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi transit Hub terakhir Daan Mogot Hub",
    icon: (
      <img
        src={PesananSampaiVerticalIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Sampai"
      />
    ),
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi sortir Cakung DC",
    icon: (
      <img
        src={PesananSampaiIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Sampai"
      />
    ),
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi sortir Bandung DC",
    icon: (
      <img
        src={PesananDiterimaIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Diterima"
      />
    ),
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan sedang diproses di pusat penyortiran",
    icon: (
      <img
        src={PesananSelesaiIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Selesai"
      />
    ),
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah diserahkan ke jasa kirim",
    icon: (
      <img
        src={PesananSelesaiIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesanan Selesai"
      />
    ),
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Sedang Dikemas",
    icon: (
      <img
        src={DikemasIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Sedang Dikemas"
      />
    ),
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesan Dibuat",
    icon: (
      <img
        src={DibuatIcon}
        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]"
        alt="Pesan Dibuat"
      />
    ),
    isBlank: false,
  },
];

const ContentTrackingOrder = ({ currentStep }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[20px] md:h-[28px] lg:h-[40px]"></div>
      <div className="flex justify-between items-center w-full md:border border-gray border-opacity-50 rounded-xl md:p-[20px] lg:p-9">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            <div
              className={`w-[45px] h-[45px] lg:w-16 lg:h-16 p-[10px] lg:p-3 rounded-full flex items-center justify-center z-10 border-4 border-white ${
                index <= currentStep ? "bg-primary" : "bg-primary"
              }`}
            >
              {step.icon}
            </div>
            <div style={{ height: 3 }}></div>
            <span
              className={`font-inter font-semibold text-[8px] lg:text-[16px] ${
                index <= currentStep ? "text-gray" : "text-black"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="absolute top-[24px] lg:top-8 left-4 md:left-14 lg:left-28 w-full border-t-[1px] lg:border-t-2 border-primary"></div>
            )}
          </div>
        ))}
      </div>
      <div className="h-[20px] md:h-[28px] lg:h-[40px]"></div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div
          className="hidden lg:flex lg:border border-gray border-opacity-50 rounded-xl"
          style={{ width: 490, height: 658 }}
        >
          <div className="hidden lg:flex flex-col items-start pl-5 pr-5 pt-8">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 20 }}
            >
              Lacak
            </div>
            <div className="h-4"></div>
            <hr className="w-[400px] border border-gray border-opacity-50" />
            <div className="h-7"></div>
            <DetailOrder title={"Nomor resi"} value={"SPXID091232829212"} />
            <DetailOrder title={"Pengirim"} value={"Nama Petani"} />
            <DetailOrder title={"Tanggal pengiriman"} value={"23 April 2024"} />
            <DetailOrder title={"Estimasi tiba"} value={"28 - 29 April 2024"} />
            <DetailOrder title={"Tanggal pengiriman"} value={"23 April 2024"} />
          </div>
        </div>
        <div className="lg:hidden flex flex-col items-start">
          <div className="font-inter font-semibold text-[14px] text-black">
            Lacak
          </div>
          <div className="h-[5px]"></div>
          <hr className="w-full md:w-full border-t-[1px] border-gray border-opacity-50" />
          <div className="h-[5px]"></div>
          <div className="flex flex-row  w-[350px] md:w-full  justify-between">
            <DetailOrder title={"Nomor Resi"} value={"SPXID091232829212"} />
            <DetailOrder title={"Tanggal pengiriman"} value={"23 April 2024"} />
            <DetailOrder title={"Tanggal pengiriman"} value={"23 April 2024"} />
          </div>
          <div className="flex flex-row w-[240px] md:w-[405px] justify-between">
            <DetailOrder title={"Pengirim"} value={"Nama Petani"} />
            <DetailOrder title={"Estimasi tiba"} value={"28 - 29 April 2024"} />
          </div>
        </div>

        <div className="pt-[30px] md:pt-[40px] lg:pt-0">
          <div className="border border-gray border-opacity-50  lg:pt-0 rounded-xl ">
            <div className="flex flex-col items-start w-[350px] h-[480px] md:w-[700px] md:h-[480px] lg:w-[865px] lg:h-[658px] p-[22px] lg:p-8">
              <div
                className="font-inter font-bold text-black"
                style={{ fontSize: 20 }}
              >
                Delivered
              </div>
              <div className="pb-[15px] md:h-[15px] lg:h-7"></div>
              <hr className="w-[350px] md:w-full border-[1px] border-gray border-opacity-50" />
              <div className="pt-[15px] lg:h-7"></div>
              <div className="w-[350px] md:w-full rounded-xl">
                {stepsVertical.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center relative mb-[10px] lg:mb-6"
                  >
                    <div className="flex flex-col items-center mr-[7px] lg:mr-4 text-black font-inter font-medium text-[10px] md:text-[12px]">
                      <div className="w-[33px] md:w-[45px]">
                        <div>{step.date}</div>
                        <div>{step.time}</div>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`p-[6px] lg:p-1 rounded-full flex items-center justify-center z-10 border-2 lg:border-4 border-white ${
                          index <= currentStep - 1
                            ? "bg-green-500"
                            : "bg-primary"
                        } ${
                          step.isBlank
                            ? "w-[30px] h-[30px] lg:w-11 lg:h-11"
                            : "w-[30px] h-[30px] lg:w-11 lg:h-11"
                        }`}
                      >
                        {step.isBlank ? " " : step.icon}
                      </div>
                      {index < stepsVertical.length - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 lg:h-18 bg-black"></div>
                      )}
                    </div>
                    <div className="ml-4 text-start">
                      <span
                        className={`font-inter font-semibold  text-[12px] md:text-[16px] lg:text-[18px] ${
                          index <= currentStep - 1 ? "text-gray" : "text-black"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTrackingOrder;
