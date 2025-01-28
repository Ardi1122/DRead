"use client";
import { popularBooks, recentlyBooks } from "@/constants/books";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/Header";

export default function BookDetail() {
  const { id } = useParams();

  if (!id) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const bookId = parseInt(id as string);
  const allBooks = [...popularBooks, ...recentlyBooks];
  const book = allBooks.find((b) => b.id === bookId);

  if (!book) {
    return <div className="text-center mt-20">Book not found.</div>;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <div className="px-14 sm:px-12 md:px-24 mx-auto pt-32 pb-16 flex flex-col md:flex-row gap-8 lg:gap-x-28 justify-center items-center">
         
            <div className="md:h-auto w-full md:w-96">
              <Image
                src={book.gambar}
                alt={book.judulBuku}
                width={280}
                height={400}
                className="mx-auto bg-black lg:w-[350px] lg:h-[512px]"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-6">
                {book.judulBuku}
              </h1>
              <p className="text-lg font-semibold">{book.author}</p>
              <p className="text-lg font-semibold">{book.kategori}</p>
              <p className="text-lg font-semibold">{book.jumlahBuku}</p>
              <p className="text-lg font-semibold mb-4">{book.tahunTerbit}</p>
              <p className="text-lg">{book.deskripsi}</p>
            </div>
        </div>
      </main>
    </>
  );
}
