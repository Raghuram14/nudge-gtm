type LogFields = Record<string, string | number | boolean | null | undefined>;

function write(level: "info" | "warn" | "error", message: string, fields?: LogFields): void {
  const payload = {
    level,
    message,
    time: new Date().toISOString(),
    ...fields,
  };
  const serialized = JSON.stringify(payload);
  if (level === "error") {
    process.stderr.write(`${serialized}\n`);
    return;
  }
  process.stdout.write(`${serialized}\n`);
}

export const logger = {
  info(message: string, fields?: LogFields): void {
    write("info", message, fields);
  },
  warn(message: string, fields?: LogFields): void {
    write("warn", message, fields);
  },
  error(message: string, fields?: LogFields): void {
    write("error", message, fields);
  },
};
