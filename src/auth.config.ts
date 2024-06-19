import CredentialsProvider from "next-auth/providers/credentials";
import { authorizeViaCredentials } from "@/actions/authorize";

export const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    authorize: authorizeViaCredentials,
  }),
];
