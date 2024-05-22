import { GraduationCap } from "lucide-react";
import React from "react";

type Props = {
  sekolah: string;
  propinsi?: string;
  kabupaten?: string;
  kecamatan?: string;
  npsn?: string;
  bentuk: string;
  status: string;
  alamat?: string;
};

const CardSekolah = ({
  sekolah,
  propinsi,
  kabupaten,
  kecamatan,
  npsn,
  bentuk,
  status,
  alamat,
}: Props) => {
  return (
    <>
      <div className="rounded bg-gray-800 p-5">
        <div className="flex items-start sm:gap-8">
          <GraduationCap size={70} opacity={0.75} />

          <div className="w-full">
            <div className="flex items-center gap-3">
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[12px] font-medium text-white">
                {bentuk}
              </strong>
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[12px] font-medium text-white">
                {status === "N" ? "Negeri" : "Swasta"}
              </strong>
            </div>

            <h1 className="mt-3 text-lg font-medium">
              <a href="#" className="hover:underline">
                {" "}
                {sekolah}{" "}
              </a>
            </h1>

            <div className="mt-1 grid grid-cols-2 w-full gap-3">
              <span>
                <p className="text-sm text-gray-300">Provinsi: {propinsi}</p>
              </span>
              <span>
                <p className="text-sm text-gray-300">
                  Kabupaten / Kota: {kabupaten}
                </p>
              </span>
              <span>
                <p className="text-sm text-gray-300">NPSN: {npsn}</p>
              </span>
              <span>
                <p className="text-sm text-gray-300">Alamat: {alamat}</p>
              </span>
              <span>
                <p className="text-sm text-gray-300">Kecamatan: {kecamatan}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSekolah;
