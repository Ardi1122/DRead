import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { client } from "@/app/lib/client";

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function Login() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          primaryButtonBg: "hsl(240, 0%, 5%)",
          primaryButtonText: "hsl(0, 0%, 100%)",
        },
      })}
      connectModal={{ size: "compact" }}
    />
  );
}


export default Login;