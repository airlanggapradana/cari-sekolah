import ListContainer from "@/components/ListContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="w-full">
        <div className="container mx-auto px-5">
          <div className="space-y-4 mb-4">
            <h1 className="text-3xl font-bold text-center">Cari Sekolah</h1>
            <p className="text-lg font-medium text-center text-gray-400">
              Merupakan website untuk mencari sekolah berdasarkan nama sekolah
              maupun NPSN.
            </p>
          </div>
          <ListContainer />
        </div>
      </section>
    </main>
  );
}
