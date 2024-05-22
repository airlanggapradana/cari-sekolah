"use client";
import React from "react";
import { DataSekolah } from "@/types/TipeData";
import CardSekolah from "./CardSekolah";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScanSearch } from "lucide-react";
import { useEffect, useState } from "react";

// Debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const GetAllSekolah = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [dataSekolah, setDataSekolah] = useState<DataSekolah[]>([]);
  const debouncedSearchItem = useDebounce(userSearch, 1000);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const fetchData = async (query: string = "?perPage=15") => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const res = await fetch(`${baseUrl}/sekolah${query}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setDataSekolah(data.dataSekolah || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setDataSekolah([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const query =
      debouncedSearchItem.length > 4
        ? `/s?sekolah=${debouncedSearchItem}&perPage=15`
        : "";
    fetchData(query);
  }, [debouncedSearchItem]);

  return (
    <>
      <form className="w-[60%] mx-auto p-4 border-2 border-gray-700 rounded-md flex items-center justify-between">
        <input
          onChange={(e) => setUserSearch(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder="Cari Sekolah berdasarkan nama..."
          className="w-full bg-transparent outline-none"
        />
        <ScanSearch size={28} opacity={0.75} />
      </form>
      <ScrollArea className="h-[45rem] w-[60%] rounded-lg border border-gray-500 p-4 mx-auto">
        <div className="space-y-7">
          {dataSekolah ? (
            <>
              {dataSekolah.map((item: DataSekolah) => (
                <CardSekolah
                  key={item.id}
                  sekolah={item.sekolah}
                  bentuk={item.bentuk}
                  status={item.status}
                  propinsi={item.propinsi}
                  kabupaten={item.kabupaten_kota}
                  npsn={item.npsn}
                  alamat={item.alamat_jalan}
                  kecamatan={item.kecamatan}
                />
              ))}
            </>
          ) : (
            <>
              <h1 className="text-center font-bold text-xl">
                Data tidak ditemukan...
              </h1>
            </>
          )}
        </div>
      </ScrollArea>
    </>
  );
};

const ListContainer = () => {
  return (
    <>
      <div className="space-y-7">
        <GetAllSekolah />
      </div>
    </>
  );
};

export default ListContainer;
