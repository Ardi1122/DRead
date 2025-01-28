import Image from "next/image";
import Link from "next/link";

interface Book {
  id: string;
  gambar: string;
  judulBuku: string;
  author: string;
}

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-black text-white rounded-lg shadow-md overflow-hidden"
        >
          <Link href={`book/${book.id}`}>
            <Image
              src={book.gambar}
              alt={book.judulBuku}
              width={300}
              height={168}
              className="h-40 object-cover"
            />
            <div className="p-2">
              <h3 className="text-lg font-bold">{book.judulBuku}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
