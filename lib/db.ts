import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function db<T = any>(
  strings: TemplateStringsArray,
  ...values: any[]
) {
  return sql<T>(strings, ...values);
}
