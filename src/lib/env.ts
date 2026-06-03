type ServerEnv = {
  DATABASE_URL: string;
  NEXT_PUBLIC_SITE_URL: string;
  ONEC_BASE_URL?: string;
  ONEC_USERNAME?: string;
  ONEC_PASSWORD?: string;
  BITRIX24_WEBHOOK_URL?: string;
  CDEK_CLIENT_ID?: string;
  CDEK_CLIENT_SECRET?: string;
  DELLIN_API_KEY?: string;
  AVITO_XML_SECRET?: string;
  S3_ENDPOINT?: string;
  S3_ACCESS_KEY_ID?: string;
  S3_SECRET_ACCESS_KEY?: string;
  S3_BUCKET?: string;
  S3_REGION?: string;
};

type PublicEnv = {
  NEXT_PUBLIC_SITE_URL: string;
};

function readOptionalEnv(name: keyof NodeJS.ProcessEnv): string | undefined {
  const value = process.env[name];

  if (!value || value.trim() === "") {
    return undefined;
  }

  return value;
}

function readRequiredEnv(name: keyof NodeJS.ProcessEnv): string {
  const value = readOptionalEnv(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getServerEnv(): ServerEnv {
  return {
    DATABASE_URL: readRequiredEnv("DATABASE_URL"),
    NEXT_PUBLIC_SITE_URL:
      readOptionalEnv("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000",
    ONEC_BASE_URL: readOptionalEnv("ONEC_BASE_URL"),
    ONEC_USERNAME: readOptionalEnv("ONEC_USERNAME"),
    ONEC_PASSWORD: readOptionalEnv("ONEC_PASSWORD"),
    BITRIX24_WEBHOOK_URL: readOptionalEnv("BITRIX24_WEBHOOK_URL"),
    CDEK_CLIENT_ID: readOptionalEnv("CDEK_CLIENT_ID"),
    CDEK_CLIENT_SECRET: readOptionalEnv("CDEK_CLIENT_SECRET"),
    DELLIN_API_KEY: readOptionalEnv("DELLIN_API_KEY"),
    AVITO_XML_SECRET: readOptionalEnv("AVITO_XML_SECRET"),
    S3_ENDPOINT: readOptionalEnv("S3_ENDPOINT"),
    S3_ACCESS_KEY_ID: readOptionalEnv("S3_ACCESS_KEY_ID"),
    S3_SECRET_ACCESS_KEY: readOptionalEnv("S3_SECRET_ACCESS_KEY"),
    S3_BUCKET: readOptionalEnv("S3_BUCKET"),
    S3_REGION: readOptionalEnv("S3_REGION")
  };
}

export function getPublicEnv(): PublicEnv {
  return {
    NEXT_PUBLIC_SITE_URL:
      readOptionalEnv("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000"
  };
}
