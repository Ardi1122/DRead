import { PayEmbed, getDefaultToken } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "@/app/lib/client";

interface PaymentProps {
  book: {
    harga: number;
    judulBuku: string;
    gambar: string;
  };
}

function App({ book }: PaymentProps) {
  return (
    <PayEmbed
      client={client}
      theme={"dark"}
      payOptions={{
        mode: "direct_payment",
        paymentInfo: {
          amount: book.harga.toString(),
          chain: base,
          token: getDefaultToken(base, "USDC"),
          sellerAddress:
            "0xEb0effdFB4dC5b3d5d3aC6ce29F3ED213E95d675",
        },
        metadata: {
          name: book.judulBuku,
          image: "/drip-hoodie.png",
        },
      }}
    />
  );
}


export default App;