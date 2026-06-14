



import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("hire-loop");
await client.connect();
export const auth = betterAuth({
      database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 

  }, 
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true, // or false, depending on your needs
        defaultValue: "seeker",
      },
    },
  },
});

